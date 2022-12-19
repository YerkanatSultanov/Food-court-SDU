const arr = [
    {
        html: '                <div class="samsaSKurPhoto"><img src="./img/bakery%20(1).png" alt="samsa" class="photo"></div>\n' +
            '                <div class="text" id="text1">Самса с курицей</div>\n' +
            '                <div class="priceAndCart">\n' +
            '                    <div style="display: flex; align-items:center;">\n' +
            '                       <div class="price" id="price1">250</div>\n' +
            '                       <div style="margin-right: 65px">tg</div> \n' +
            '                    <div class="cart">\n' +
            '                        <button class="toCart"  onclick="insert(1)">В корзину</button>\n' +
            '                    </div>\n' +
            '                     </div>\n'+
            '                </div>\n' +
            '            </div>',
        type: 'Выпечка'
    }, {
        html: '    <div class="samsaSKurPhoto"><img src="./img/bakery%20(1).png" alt="samsa" class="photo"></div>\n' +
            '                <div class="text" id="text2">Самса с сыром</div>\n' +
            '                <div class="priceAndCart">\n' +
            '                    <div style="display: flex; align-items:center;">\n' +
            '                    <div class="price" id="price2">240</div>\n' +
            '                       <div style="margin-right: 65px">tg</div> \n' +
            '                    <div class="cart">\n' +
            '                        <button class="toCart"  onclick="insert(2)">В корзину</button>\n' +
            '                    </div>\n' +
            '                    </div>\n' +
            '            </div>',
        type: 'Выпечка'
    }, {
        html: '                <div class="samsaSKurPhoto"><img src="./img/0e0ed69349edc2c963704f24e289c335.png" alt="samsa" class="photo"></div>\n' +
            '                <div class="text" id="text3">Поча с курицой</div>\n' +
            '                <div class="priceAndCart">\n' +
            '                    <div style="display: flex; align-items:center;">\n' +
            '                    <div class="price" id="price3">220</div>\n' +
            '                       <div style="margin-right: 65px">tg</div> \n' +
            '                    <div class="cart">\n' +
            '                        <button class="toCart"  onclick="insert(3)">В корзину</button>\n' +
            '                    </div>\n' +
            '                    </div>\n' +
            '            </div>',
        type: 'Выпечка'
    }, {
        html:
            '                <div class="samsaSKurPhoto"><img src="./img/0e0ed69349edc2c963704f24e289c335.png" alt="samsa" class="photo"></div>\n' +
            '                <div class="text" id="text4">Поча с сыром</div>\n' +
            '                <div class="priceAndCart">\n' +
            '                    <div style="display: flex; align-items:center;">\n' +
            '                    <div class="price" id="price4">210</div>\n' +
            '                       <div style="margin-right: 65px">tg</div> \n' +
            '                    <div class="cart">\n' +
            '                        <button class="toCart"  onclick="insert(4)">В корзину</button>\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '                </div>',
        type: 'Выпечка'
    },
    {
        html: '                <div class="samsaSKurPhoto"><img src="./img/zo2k7wmxr4i6wh9mw1quogjyxu1e8o5x.png" alt="samsa" class="photo"></div>\n' +
            '                <div class="text" id="text5">Ачма с шоколадом</div>\n' +
            '                <div class="priceAndCart">\n' +
            '                    <div style="display: flex; align-items:center;">\n' +
            '                    <div class="price" id="price5">250</div>\n' +
            '                       <div style="margin-right: 65px">tg</div> \n' +
            '                    <div class="cart">\n' +
            '                        <button class="toCart"  onclick="insert(5)">В корзину</button>\n' +
            '                    </div>\n' +
            '                    </div>\n' +
            '                </div>',
        type: 'Выпечка'
    },
    {
        html: '                <div class="samsaSKurPhoto"><img src="./img/29a1bd32.png" alt="samsa" class="photo"></div>\n' +
            '                <div class="text" id="text6">Круассан со сгущенкой</div>\n' +
            '                <div class="priceAndCart">\n' +
            '                    <div style="display: flex; align-items:center;">\n' +
            '                    <div class="price" id="price6">250</div>\n' +
            '                       <div style="margin-right: 65px">tg</div> \n' +
            '                    <div class="cart">\n' +
            '                        <button class="toCart"  onclick="insert(6)">В корзину</button>\n' +
            '                    </div>\n' +
            '                    </div>\n' +
            '                </div>',
        type: 'Десерты'
    },
    {
        html: '                <div class="samsaSKurPhoto"><img src="./img/croissant-with-chocolat.jpg" alt="samsa" class="photo"></div>\n' +
            '                <div class="text" id="text7">Круассан с шоколадом</div>\n' +
            '                <div class="priceAndCart">\n' +
            '                    <div style="display: flex; align-items:center;">\n' +
            '                    <div class="price" id="price7">250</div>\n' +
            '                       <div style="margin-right: 65px">tg</div> \n' +
            '                    <div class="cart">\n' +
            '                        <button class="toCart"  onclick="insert(7)">В корзину</button>\n' +
            '                    </div>\n' +
            '                    </div>\n' +
            '                </div>',
        type: 'Десерты'
    },
    {
        html: '                <div class="samsaSKurPhoto"><img src="./img/8747f9f6af47f3a8ff7c5b63f9dff352-680x500-removebg-preview.png" alt="samsa" class="photo" style="width: 180px; height: 180px">  </div>\n' +
            '                <div class="text" id="text8">Пиде</div>\n' +
            '                <div class="priceAndCart">\n' +
            '                    <div style="display: flex; align-items:center;">\n' +
            '                    <div class="price" id="price8">250</div>\n' +
            '                       <div style="margin-right: 65px">tg</div> \n' +
            '                    <div class="cart">\n' +
            '                        <button class="toCart" onclick="insert(8)">В корзину</button>\n' +
            '                    </div>\n' +
            '                    </div>\n' +
            '                </div>',
        type: 'Выпечка'
    },
    {
        html: '                <div class="samsaSKurPhoto"><img src="./img/a8dbaaece41cb21bcc16be71c8d79b4a.png" alt="samsa" class="photo" style="width: 180px; height: 180px">  </div>\n' +
            '                <div class="text" id="text9">Сосиска в тесте</div>\n' +
            '                <div class="priceAndCart">\n' +
            '                    <div style="display: flex; align-items:center;">\n' +
            '                    <div class="price" id="price9">250</div>\n' +
            '                       <div style="margin-right: 65px">tg</div> \n' +
            '                    <div class="cart">\n' +
            '                        <button class="toCart" onclick="insert(9)">В корзину</button>\n' +
            '                    </div>\n' +
            '                    </div>\n' +
            '                    </div>',
        type: 'Выпечка'
    },
    {
        html: '                <div class="samsaSKurPhoto"><img src="./img/bcf3624ab2d24cb21fac59891a3644a4.png" alt="samsa" class="photo" style="width: 180px; height: 180px">  </div>\n' +
            '                <div class="text" id="text10">Жареная сосиска в тесте</div>\n' +
            '                <div class="priceAndCart">\n' +
            '                    <div style="display: flex; align-items:center;">\n' +
            '                    <div class="price" id="price10">250</div>\n' +
            '                       <div style="margin-right: 65px">tg</div> \n' +
            '                    <div class="cart">\n' +
            '                        <button class="toCart" onclick="insert(10)">В корзину</button>\n' +
            '                    </div>\n' +
            '                    </div>\n' +
            '                </div>',
        type: 'Выпечка',
    },
    {
        html: '                <div class="samsaSKurPhoto"><img src="./img/png-transparent-chocolate-donut-with-sprinkles-illustration-doughnut-dessert-bakery-cake-donut-collection-food-cake-decorating-sweetness-removebg-preview.png" alt="samsa" class="photo" style="width: 180px;">  </div>\n' +
            '                <div class="text" id="text11">Пончик</div>\n' +
            '                <div class="priceAndCart">\n' +
            '                    <div style="display: flex; align-items:center;">\n' +
            '                    <div class="price" id="price11">150</div>\n' +
            '                       <div style="margin-right: 65px">tg</div> \n' +
            '                    <div class="cart">\n' +
            '                        <button class="toCart" onclick="insert(11)">В корзину</button>\n' +
            '                    </div>\n' +
            '                    </div>\n' +
            '                </div>',
        type: 'Десерты'
    },
    {
        html: '                <div class="samsaSKurPhoto"><img src="./img/Cheesecake-PNG-Image-HD.png" alt="samsa" class="photo">  </div>\n' +
            '                <div class="text" id="text12">Чизкейк</div>\n' +
            '                <div class="priceAndCart">\n' +
            '                    <div style="display: flex; align-items:center;">\n' +
            '                    <div class="price" id="price12">450</div>\n' +
            '                       <div style="margin-right: 65px">tg</div> \n' +
            '                    <div class="cart">\n' +
            '                        <button class="toCart" onclick="insert(12)">В корзину</button>\n' +
            '                    </div>\n' +
            '                    </div>\n' +
            '                </div>',
        type: 'Десерты'
    },
    {
        html: '                <div class="samsaSKurPhoto"><img src="./img/1644441051_screenshot_24-removebg-preview.png" alt="samsa" class="photo" style=" width: 180px">  </div>\n' +
            '                <div class="text" id="text13">Сникерс</div>\n' +
            '                <div class="priceAndCart">\n' +
            '                    <div style="display: flex; align-items:center;">\n' +
            '                    <div class="price" id="price13">450</div>\n' +
            '                       <div style="margin-right: 65px">tg</div> \n' +
            '                    <div class="cart">\n' +
            '                        <button class="toCart"  onclick="insert(13)">В корзину</button>\n' +
            '                    </div>\n' +
            '                    </div>\n' +
            '                </div>',
        type: 'Десерты',
    },
    {
        html: '               <div class="samsaSKurPhoto"><img src="https://redfish-sushi.ru/d/banana-roll-1.png" alt="samsa" class="photo">  </div>\n' +
            '                <div class="text" id="text14">Ролл банан</div>\n' +
            '                <div class="priceAndCart">\n' +
            '                    <div style="display: flex; align-items:center;">\n' +
            '                    <div class="price" id="price14">350</div>\n' +
            '                       <div style="margin-right: 65px">tg</div> \n' +
            '                    <div class="cart">\n' +
            '                        <button class="toCart"  onclick="insert(14)">В корзину</button>\n' +
            '                    </div>\n' +
            '                    </div>\n' +
            '                </div>',
        type: 'Десерты'
    },
    {
        html: '                <div class="samsaSKurPhoto"><img src="./img/fresh-bun-stuffed-with-poppy-seeds-homemade-baking_653217-361.jpg" alt="samsa" class="photo" style="width: 180px">  </div>\n' +
            '                <div class="text" id="text15">Булочка с маком</div>\n' +
            '                <div class="priceAndCart">\n' +
            '                    <div style="display: flex; align-items:center;">\n' +
            '                    <div class="price" id="price15">210</div>\n' +
            '                       <div style="margin-right: 65px">tg</div> \n' +
            '                    <div class="cart">\n' +
            '                        <button class="toCart" onclick="insert(15)">В корзину</button>\n' +
            '                    </div>\n' +
            '                    </div>\n' +
            '                </div>',
        type: 'Десерты'
    },
    {
        html: '                <div class="samsaSKurPhoto"><img src="./img/234-2340017_20-oz-pepsi-bottle-png-download-pepsi-caffeine-free-soda-20-fl-removebg-preview.png" alt="samsa" class="photo" style="width: 180px">  </div>\n' +
            '                            <div class="text" id="text16">Пепси 0,5л</div>\n' +
            '                          <div class="priceAndCart">\n' +
            '                    <div style="display: flex; align-items:center;">\n' +
            '                               <div class="price" id="price17">360</div>\n' +
            '                       <div style="margin-right: 65px">tg</div> \n' +
            '                               <div class="cart">\n' +
            '                                    <button class="toCart" onclick="insert(16)">В корзину</button>\n' +
            '                               </div>\n' +
            '                               </div>\n' +
            '                            </div>',
        type: 'Напитки'
    },
    {
        html: '                <div class="samsaSKurPhoto"><img src="./img/hd-cold-coca-cola-plastic-bottle-png-31625599293mz441emehh-removebg-preview.png" alt="samsa" class="photo" style="width: 150px">  </div>\n' +
            '                            <div class="text" id="text17">Кола 0,5л</div>\n' +
            '                          <div class="priceAndCart">\n' +
            '                    <div style="display: flex; align-items:center;">\n' +
            '                               <div class="price" id="price18">360</div>\n' +
            '                       <div style="margin-right: 65px">tg</div> \n' +
            '                               <div class="cart">\n' +
            '                                    <button class="toCart" onclick="insert(17)">В корзину</button>\n' +
            '                               </div>\n' +
            '                               </div>\n' +
            '                            </div>',
        type: 'Напитки'
    },
    {
        html: '                <div class="samsaSKurPhoto"><img src="./img/Napitok%20Maxi%20chai%20zelenyi%20Limon%20450%20ml.png" alt="samsa" class="photo" style="width: 200px">  </div>\n' +
            '                            <div class="text" id="text18">Пепси 0,5л</div>\n' +
            '                          <div class="priceAndCart">\n' +
            '                    <div style="display: flex; align-items:center;">\n' +
            '                               <div class="price" id="price19">360</div>\n' +
            '                       <div style="margin-right: 65px">tg</div> \n' +
            '                               <div class="cart">\n' +
            '                                    <button class="toCart" onclick="insert(18)">В корзину</button>\n' +
            '                               </div>\n' +
            '                               </div>\n' +
            '                            </div>',
        type: 'Напитки'
    },
    {
        html: '                <div class="samsaSKurPhoto"><img src="./img/fanta_PNG51.png" alt="samsa" class="photo" style="width: 180px">  </div>\n' +
            '                            <div class="text" id="text19">Пепси 0,5л</div>\n' +
            '                          <div class="priceAndCart">\n' +
            '                    <div style="display: flex; align-items:center;">\n' +
            '                               <div class="price" id="price19">360</div>\n' +
            '                       <div style="margin-right: 65px">tg</div> \n' +
            '                               <div class="cart">\n' +
            '                                    <button class="toCart" onclick="insert(19)">В корзину</button>\n' +
            '                               </div>\n' +
            '                               </div>\n' +
            '                            </div>',
        type: 'Напитки'
    },
    {
        html: '                <div class="samsaSKurPhoto"><img src="./img/Black-Tea-Transparent-File.png" alt="sss" class="photo" style="width: 180px">  </div>\n' +
            '                            <div class="text" id="text20">Черный чай</div>\n' +
            '                          <div class="priceAndCart">\n' +
            '                    <div style="display: flex; align-items:center;">\n' +
            '                               <div class="price" id="price20">100</div>\n' +
            '                       <div style="margin-right: 65px">tg</div> \n' +
            '                               <div class="cart">\n' +
            '                                    <button class="toCart" onclick="insert(20)">В корзину</button>\n' +
            '                               </div>\n' +
            '                               </div>\n' +
            '                            </div>',
        type: 'Напитки'
    }
];

window.onload = function () {
    let content = document.getElementById("places");

    for (let i = 0; i < arr.length; i++) {
        content.innerHTML += `<div class = "Part" id = "${i}"> ${arr[i].html} </div>`;
    }
}

function clickk(element) {
    let type = element.innerHTML;
    let fill = arr.filter(function (e) {
        return e.type === type;
    });
    if (type === "Все") {
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