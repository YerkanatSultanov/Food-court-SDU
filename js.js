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
    document.getElementById(1).classList.toggle("reverse") 
      
    // document.getElementById(selected[0]).classList.toggle("reverse") 
    // document.getElementById(selected[2]).classList.toggle("reverse") 
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
    document.getElementsByClassName('auth')[0].style.display="flex";
    document.body.style.overflowY="hidden";
    document.getElementById('cartPage').disabled = "false";
    document.getElementById('aboutPage').disabled = 'false';
}
var a_nodes_list = document.getElementById("aboutPage");
a_nodes_list.onclick = function() { return false; };
a_nodes_list.onmouseover = function() { alert("UNCLICKABLE"); };

