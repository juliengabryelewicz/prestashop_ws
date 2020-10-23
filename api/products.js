const {axios_prestashop} = require('../services/axiosPrestashop')

const getProduct = async (id_category) => {
    try {
        return await axios_prestashop.get(`productss/${id_category}`)
        .then(function (response) {
            return response.data;
        })
    } catch(err) {
        throw err
    }
}

const getAllProducts = async (id_language) => {

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
    getProduct
}