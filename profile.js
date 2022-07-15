const colorButton = document.getElementById('color')
colorButton.addEventListener('click', () => {
    alert('pink')
})

const placeButton = document.querySelector('#place');
placeButton.addEventListener('click', () => {
    alert('canyon')
})

const ritualButton = document.querySelectorAll('#ritual')

ritualButton[0].addEventListener('click', () => {
    alert('washing my face')
})