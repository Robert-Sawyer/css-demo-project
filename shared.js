var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var planSelectedButton = document.querySelectorAll('.plan button');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

console.dir(planSelectedButton);

for (var i = 0; i < planSelectedButton.length; i++) {
    planSelectedButton[i].addEventListener('click', function() {
        // modal.style.display = 'block';
        // backdrop.style.display = 'block';
        modal.classList.add('open');
        backdrop.classList.add('open');
    })
}

var noButtonModal = document.querySelector('.modal-action-negative');

console.dir(noButtonModal);

function closeModal() {
    // modal.style.display = 'none'
    // backdrop.style.display = 'none'
    if(modal) {
        modal.classList.remove('open');
    }
    backdrop.classList.remove('open')
}

if(noButtonModal) {
    noButtonModal.addEventListener('click', closeModal);
}

backdrop.addEventListener('click', function() {
    // mobileNav.style.display = 'none'
    mobileNav.classList.remove('open');
    closeModal();
});

toggleButton.addEventListener('click', function() {
    // mobileNav.style.display = 'block'
    // backdrop.style.display = 'block'
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
})
