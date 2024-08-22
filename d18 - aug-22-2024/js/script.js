const accordionHeader = document.querySelectorAll('.accordion-header');
const accordionHeaderArray = Array.from(accordionHeader);

accordionHeaderArray.forEach((item) => {
    item.addEventListener('click', () => {
        for(let i = 0; i < accordionHeaderArray.length; i++){
            if(accordionHeaderArray[i] !== item){
                accordionHeaderArray[i].classList.remove('active');
                accordionHeaderArray[i].nextElementSibling.classList.remove('active');
            }else{
                accordionHeaderArray[i].classList.toggle('active');
                accordionHeaderArray[i].nextElementSibling.classList.toggle('active');
            }
        }
    })
});