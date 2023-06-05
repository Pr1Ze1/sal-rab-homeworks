// Задание 4.1. Вывод карточек товаров

function parseProducts(json) {
    let data = JSON.parse(json);
    return data.products;
}

function renderProductsCards(json) {
    clearProducts();
    let products = parseProducts(json);
    length = products.length;
    for (let product of products) {
        addProduct(product);
    }
}