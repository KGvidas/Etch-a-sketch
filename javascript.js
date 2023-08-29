let value = document.querySelector('.valuecontainer');
let input = document.getElementById('myRange');
let containerGrid = document.querySelector('.containerGrid');
let addedDiv;
let newColor;

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
        event.target.style.backgroundColor = "black";
    }
});


let bckgrndColour = document.getElementById('bckgrndColour');

bckgrndColour.addEventListener('input', () => {
    changeBackgroundColour(newColor, addedDiv);
});

function changeBackgroundColour(newColor, addedDiv) {
    newColor = bckgrndColour.value;
    addedDiv.forEach(div => {
        div.style.backgroundColor = newColor;
    });
}

// bckgrndColour.addEventListener('input', changeBackgroundColour);

// function changeBackgroundColour() { 
//     newColor = bckgrndColour.value;
//     addedDiv.forEach(div => {
//         div.style.backgroundColor = newColor;
//     });
// }




// FIX DEFAULT GRID WHEN REFRESHED PAGE
//hover effect only the
// MINISE SOME LINES IN THE CREATE GRID FUNCTION FOR BETTER READIBILTY

// toggle shading
// toggle lightnen