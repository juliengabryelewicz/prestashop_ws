const Language = require("./api/languages");
const Product = require("./api/products");
const Category = require("./api/categories");

async function run() {
    const data = await Language.getLanguage("1");
    console.log(data);
    const data2 = await Language.getAllLanguages();
    console.log(data2);
}
  
run();