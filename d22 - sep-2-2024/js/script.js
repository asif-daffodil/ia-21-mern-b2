const signupForm = document.querySelector('#signupForm');
const errName = document.querySelector('#errName');
const errEmail = document.querySelector('#errEmail');
const result = document.querySelector('#result');

signupForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const formData = new FormData(signupForm);
    const yourName = formData.get('yourName');
    const yourEmail = formData.get('yourEmail');

    if(!yourName){
        errName.textContent = 'Name is required';
    }else if(yourName.length < 2){
        errName.textContent = 'Very small name';
    }else if(yourName.length > 50){
        errName.textContent = 'Very long name';
    }else if(!isNaN(yourName)){
        errName.textContent = 'Name cannot be a number';
    }else{
        errName.textContent = '';
    }

    if(!yourEmail){
        errEmail.textContent = 'Email is required';
    }else if(!yourEmail.includes('@') || !yourEmail.includes('.')){
        errEmail.textContent = 'Invalid email';
    }else{
        errEmail.textContent = '';
    }

    if(errName.textContent === '' && errEmail.textContent === ''){
        signupForm.reset();
        result.textContent = `Your name is ${yourName} and your email is ${yourEmail}`;
    }
});