'use strict';

//catch all element from index.html
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

//all tree btn i get as a array using same class name
const btns = document.querySelectorAll('.show-modal');

//expresseion declare outside
function openModel() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

//Access btn one by one
for (let i = 0; btns.length > i; i++) {
  btns[i].addEventListener('click', openModel);
}

//close function implement
closeBtn.addEventListener('click', addClassHidden);
overlay.addEventListener('click', addClassHidden);
document.addEventListener('keydown', function (event) {
  if (event.key == 'Escape') {
    if (!modal.classList.contains('hidden')) {
      addClassHidden();
    }
  }
});

//create function to dry the code
function addClassHidden() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}
