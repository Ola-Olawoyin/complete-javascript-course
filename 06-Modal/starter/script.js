'use strict';
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const showModalBtns = document.querySelectorAll('.show-modal')
const closeModalBtn = document.querySelector('.close-modal')

const openModal = function () {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}

for (let modals of showModalBtns) {
    modals.addEventListener('click', openModal)
}
const closeModal = function () {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

closeModalBtn.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal()
    }
    console.log(e)
})