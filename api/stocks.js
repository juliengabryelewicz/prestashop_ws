const {axios_prestashop} = require('../services/axiosPrestashop')
const builder = require('xmlbuilder2');

const headerXml =  {
    headers: {'Content-Type': 'application/xml'}
};

const getStocksProductAttribute = async (id_product_attribute) => {
    try {
        return await axios_prestashop.get(`stock_availables/?filter[id_product_attribute]=[${id_product_attribute}]`)
        .then(async function (response) {
            let response_obj = builder.convert(response.data, { format: "object" });
            const id_stock_available = response_obj.prestashop.stock_availables.stock_available["@id"];
            return await axios_prestashop.get(`stock_availables/${id_stock_available}`)
            .then(function (response2) {
                return response2.data;
            })
        })
    } catch(err) {
        throw err
    }
}

const updateQuantityProductAttribute = async (id_product_attribute, quantity) => {
    try {
        
        let detail_stock_available_xml = await getStocksProductAttribute(id_product_attribute);
        let detail_stock_available_obj = builder.convert(detail_stock_available_xml, { format: "object" });
        
        detail_stock_available_obj.prestashop.stock_available.quantity = quantity; 

        detail_stock_available_xml = builder.create(detail_stock_available_obj).end();

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
    getStocksProductAttribute,
    updateQuantityProductAttribute
}