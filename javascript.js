let value = document.querySelector('.valuecontainer');
let input = document.getElementById('myRange');
let containerGrid = document.querySelector('.containerGrid');
let addedDiv;
let newColor;
let newPenColor;
let defaultDiv = document.getElementById('default');

// RANGE SLIDER;
input.addEventListener("input", (event) => {
    let inputValue = event.target.value;
    updateValueContainer(inputValue);
    resetGrid();
    createGrid(inputValue);
});

function updateValueContainer(inputValue){
    value.textContent = inputValue + " x " + inputValue;
};
// RANGE SLIDER  END;

// ALL GRID RELATED FUNCTIONS;
function resetGrid() {
    const removeDivs = document.querySelectorAll('.addedDiv');
    removeDivs.forEach(div => div.remove());
}

function createGrid(inputValue) {
    for (let i = 0; i < (inputValue  ** 2); i++){
        let div = document.createElement('div');
        div.classList.add('addedDiv');
        containerGrid.appendChild(div);
    }
    addedDiv = document.querySelectorAll('.addedDiv');
    adjustWidthHeight (inputValue, addedDiv)
    changeBackgroundColour(newColor, addedDiv)
};

function adjustWidthHeight (inputValue, addedDiv) {
    let adjustedValue = (550 / inputValue);

    addedDiv.forEach(div => {
        div.style.minWidth = adjustedValue + 'px';
        div.style.minHeight = adjustedValue + 'px';
    });
};
// ALL GRID RELATED END;

// event delegation for mouseover 

containerGrid.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("addedDiv")) {
        if (PenColour.value === "#000000") {
            event.target.style.backgroundColor = "black";
        } else {
            event.target.style.backgroundColor = newPenColor;
        }
    }
});

// BACKGROUND COLOR CHANGE FUNCTIONS 
let bckgrndColour = document.getElementById('bckgrndColour');

bckgrndColour.addEventListener('input', () => {
    changeBackgroundColour(newColor, addedDiv);
});

function changeBackgroundColour(newColor, addedDiv) {
    newColor = bckgrndColour.value;
   
    if (addedDiv){
    addedDiv.forEach(div => {
        div.style.backgroundColor = newColor;
    });
} else {
    defaultDiv.style.backgroundColor = newColor;
}};
// BACKGROUND COLOR CHANGE FUNCTIONS END


// PEN COLOUR CHANGE 
let PenColour = document.getElementById('PnColour');

PenColour.addEventListener('input', () => {
    newPenColor = PenColour.value;
});


// PEN COLOUR CHANGE END



// toggle shading
// toggle lightnen