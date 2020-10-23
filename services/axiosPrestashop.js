const axios = require('axios');
const {ws_key} = require('./config')
const webservice_key = Buffer.from(ws_key).toString('base64')

const axios_prestashop = axios.create({
    baseURL: 'https://ps.edisac.com/api',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic '+ webservice_key
    },
  });

const json_format = true;


module.exports = { axios_prestashop, json_format }