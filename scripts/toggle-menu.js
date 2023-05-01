const menuBt = document.querySelector('.hambt')
const nav = document.querySelector('header nav')
const navBts = document.querySelectorAll('header nav a')

let showingMenu = false;

function toggleNav() {
    if(showingMenu == false) {

        nav.classList.add('show')
        menuBt.classList.add('close')

        showingMenu = true;
    } else {

        nav.classList.remove('show')
        menuBt.classList.remove('close')

        showingMenu = false;
    }
}

menuBt.addEventListener('click', toggleNav)


for(i=0;i<navBts.length;i++) {
    navBts[i].addEventListener('click', function() {
        if(showingMenu == true) {
            toggleNav()
        }
    })
}

window.addEventListener('scroll', function() {
    if(showingMenu == true) {
        toggleNav()
    }
})






// Contact and booking modal

let showingContact = false;

const contactBt = document.querySelector('.contact_bt')
const contactModal = document.querySelector('.contact.modal')

function toggleContact() {

    if(showingMenu == true) {
        toggleNav()
    }

    if(showingBook == true) {
        bookModal.classList.remove('show');
        showingBook = false;
    }

    if(showingContact == false) {
        contactModal.classList.add('show');
        showingContact = true;
    } else {
        contactModal.classList.remove('show');
        showingContact = false;
    }
}

contactBt.addEventListener('click', toggleContact)

let showingBook = false;

const bookBt = document.querySelectorAll('.book_bt')
const bookModal = document.querySelector('.book.modal')

function toggleBook() {

    if(showingMenu == true) {
        toggleNav()
    }

    if(showingContact == true) {
        contactModal.classList.remove('show');
        showingContact = false;
    }

    if(showingBook == false) {
        bookModal.classList.add('show');
        showingBook = true;
    } else {
        bookModal.classList.remove('show');
        showingBook = false;
    }
}

for(i=0;i<bookBt.length;i++) {
    bookBt[i].addEventListener('click', toggleBook)
}

const closeButtons = document.querySelectorAll('.modal .close')

for(i=0;i<closeButtons.length;i++) {
    closeButtons[i].addEventListener('click', function() {
        if(showingContact == true) {
            toggleContact()
        } else if(showingBook == true) {
            toggleBook()
        }
    })
}





document.addEventListener("keydown", e => {
    console.log("keydown: " + e.key);
    if (e.key == "Escape") {
        if(showingContact == true) {
            toggleContact()
        } else if(showingBook == true) {
            toggleBook()
        }

    }
  });

