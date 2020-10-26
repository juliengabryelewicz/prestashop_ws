const Category = require("./api/categories");
const Language = require("./api/languages");
const Product = require("./api/products");
const Stock = require("./api/stocks");
const xmlBuilder = require("./services/xmlBuilder");

const obj = {"id": {"#text": "201"}, "name":{"#text": "ceci est un test2"}};

const obj2 = {"name": [{"language" : {"@id": 1, "#text": "un nouveau produit"}}, {"language" : {"@id": 2, "#text": "un nouveau produit"}}, {"language" : {"@id": 3, "#text": "un nouveau produit"}}], "price":{"#text": "129"}};

async function run() {
    const data = await Product.getProduct(201);
    //const data = await Product.updateProduct(xmlBuilder.writeProductXml(obj));
    /*const data = await Product.getProduct(201);
    const data2 = await Product.updateProduct(obj, data);
    console.log(data2);*/
    //const data = await Stock.getStocksProductAttribute(1482);
    //const data = await Stock.updateQuantityProductAttribute(1364, 20);
    //const data = await Product.getProduct(201);
    //const data = await Product.createProduct(obj2);
    console.log(data);
}
  
run();