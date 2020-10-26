const {axios_prestashop} = require('../services/axiosPrestashop')
const {headerXml} = require('../services/config')
const builder = require('xmlbuilder2');
const {productSchema} = require("../schema/product")
const {checkIfShopExists, urlIfShopExists} = require("../services/helper")


const createProduct = async (obj, id_shop="") => {
    try {

        let prestashop_obj = builder.convert(productSchema, { format: "object" });

        let url_id_shop = urlIfShopExists(id_shop);

        for (var key in obj){
            prestashop_obj.prestashop.product[key] = obj[key];
        }

        let xmlSend = builder.create(prestashop_obj).end();
        return await axios_prestashop.post(`products${url_id_shop}`,xmlSend, headerXml)
        .then(function (response) {
            return response.data;
        })
    } catch(err) {
        console.log(err)
        throw err
    }
}


const getProduct = async (id_product) => {
    try {
        return await axios_prestashop.get(`products/${id_product}`)
        .then(function (response) {
            return response.data;
        })
    } catch(err) {
        throw err
    }
}

const getProductsByName = async (name_product, id_shop="") => {
    try {

        let params = {
            "display": "full",
            "filter[name]" : `[${name_product}]`
          }

        if(checkIfShopExists(id_shop)){
            params.id_shop=id_shop
        }

        return await axios_prestashop.get(`products`, {
            params: params
          })
        .then(function (response) {
            return response.data;
        })
    } catch(err) {
        throw err
    }
}

const getProductByReference = async (reference_product, id_shop="") => {
    try {

        let params = {
            "display": "full",
            "filter[reference]" : `[${reference_product}]`
          }

        if(checkIfShopExists(id_shop)){
            params.id_shop=id_shop
        }

        return await axios_prestashop.get(`products`, {
            params: params
          })
        .then(function (response) {
            return response.data;
        })
    } catch(err) {
        throw err
    }
}


const updateProduct = async (obj) => {
    try {

        let prestashop_xml = await getProduct(obj.id["#text"]);
        let prestashop_obj = builder.convert(prestashop_xml, { format: "object" });

        // remplacement des anciennes valeurs par les nouvelles (TODO : adapter pour les catégories et autres valeurs multiples)
        for(key in obj) {
            prestashop_obj.prestashop.product[key] = obj[key];
        }

        delete prestashop_obj.prestashop.product.manufacturer_name;
        delete prestashop_obj.prestashop.product.quantity;

        let xmlSend = builder.create(prestashop_obj).end();
        return await axios_prestashop.put(`products`,xmlSend, headerXml)
        .then(function (response) {
            return response.data;
        })
    } catch(err) {
        console.log(err)
        throw err
    }
}

const getAllProducts = async () => {

    try {
        return await axios_prestashop.get(`products`, {
            params: {
              "display": "full"
            }
          })
        .then(function (response) {
            return response.data;
        })
    } catch(err) {
        throw err
    }

}

module.exports = {
    createProduct,
    getAllProducts,
    getProduct,
    getProductsByName,
    getProductByReference,
    updateProduct
}