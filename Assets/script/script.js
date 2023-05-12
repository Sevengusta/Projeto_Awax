let slidesLength = document.querySelectorAll('.slideshow').length
let slideWidth = document.querySelector('.slideshow').clientWidth;
let currentSlide = 0;

// códigos relacionadas ao botão home
const body = document.querySelector('body')
const homeButton = document.querySelector('#home_button');
homeButton.addEventListener("click", startTo = () => scrollTo(0,0)) 

function handleScroll(){
    if (scrollY > 600){
        homeButton.classList.add('show_btn')
    } else {
        homeButton.classList.remove('show_btn')
    }
}

body.addEventListener("scroll", handleScroll())

//transição de slides pelo botão de options
function toSlide1(){
document.querySelector('.sliders').style.marginLeft = `0px`
}

function toSlide2(){
    document.querySelector('.sliders').style.marginLeft = `-${document.querySelector('.slide').clientWidth}px`
}

function toSlide3(){
    document.querySelector('.sliders').style.marginLeft = `-${document.querySelector('.slide').clientWidth *2}px`
}

