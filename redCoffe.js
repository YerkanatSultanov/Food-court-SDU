const arr = [
    {
        html: '            <div class="samsaSKurPhoto"><img src="./img/png-clipart-coffee-marocchino-latte-cafe-au-lait-espresso-coffee-cafe-teacup-removebg-preview.png" alt="samsa" class="photo" ></div>\n' +
            '            <div class="text">Американо</div>\n' +
            '            <div class="priceAndCart">\n' +
            '                <div class="price">600 Тг</div>\n' +
            '                <div class="cart">\n' +
            '                    <button class="toCart">В корзину</button>\n' +
            '                </div>\n' +
            '            </div>',
        type: 'Кофе'
    },
    {
        html: '            <div class="samsaSKurPhoto"><img src="./img/Espresso-PNG-Free-Download.png" alt="samsa" class="photo"></div>\n' +
            '            <div class="text">Экспрессо</div>\n' +
            '            <div class="priceAndCart">\n' +
            '                <div class="price">650 Тг</div>\n' +
            '                <div class="cart">\n' +
            '                    <button class="toCart">В корзину</button>\n' +
            '                </div>\n' +
            '            </div>',
        type: 'Кофе'
    },
    {
        html: '<div class="samsaSKurPhoto"><img src="./img/png-transparent-caffe-macchiato-latte-macchiato-cafe-au-lait-cappuccino-coffee-glass-cafe-coffee-removebg-preview.png" alt="samsa" class="photo" style="width: 200px; height: 150px"></div>\n' +
            '            <div class="text">Латте</div>\n' +
            '            <div class="priceAndCart">\n' +
            '                <div class="price">600 Тг</div>\n' +
            '                <div class="cart">\n' +
            '                    <button class="toCart">В корзину</button>\n' +
            '                </div',
        type: 'Кофе'
    },
    {
        html: '<div class="samsaSKurPhoto"><img src="./img/5251578363822-removebg-preview.png" alt="samsa" class="photo"></div>\n' +
            '            <div class="text">Моккачино</div>\n' +
            '            <div class="priceAndCart">\n' +
            '                <div class="price">250 Тг</div>\n' +
            '                <div class="cart">\n' +
            '                    <button class="toCart">В корзину</button>\n' +
            '                </div>\n' +
            '            </div>',
        type: 'Кофе'
    },
    {
        html: '            <div class="samsaSKurPhoto"><img src="./img/26-264924_chocolate-frapp-frapp-coffee-removebg-preview.png" alt="samsa" class="photo" style="width: 250px; height: 150px"></div>\n' +
            '            <div class="text">Фраппе</div>\n' +
            '            <div class="priceAndCart">\n' +
            '                <div class="price">700 Тг</div>\n' +
            '                <div class="cart">\n' +
            '                    <button class="toCart">В корзину</button>\n' +
            '                </div>\n' +
            '            </div>',
        type: 'Кофе'
    },
    {
        html: '            <div class="samsaSKurPhoto"><img src="./img/Kruassan-s-kuritsey-gril-i-zharenym-bekonom-removebg-preview.png" alt="samsa" class="photo"></div>\n' +
            '            <div class="text">Круассан с курицей</div>\n' +
            '            <div class="priceAndCart">\n' +
            '                <div class="price">450 Тг</div>\n' +
            '                <div class="cart">\n' +
            '                    <button class="toCart">В корзину</button>\n' +
            '                </div>\n' +
            '            </div>',
        type: 'Фаст-фуд',
    },
    {
        html: '            <div class="samsaSKurPhoto"><img src="./img/34-349922_sandwiches--removebg-preview.png" alt="samsa" class="photo"></div>\n' +
            '            <div class="text">Клаб-Сендвич с курицей</div>\n' +
            '            <div class="priceAndCart">\n' +
            '                <div class="price">400 Тг</div>\n' +
            '                <div class="cart">\n' +
            '                    <button class="toCart">В корзину</button>\n' +
            '                </div>\n' +
            '            </div>',
        type: 'Фаст-фуд'
    },
    {
        html: '            <div class="samsaSKurPhoto"><img src="./img/png-transparent-chocolate-donut-with-sprinkles-illustration-doughnut-dessert-bakery-cake-donut-collection-food-cake-decorating-sweetness-removebg-preview.png" alt="samsa" class="photo" style="width: 180px"></div>\n' +
            '            <div class="text">Пончик</div>\n' +
            '            <div class="priceAndCart">\n' +
            '                <div class="price">150 Тг</div>\n' +
            '                <div class="cart">\n' +
            '                    <button class="toCart">В корзину</button>\n' +
            '                </div>\n' +
            '            </div>',
        type: 'Фаст-фуд'
    }
]

window.onload = function () {
    let content = document.getElementById("places");

    for (let i = 0; i < arr.length; i++) {
        content.innerHTML += `<div class = "Part" id = "${i}"> ${arr[i].html} </div>`;
    }
}

function clickk2(element) {
    let type2 = element.innerHTML;
    let fill = arr.filter(function (e) {
        return e.type === type2;
    });
    if (type2 === "Все") {
        fill = arr;
    }
    console.log(fill);

    let content = document.getElementById("places");
    content.innerHTML = "";
    for (let i = 0; i < fill.length; i++) {
        content.innerHTML += `<div class = "Part" id = "${i}"> ${fill[i].html} </div>`;
    }
}