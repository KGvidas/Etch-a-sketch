// RANGE SLIDER 

let value = document.querySelector('.valuecontainer');
let input = document.getElementById('myRange');


input.addEventListener("input", (event) => {
    value.textContent = event.target.value + " x " + event.target.value;

    resetGrid()
   
    let inputValue = event.target.value;
    checkForDefaultGrid(inputValue);
});
// RANGE SLIDER  END



// MAKING GRID FUNCTIONS
function resetGrid(){
    const removeDivs = document.querySelectorAll('.addedDiv');
     removeDivs.forEach(div => div.remove());
};

let containerGrid = document.querySelector('.containerGrid')

function checkForDefaultGrid(inputValue){
    if (inputValue === "1" ) {
        let div = document.createElement('div');
        div.classList.add('addedDiv');
        containerGrid.appendChild(div);
    } else {
        createGrid(inputValue);
    }
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

// MAKING GRID FUNCTIONS END

// toggle shading
// toggle lightnen