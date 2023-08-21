let value = document.querySelector('.valuecontainer');
let input = document.getElementById('myRange');
let containerGrid = document.querySelector('.containerGrid')

// RANGE SLIDER;
input.addEventListener("input", (event) => {
    let inputValue = event.target.value;
    updateValueContainer(inputValue);
    resetGrid();
    createGrid(inputValue);
});
// RANGE SLIDER  END;

// ALL GRID RELATED FUNCTIONS;
function resetGrid(){
    const removeDivs = document.querySelectorAll('.addedDiv');
     removeDivs.forEach(div => div.remove());
};

function createGrid(inputValue) {
    for (let i = 0; i < (inputValue  ** 2); i++){
        let div = document.createElement('div');
        div.classList.add('addedDiv');
        containerGrid.appendChild(div);
    }
    let addedDiv = document.querySelectorAll('.addedDiv');
    adjustWidthHeight (inputValue, addedDiv)
};

function adjustWidthHeight (inputValue, addedDiv) {
    let adjustedValue = (550 / inputValue);

    addedDiv.forEach(div => {
        div.style.minWidth = adjustedValue + 'px';
        div.style.minHeight = adjustedValue + 'px';
    });
};

function updateValueContainer(inputValue){
    value.textContent = inputValue + " x " + inputValue;
};

// ALL GRID RELATED END;


// let addedDivs = document.querySelectorAll('.addedDiv');
// addedDivs.forEach((added) => {
//     added.addEventListener("mouseover", (event) => {
//         event.target.style.color = "purple";})
// });

// toggle shading
// toggle lightnen