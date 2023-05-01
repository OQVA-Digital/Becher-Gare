

let increment = 0;

const wordCircle = document.querySelector('.circle')

window.addEventListener('scroll', function() {
    scroll = window.scrollY;
})


setInterval(() => {
    increment++
    
    wordCircle.style.transform = `translateY(calc(-10%)) rotate(${Math.floor(scroll / 20) + (increment / 80)}deg)`
}, 1);

