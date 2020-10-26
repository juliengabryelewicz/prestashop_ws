# Prestashop Web Service Node Module

Node module which allows you to connect with PrestaShop via Webservice

## How to install 

```
npm install prestashop_ws --save
```

You'll need to add configuration in your .env file : 

```
PRESTASHOP_WS_KEY="YOUR_WEBSERVICE_KEY"
PRESTASHOP_BASE_URL="https://your_url.com/"
PRESTASHOP_OUTPUT_FORMAT="XML" (you can use XML or JSON for your result format)
```

## Methods availables

### Categories

- Get a specific category by its id
- Get All categories
- Search a category by name

### Languages

- Get a specific language by its id
- Get All Languages

### Products

- Create a product (Experimental : Please use with caution)
- Get product details by its id
- Get All products
- Update a product (Experimental : Please use with caution)

### Products Features

- Get Product Feature
- Search Product Feature by Name

### Stocks

- Get product quantity using product attribute
- Update product quantity using product attributes

## Other Resources

If you want to use webservice for other resources (shops, CMS..), you can use these general functions : 

```
const prestashopWs = require("prestashop_ws");

const data = await prestashopWs.get("content_management_system/2", {}); // GET
const data = await prestashopWs.head("content_management_system/2", {}); // HEAD
const data = await prestashopWs.remove("content_management_system/2", {}); //DELETE
const data = await prestashopWs.post("content_management_system", "<your-xml>"); //POST
const data = await prestashopWs.put("content_management_system", "<your-xml>"); //PUT

```

For the second parameters, I recommend to use a blank schema from the PrestaShop DevDocs : 

PrestaShop 1.6 : 

[http://doc.prestashop.com/display/PS16/Web+service+one-page+documentation](http://doc.prestashop.com/display/PS16/Web+service+one-page+documentation)

PrestaShop 1.7 : 
[https://devdocs.prestashop.com/1.7/webservice/resources/](https://devdocs.prestashop.com/1.7/webservice/resources/)