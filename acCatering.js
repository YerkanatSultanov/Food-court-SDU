let bakery = [
    {
        img: "https://qaganat24.kz/wp-content/themes/init/catalog/images/products/samsa-s-kuriczej/thumbnail/medium.webp",
        name: "Самса с курицей",
        price: 250
    },
    {
        img: "https://qaganat24.kz/wp-content/themes/init/catalog/images/products/bliny-s-myasom-2sht/thumbnail/medium.webp",
        name: "Блины с мясом 2шт",
        price: 360
    },
    {
        img: "https://qaganat24.kz/wp-content/themes/init/catalog/images/products/pocho-s-syrom/thumbnail/medium.webp",
        name: "Почо с сыром",
        price: 315
    },
    {
        img: "https://qaganat24.kz/wp-content/themes/init/catalog/images/products/sosiski-v-teste/thumbnail/medium.webp",
        name: "Сосиски в тесте",
        price: 240
    },
    {
        img: "https://qaganat24.kz/wp-content/themes/init/catalog/images/products/pirozhki-zharenye-s-kartoshkoj/thumbnail/medium.webp",
        name: "Пирожки жареные с картошкой",
        price: 140
    },
    {
        img: "https://qaganat24.kz/wp-content/themes/init/catalog/images/products/samsa-s-kuriczej/thumbnail/medium.webp",
        name: "Самса с мясом",
        price: 270
    },
]
let categories = [
    {
        type: 'bakery',
        array: bakery
    }
]
function filter(a){
    let x = bakery;
    // for (let i = 0; i < categories.length; i++) {
    //     if (a === categories[i].type)
    //         x = categories[i].array;
    // }
    // let i = 0;
    document.getElementById('img1').src = "";
    document.getElementById('text1').innerHTML = "";
    document.getElementById('price1').innerHTML = "";
    document.getElementById('img1').src = bakery[3].img;
    document.getElementById('text1').innerHTML = bakery[3].name;
    document.getElementById('price1').innerHTML = bakery[3].price;

}
