const arr = [
    {
        html: '            <div class="samsaSKurPhoto"><img src="./img/png-clipart-coffee-marocchino-latte-cafe-au-lait-espresso-coffee-cafe-teacup-removebg-preview.png" alt="samsa" class="photo" ></div>\n' +
            '            <div class="text" id="text1" >Американо</div>\n' +
            '            <div class="priceAndCart">\n' +
            '                <div class="price" id="price1">600</div>\n' +
            '                <div class="cart">\n' +
            '                    <button class="toCart"  onclick="insert(1)">В корзину</button>\n' +
            '                </div>\n' +
            '            </div>',
        type: 'Кофе'
    },
    {
        html: '            <div class="samsaSKurPhoto"><img src="./img/Espresso-PNG-Free-Download.png" alt="samsa" class="photo"></div>\n' +
            '            <div class="text" id="text2">Экспрессо</div>\n' +
            '            <div class="priceAndCart">\n' +
            '                <div class="price" id="price2">650</div>\n' +
            '                <div class="cart">\n' +
            '                    <button class="toCart" onclick="insert(2)">В корзину</button>\n' +
            '                </div>\n' +
            '            </div>',
        type: 'Кофе'
    },
    {
        html: '<div class="samsaSKurPhoto"><img src="./img/png-transparent-caffe-macchiato-latte-macchiato-cafe-au-lait-cappuccino-coffee-glass-cafe-coffee-removebg-preview.png" alt="samsa" class="photo" style="width: 200px; height: 150px"></div>\n' +
            '            <div class="text" id="text3">Латте</div>\n' +
            '            <div class="priceAndCart">\n' +
            '                <div class="price" id="price3">600</div>\n' +
            '                <div class="cart">\n' +
            '                    <button class="toCart" onclick="insert(3)">В корзину</button>\n' +
            '                </div',
        type: 'Кофе'
    },
    {
        html: '<div class="samsaSKurPhoto"><img src="./img/5251578363822-removebg-preview.png" alt="samsa" class="photo"></div>\n' +
            '            <div class="text" id="text4">Моккачино</div>\n' +
            '            <div class="priceAndCart">\n' +
            '                <div class="price" id="price4">250</div>\n' +
            '                <div class="cart">\n' +
            '                    <button class="toCart" onclick="insert(4)">В корзину</button>\n' +
            '                </div>\n' +
            '            </div>',
        type: 'Кофе'
    },
    {
        html: '            <div class="samsaSKurPhoto"><img src="./img/26-264924_chocolate-frapp-frapp-coffee-removebg-preview.png" alt="samsa" class="photo" style="width: 250px; height: 150px"></div>\n' +
            '            <div class="text" id="text1">Фраппе</div>\n' +
            '            <div class="priceAndCart">\n' +
            '                <div class="price" id="price5">700</div>\n' +
            '                <div class="cart">\n' +
            '                    <button class="toCart" onclick="insert(5)">В корзину</button>\n' +
            '                </div>\n' +
            '            </div>',
        type: 'Кофе'
    },
    {
        html: '            <div class="samsaSKurPhoto"><img src="./img/Kruassan-s-kuritsey-gril-i-zharenym-bekonom-removebg-preview.png" alt="samsa" class="photo"></div>\n' +
            '            <div class="text" id="text5">Круассан с курицей</div>\n' +
            '            <div class="priceAndCart">\n' +
            '                <div class="price" id="price6">450</div>\n' +
            '                <div class="cart">\n' +
            '                    <button class="toCart" onclick="insert(6)">В корзину</button>\n' +
            '                </div>\n' +
            '            </div>',
        type: 'Фаст-фуд',
    },
    {
        html: '            <div class="samsaSKurPhoto"><img src="./img/34-349922_sandwiches--removebg-preview.png" alt="samsa" class="photo"></div>\n' +
            '            <div class="text" id="text6">Клаб-Сендвич с курицей</div>\n' +
            '            <div class="priceAndCart">\n' +
            '                <div class="price" id="price7">400</div>\n' +
            '                <div class="cart">\n' +
            '                    <button class="toCart" onclick="insert(7)">В корзину</button>\n' +
            '                </div>\n' +
            '            </div>',
        type: 'Фаст-фуд'
    },
    {
        html: '            <div class="samsaSKurPhoto"><img src="./img/png-transparent-chocolate-donut-with-sprinkles-illustration-doughnut-dessert-bakery-cake-donut-collection-food-cake-decorating-sweetness-removebg-preview.png" alt="samsa" class="photo" style="width: 180px"></div>\n' +
            '            <div class="text" id="text7">Пончик</div>\n' +
            '            <div class="priceAndCart">\n' +
            '                <div class="price" id="price1">150</div>\n' +
            '                <div class="cart">\n' +
            '                    <button class="toCart" onclick="insert(1)">В корзину</button>\n' +
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

function insert(a) {
    let j = '#text' + a;
    let l = '#price' + a;
    let name=$(j).text();
    let price = $(l).text();
    $.ajax({
        type: "POST",
        url: "insert.php",
        data: {
            name:name,
            price:price},
        success:function(data){
            alert(data);
        }
    });

}