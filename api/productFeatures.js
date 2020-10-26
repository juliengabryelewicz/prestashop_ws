const {axios_prestashop} = require('../services/axiosPrestashop')

const getProductFeature = async (id_product_feature) => {
    try {
        return await axios_prestashop.get(`product_features/${id_product_feature}`)
        .then(function (response) {
            return response.data;
        })
    } catch(err) {
        throw err
    }
}

const getProductsFeatureByName = async (name_product_feature) => {
    try {
        return await axios_prestashop.get(`product_features/?filter[name]=[${name_product_feature}]`)
        .then(function (response) {
            return response.data;
        })
    } catch(err) {
        throw err
    }
}

module.exports = {
    getProductFeature,
    getProductsFeatureByName
}