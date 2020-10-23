const dotenv = require( 'dotenv' )
const path = require('path')
dotenv.config({ path: path.join(__dirname,'..', '.env') })


module.exports = {
    ws_key: process.env.PRESTASHOP_WS_KEY,
    json_format: process.env.PRESTASHOP_JSON_FORMAT,
    base_url: process.env.PRESTASHOP_BASE_URL,
  }