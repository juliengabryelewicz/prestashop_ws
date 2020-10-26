const dotenv = require( 'dotenv' )
const path = require('path')
dotenv.config()

const headerXml =  {
    headers: {'Content-Type': 'application/xml'}
};

module.exports = {
    ws_key: process.env.PRESTASHOP_WS_KEY,
    output_format: process.env.PRESTASHOP_OUTPUT_FORMAT,
    base_url: process.env.PRESTASHOP_BASE_URL,
    headerXml,
  }