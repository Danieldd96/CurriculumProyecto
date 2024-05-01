const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
	document.body.classList.toggle('dark');
	btnSwitch.classList.toggle('active');
});
const openModal = document.querySelector('.hero_cta');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modalClose')

openModal.addEventListener('click', (e)=>{
	e.preventDefault();
	modal.classList.add('modal--show');
});
closeModal.addEventListener('click', (e)=>{
	e.preventDefault();
	modal.classList.remove('modal--show');
});