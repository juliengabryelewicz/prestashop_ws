const {axios_prestashop} = require('../services/axiosPrestashop')
const {headerXml} = require('../services/config')

const get = async (endpoint, params) => {
    try {
        return await axios_prestashop.get(endpoint, {
            params: params
          })
        .then(function (response) {
            return response.data;
        })
    } catch(err) {
        throw err
    }
}

const post = async (endpoint, xmlSend) => {
    try {
        return await axios_prestashop.post(endpoint, xmlSend, headerXml)
        .then(function (response) {
            return response.data;
        })
    } catch(err) {
        throw err
    }
}

const put = async (endpoint, xmlSend) => {
    try {
        return await axios_prestashop.put(endpoint, xmlSend, headerXml)
        .then(function (response) {
            return response.data;
        })
    } catch(err) {
        throw err
    }
}

const remove = async (endpoint, params) => {
    try {
        return await axios_prestashop.delete(endpoint, {
            params: params
          })
        .then(function (response) {
            return response;
        })
    } catch(err) {
        throw err
    }
}

const head = async (endpoint, params) => {
    try {
        return await axios_prestashop.head(endpoint, {
            params: params
          })
        .then(function (response) {
            return response;
        })
    } catch(err) {
        throw err
    }
}

module.exports = {
    get,
    post,
    put,
    remove,
    head
}