const header = document.querySelector('header')
const headerTel = document.querySelector('header .tel')

let lastPos;
let currentPos;
let scroll;
scroll = window.scrollY;

window.addEventListener('scroll', function() {
    scroll = window.scrollY;

    currentPos = scroll;

    if(currentPos < lastPos) {
        header.style.transform = 'translateY(0%)';
        headerTel.classList.remove('down')
    } else {
        header.style.transform = 'translateY(-40%)';
        headerTel.classList.add('down')
    } 

    setTimeout(() => {
        lastPos = scroll;
    }, 200);
})




// Video handling

var w = window.matchMedia("(max-width: 1200px)");
var dynamicVid = document.querySelectorAll("video");

for(i=0;i<dynamicVid.length;i++) {
    var dynamicSource = document.createElement("source");
    dynamicSource.id = `hvid${i}`;
    dynamicSource.setAttribute("type", "video/mp4");
    dynamicVid[i].appendChild(dynamicSource);
}

var allSources = document.querySelectorAll('video source')

if (w.matches) {
    alert('matches mobile')
    for(i=0;i<allSources.length;i++) {
        allSources[i].removeAttribute("src");
        allSources[i].setAttribute("src", `${dynamicVid[i].getAttribute('data-src')}_min.mp4`)
    }
    alert('sources attributed')
    for(i=0;i<dynamicVid.length;i++) {
        dynamicVid[i].pause();
        dynamicVid[i].load();
        dynamicVid[i].play();
    }
    alert('videos should play')
} else {
    alert('matches desktop')

    for(i=0;i<allSources.length;i++) {
        allSources[i].removeAttribute("src");
        allSources[i].setAttribute("src", `${dynamicVid[i].getAttribute('data-src')}.mp4`);
    }
    alert('sources attributed')
    for(i=0;i<dynamicVid.length;i++) {
        dynamicVid[i].pause();
        dynamicVid[i].load();
        dynamicVid[i].play();
    }
    alert('videos should play')
}













// ScrollReveal

var slideUp = {
    opacity: 0,
    duration:1200,
    distance:'-1.5rem',
    easing: 'ease-in-out',
    viewOffset: {
        top: 0,
        right: 0,
        bottom: window.innerHeight / 14,
        left: 0,
    },
    interval: 200,
};

ScrollReveal().reveal('.reveal', slideUp);







