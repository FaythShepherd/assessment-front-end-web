console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submitted successfully');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

let cuteCat = document.querySelector('img')

cuteCat.addEventListener('mouseover', (evt) => {
	alert('You are awesome!')
})