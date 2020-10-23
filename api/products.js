const {axios_prestashop} = require('../services/axiosPrestashop')
const builder = require('xmlbuilder2');

const headerXml =  {
    headers: {'Content-Type': 'application/xml'}
};

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

const getProductsByName = async (name_product) => {
    try {
        return await axios_prestashop.get(`products/?filter[name]=[${name_product}]`)
        .then(function (response) {
            return response.data;
        })
    } catch(err) {
        throw err
    }
}


const updateProduct = async (obj, prestashop_xml) => {
    try {

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
        return await axios_prestashop.get(`products`)
        .then(function (response) {
            return response.data;
        })
    } catch(err) {
        throw err
    }

}

module.exports = {
    getAllProducts,
    getProduct,
    getProductsByName,
    updateProduct
}