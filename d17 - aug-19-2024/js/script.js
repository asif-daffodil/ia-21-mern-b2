// const btn = document.getElementById('btn');
// const btn = document.getElementsByTagName('button')[2];
// const btn = document.getElementsByClassName('btn')[0];
// const btn = document.querySelectorAll('.btn')[0];
const btn = document.querySelector('#btn');

const sadatHeading = document.querySelector('#sadatHeading');
const blueSadatBtn = document.querySelector('.blue-sadat-btn');
const blackSadatBtn = document.querySelector('.black-sadat-btn');

function sadatFunction() {
    alert('Sadat');
}

btn.addEventListener("click", () => {
    alert('Mirpur Sadat');
})

blueSadatBtn.addEventListener("click", () => {
    sadatHeading.classList.add('blue-sadat');
    sadatHeading.classList.remove('black-sadat');
})

blackSadatBtn.addEventListener("click", () => {
    sadatHeading.classList.add('black-sadat');
    sadatHeading.classList.remove('blue-sadat');
})

// tabs code
const header = document.querySelector('.header');
const headerChildren = header.children;
const headerArray = Array.from(headerChildren);
const detailsArray = Array.from(document.querySelector('.details').children);

headerArray.forEach((element, index) => {
    element.addEventListener('click', ()=>{
        for(let i = 0; i < headerArray.length; i++){
            if(i == index){
                headerArray[i].classList.add('active');
                detailsArray[i].classList.add('active');
            }else{
                headerArray[i].classList.remove('active');
                detailsArray[i].classList.remove('active');
            }
        }
    })
});
