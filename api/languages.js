const {axios_prestashop} = require('../services/axiosPrestashop')

const getLanguage = async (id_language) => {
    try {
        return await axios_prestashop.get(`languages/${id_language}`)
        .then(function (response) {
            return response.data;
        })
    } catch(err) {
        throw err
    }
}

const getAllLanguages = async () => {

    try {
        return await axios_prestashop.get(`languages`)
        .then(function (response) {
            return response.data;
        })
    } catch(err) {
        throw err
    }

}

module.exports = {
    getAllLanguages,
    getLanguage
}