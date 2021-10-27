'use strict';

//theres querySelctor and querySelectorAll
//the querySelectorAll now shows a node list
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
//remove to remove a class 
//remove hidden class 
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
//add to add a class
//adding the hidden class 
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//none of the above ^ will work untill we put an event listener
//why is there the for loop?
//the loop is so that we can do one thing to all of them 
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//another event listener but instead of a click it will be when a button is pressed 
document.addEventListener('keydown', function (e) {
    // console.log(e.key);
  
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });