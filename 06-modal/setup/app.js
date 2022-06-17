// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const modal = document.querySelector('.modal-btn')
const overlay = document.querySelector('.modal-overlay')
const closeModal = document.querySelector('.close-btn')


modal.addEventListener('click', () => {
    overlay.classList.add('open-modal')
})

closeModal.addEventListener('click', () => {
    overlay.classList.remove('open-modal')
})