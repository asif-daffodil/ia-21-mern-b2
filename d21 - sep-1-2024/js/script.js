const slider = document.querySelector('.slider');
const sliderChildrenArray = Array.from(slider.children);

let currentSlide = 0;

const changeSlide = () => {
    if(currentSlide === sliderChildrenArray.length - 1){
        currentSlide = 0;
    }
    sliderChildrenArray.forEach((child, index) => {
        if(index === currentSlide){
            child.classList.add('active');
        }else{
            child.classList.remove('active');
        }
    });
}

let runSlider =  setInterval(()=>{
    currentSlide++;
    changeSlide();
}, 1000);

slider.addEventListener('mouseover', ()=>{
    clearInterval(runSlider);
});

slider.addEventListener('mouseout', ()=>{
    runSlider = setInterval(()=>{
        currentSlide++;
        changeSlide();
    }, 1000);
});