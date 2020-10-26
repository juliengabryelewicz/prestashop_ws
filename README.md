# Prestashop Web Service Node Module (Alpha version)

Node module which allows you to connect with PrestaShop via Webservice (WORK IN PROGRESS)

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

### Stocks

- Get product quantity using product attribute
- Update product quantity using product attributes