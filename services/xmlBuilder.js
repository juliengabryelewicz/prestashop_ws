const builder = require('xmlbuilder2');

const writeProductXml = (options) => {
    try {
        var obj = { prestashop: { product: {}}};

        for (var key in options){
            obj.prestashop.product[key] = options[key];
        }

        return builder.create(obj).end();

    } catch(err) {
        throw err
    }
}

module.exports = { writeProductXml }