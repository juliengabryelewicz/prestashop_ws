const checkIfShopExists = (id_shop) => {

    return id_shop == "" ? false : true

}

const urlIfShopExists = (id_shop) => {

    return id_shop == "" ? "" : "?id_shop="+id_shop

}

module.exports = { checkIfShopExists, urlIfShopExists }