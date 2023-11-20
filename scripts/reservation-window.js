let showingReservationIframe = false;

const reservationWindow = document.querySelector('.reservation_window')

const reserveButton = document.querySelectorAll('.cta.reserve')

const reserveExitArea = document.querySelector('.reservation_window .exit_area')

for(let i = 0; i < reserveButton.length; i++) {
  reserveButton[i].addEventListener('click', function() {
    reservationWindow.classList.add('show')
  })
}

reserveExitArea.addEventListener('click', function() {
  reservationWindow.classList.remove('show')
})