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


const introVideo = document.querySelector('.intro video')

introVideo.addEventListener('loadeddata', function() {
      var videos = [].slice.call(document.querySelectorAll("video.lazy"));

        var videoObserver = new IntersectionObserver(function(entries, observer) {
          entries.forEach(function(video) {
              // video.poster = video.dataset.poster;
              for (var source in video.target.children) {
                var videoSource = video.target.children[source];
                if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
                  videoSource.src = videoSource.dataset.src;
                }
              }
    
              video.target.load();
              video.target.classList.remove("lazy");
              videoObserver.unobserve(video.target);
          });
        });
    
        videos.forEach(function(video) {
          videoObserver.observe(video);
        });
})
// Video handling

// var w = window.matchMedia("(max-width: 1200px)");
// var roadTripVideo = document.querySelector(".the_road_trip video");
// var roadTripSource = document.createElement("source");
// roadTripSource.id = "hvid";
// roadTripSource.setAttribute("type", "video/mp4");
// roadTripVideo.appendChild(roadTripSource);

// if (w.matches) {
//   roadTripVideo.pause();
//   roadTripSource.removeAttribute("src");
//   roadTripSource.setAttribute("src", "assets/video/BecherGare_Driving_min.mp4");
//   roadTripVideo.load();
//   roadTripVideo.play();
// } else {
//   roadTripVideo.pause();
//   roadTripSource.removeAttribute("src");
//   roadTripSource.setAttribute("src", "assets/video/BecherGare_Driving.mp4");
//   roadTripVideo.load();
//   roadTripVideo.play();
// }













// ScrollReveal

var slideUp = {
    opacity: 0,
    duration:1200,
    distance:'1.5rem',
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









