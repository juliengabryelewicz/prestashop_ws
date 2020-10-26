const {axios_prestashop} = require('../services/axiosPrestashop')
const {headerXml} = require('../services/config')
const builder = require('xmlbuilder2');
const {stockAvailableSchema} = require("../schema/stock_available")

const getStocksProduct = async (id_product) => {
    try {
        return await axios_prestashop.get(`stock_availables/?display=full&filter[id_product]=[${id_product}]`)
        .then(async function (response) {
            return response.data;
        })
    } catch(err) {
        throw err
    }
}

const getStocksProductAttribute = async (id_product_attribute) => {
    try {
        return await axios_prestashop.get(`stock_availables/?display=full&filter[id_product_attribute]=[${id_product_attribute}]`)
        .then(async function (response) {
            return response.data;
        })
    } catch(err) {
        throw err
    }
}

const updateQuantityProductAttribute = async (id_product_attribute, quantity) => {
    try {
        
        let detail_stock_available_xml = await getStocksProductAttribute(id_product_attribute);
        let detail_stock_available_obj = builder.convert(detail_stock_available_xml, { format: "object" });
        
        let prestashop_obj = builder.convert(stockAvailableSchema, { format: "object" });
        prestashop_obj.prestashop.stock_available = detail_stock_available_obj.prestashop.stock_availables.stock_available;
        prestashop_obj.prestashop.stock_available.quantity = quantity; 

        detail_stock_available_xml = builder.create(prestashop_obj).end();

        return await axios_prestashop.put(`stock_availables`,detail_stock_available_xml, headerXml)
        .then(async function (response) {
            return response.data;
        })
    } catch(err) {
        console.log(err);
        throw err
    }
}

module.exports = {
    getStocksProduct,
    getStocksProductAttribute,
    updateQuantityProductAttribute
}