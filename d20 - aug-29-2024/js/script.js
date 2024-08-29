const clock_time = document.querySelector('.clock_time');
const clock_date = document.querySelector('.clock_date');
const clock_week = document.querySelector('.clock_week');

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

clock_time.style.color = 'red';
clock_time.style.fontSize = '2rem';
clock_time.style.fontWeight = 'bold';
clock_time.style.textAlign = 'center';
clock_date.style.cssText = `
    color: blue;
    font-size: 18px;
    text-align: center;
`;

clock_week.style.cssText = `
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 10px;
`;

days.forEach(day => {
    const div = document.createElement('div');
    div.textContent = day;
    div.style.cssText = `
        font-size: 14px;
        border: 1px solid #333;
        padding: 5px 10px;
        border-radius: 5px;
    `;
    clock_week.appendChild(div);
})

const dateTime = () => {
    const d = new Date();
    const hours = d.getHours();
    let a;
    if (hours < 12) {
        a = 'AM';
    } else {
        a = 'PM';
    }
    const minutes = d.getMinutes();
    const seconds = d.getSeconds();
    const day = d.getDate();
    const month = d.getMonth() + 1;
    const year = d.getFullYear();
    clock_time.innerHTML = `${hours}:${minutes}:${seconds} ${a}`;
    clock_date.innerHTML = `${day}/${month}/${year}`;
    days.forEach((day, index) => {
        if (index === d.getDay()) {
            clock_week.children[index].style.backgroundColor = 'red';
            clock_week.children[index].style.color = '#fff';
        } else {
            clock_week.children[index].style.backgroundColor = '#fff';
            clock_week.children[index].style.color = '#333';
        }
    })
}
dateTime();

setInterval(dateTime, 1000);

// local storage
localStorage.setItem('name', 'Sadat Mirpur');
localStorage.setItem('age', 25);
console.log(localStorage.getItem('name'));

// session storage
sessionStorage.setItem('name', 'Rasel');
sessionStorage.setItem('age', 26);
console.log(sessionStorage.getItem('name'));

// cookies
document.cookie = 'name=Rifat; expires=' + new Date(2024, 8, 10).toUTCString();