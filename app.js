// import functions

// grab DOM elements
const button = document.getElementById('name-button');
const nameEl = document.getElementById('nameEl');

const showCat = document.getElementById('renly-button');
const renly = document.getElementById('hidden-cat');

// set event listeners 
button.addEventListener('click', () => {
    if (nameEl.textContent === 'KAT!') {
        nameEl.textContent = 'timothy! jk it\'s short for kathryn.';
    } else {
        nameEl.textContent = 'KAT!';
    }
});

showCat.addEventListener('click', () => {
    renly.classList.toggle('hidden');
});
    // get user input
    // use user input to update state 
    // update DOM to reflect the new state
