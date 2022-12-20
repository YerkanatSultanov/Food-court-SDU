// for welcomePage
console.log('js is working')
const handleImageChange = (offset)=>{
    console.log('method handleImageChange working')
    const activeSlide = document.querySelector("[data-active]")
    const slides = [...document.querySelectorAll(".slide")]
    const currentIndex = slides.indexOf(activeSlide);

    let newIndex = currentIndex + offset;

    if(newIndex < 0) newIndex = slides.length-1
    if(newIndex >= slides.length) newIndex = 0
    console.log(slides)
    slides[newIndex].dataset.active = true;
    delete activeSlide.dataset.active
}


const onNext = ()=>handleImageChange(1)
const onPrev = ()=>handleImageChange(-1)

function flip(){
    document.getElementsByClassName('thefront')[0].style.display = "none";
    document.getElementsByClassName('theback')[0].style.display = "unset";
}
function flipagain(){
    document.getElementsByClassName('thefront')[0].style.display = "unset";
    document.getElementsByClassName('theback')[0].style.display = "none"
}

function myFunction() {
    
    console.log('zapusk');
    var x = document.getElementById("myTopnav");
    var appear = document.getElementById("noneBlock");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }

    if(appear.style.display=="none"){
        console.log('zapuskIFA')
        appear.style.display="block";
    }else if(appear.style.display == "block"){
        console.log('zashel')
        appear.style.display="none";
    }
}
// end for welcomePage
function showRefister(){
    console.log('started')
    document.getElementsByClassName('auth')[0].style.display="flex";
    document.body.style.overflowY="hidden";
    document.getElementById('cartPage').classList.add('disableClick');
    document.getElementById('aboutPage').classList.add('disableClick');
    // document.getElementById('welcomePage').classList.add('disableClick');
}
function makeClickable(){
    document.getElementById('cartPage').classList.remove('disableClick');
    document.getElementById('aboutPage').classList.remove('disableClick');
    document.getElementById('cartPage2').classList.remove('disableClick');
    document.getElementById('aboutPage2').classList.remove('disableClick');
    document.getElementById('redCanteen').classList.remove('disableClick');
    document.getElementById('acCatering').classList.remove('disableClick');
    document.getElementById('donerHouse').classList.remove('disableClick');
    document.getElementById('redCoffee').classList.remove('disableClick');
}
// document.getElementById('cartPage').classList.add('disableClick');
// document.getElementById('cartPage1').classList.add('disableClick');
// document.getElementById('aboutPage').classList.add('disableClick');
// document.getElementById('aboutPage1').classList.add('disableClick');
// document.getElementById('redCanteen').classList.add('disableClick');
// document.getElementById('acCatering').classList.add('disableClick');
// document.getElementById('donerHouse').classList.add('disableClick');
// document.getElementById('redCoffee').classList.add('disableClick');

// <a href="./redCanteen.html" id="redCanteen" class="nava">Red canteen</a>
// <a href="./acCatering.html" id="acCatering" class="nava">Ac Catering</a>
// <a href="./donerHouse.html" id="donerHouse" class="nava">Doner House</a>
// <a href="./redCoffee.html" id="redCoffee" class="nava">Red Coffee</a>