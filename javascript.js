let value = document.querySelector('.valuecontainer');
let input = document.getElementById('myRange');
let containerGrid = document.querySelector('.containerGrid');
let addedDiv;

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

// event delegation

containerGrid.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("addedDiv")) {
        console.log('abc');
        event.target.style.backgroundColor = "black";
    }
});

 


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



// FIX DEFAULT GRID WHEN REFRESHED PAGE
//hover effect only the
// MINISE SOME LINES IN THE CREATE GRID FUNCTION FOR BETTER READIBILTY

// toggle shading
// toggle lightnen