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

module.exports = {
    getStocksProductAttribute
}