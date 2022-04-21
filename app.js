// import functions

// grab DOM elements
const button = document.getElementById('name-button');
const nameEl = document.getElementById('nameEl');

const showCat = document.getElementById('renly-button');
const renly = document.getElementById('hidden-cat');

// set event listeners 
button.addEventListener('click', () => {
    if (nameEl.textContent === 'Kat') {
        nameEl.textContent = 'Kathryn Zaro';
    } 
})

showCat.addEventListener('click', () => {
    renly.classList.toggle('hidden');
})
    // get user input
    // use user input to update state 
    // update DOM to reflect the new state
