const {axios_prestashop} = require('../services/axiosPrestashop')

const getCategory = async (id_category) => {
    try {
        return await axios_prestashop.get(`categories/${id_category}`)
        .then(function (response) {
            return response.data;
        })
    } catch(err) {
        throw err
    }
}

const getCategoriesByName = async (name_category) => {
    try {
        return await axios_prestashop.get(`categories/?display=full&filter[name]=[${name_category}]`)
        .then(function (response) {
            return response.data;
        })
    } catch(err) {
        throw err
    }
}

const getAllCategories = async () => {

    try {
        return await axios_prestashop.get(`categories?display=full`)
        .then(function (response) {
            return response.data;
        })
    } catch(err) {
        throw err
    }

}

module.exports = {
    getAllCategories,
    getCategory,
    getCategoriesByName
}