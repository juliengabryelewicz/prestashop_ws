const {axios_prestashop} = require('../services/axiosPrestashop')

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
    getProduct
}