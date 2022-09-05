'use strict';
const Modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnsCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

const openModal = function () {
  Modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  Modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);

  btnsCloseModal.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);
}
document.addEventListener('keydown', function (event) {


  if (event.key === 'Escape' && !Modal.classList.contains('hidden'))
    closeModal();
});
