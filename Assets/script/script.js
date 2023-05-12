let slidesLength = document.querySelectorAll('.slideshow').length
let slideWidth = document.querySelector('.slideshow').clientWidth;
let headerHeight = document.querySelector('.header').clientHeight
let bannerHeight = document.querySelector('.banner').clientHeight
let currentSlide = 0;
// comprimento da sessão sliders
document.querySelector('.sliders').style.width = ` ${slideWidth * slidesLength}px`

document.querySelector('.section_team .sliders').style.width = ` ${slideWidth * slidesLength}px`
// códigos relacionadas ao botão home
const body = document.querySelector('body')
const homeButton = document.querySelector('#home_button');
homeButton.addEventListener("click", startTo = () => scrollTo(0,0)) 

function handleScroll(){
    if (scrollY > (bannerHeight + headerHeight -1)){
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
