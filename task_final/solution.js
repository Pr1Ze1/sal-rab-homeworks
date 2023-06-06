function sendRequest(name, phone, address, goods, sum) {
    
    let data = {order: {}, goods: []};
    
    for (let i = 0; i < goods.length; i ++) {
        let goodsInfo = {title: goods[i].title, count: goods[i].count};
        data.goods.push(goodsInfo);
    }

    data.order.address = `ул. ${address.street}, дом ${address.house}, ${address.entrance} подъезд, ${address.floor} этаж, кв. ${address.flat}`;

    data.order.sum = sum;

    data.client = `${name} ${phone}`;

    let jsonData = JSON.stringify({data});

    return jsonData;
}
