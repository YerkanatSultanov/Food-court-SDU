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
// end for welcomePage