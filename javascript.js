let value = document.querySelector('.valuecontainer');
let input = document.getElementById('myRange');
let containerGrid = document.querySelector('.containerGrid');
let addedDiv;
let newColor = 'white';
let PenColor = '#000000';
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
        if (PenColor === "#000000") {
            event.target.style.backgroundColor = "black";
        } else if (PenColor === 'rainbow') {
            const randomR = Math.floor(Math.random() * 256);
            const randomG = Math.floor(Math.random() * 256);
            const randomB = Math.floor(Math.random() * 256);
            event.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
        } else if (PenColor === 'Eraser'){
            event.target.style.backgroundColor = newColor;
            console.log(newColor);
        }
        else {
            event.target.style.backgroundColor = PenColor;
        }
    }
});

// BACKGROUND COLOR CHANGE FUNCTIONS 
let bckgrndColour = document.getElementById('bckgrndColour');

bckgrndColour.addEventListener('input', () => {
    changeBackgroundColour(newColor, addedDiv);
    newColor = bckgrndColour.value;
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
    PenColor = PenColour.value;
});
// PEN COLOUR CHANGE END

//Rainbow mode
let rainbowColor = document.getElementById('RainbowMode');

rainbowColor.addEventListener('click', () => {
    PenColor = 'rainbow';  
});

let EraserColor = document.getElementById('Eraser');

EraserColor.addEventListener('click', () => {
    PenColor = 'Eraser';
});

// Clear MODE
let clearMode = document.getElementById('Clear');

clearMode.addEventListener('click',  () => {
    changeBackgroundColour(newColor, addedDiv);
});

// Grid LINES
let GridLines = document.getElementById('GridLines');

GridLines.addEventListener('click', () => {
    addedDiv.forEach(div => {
        div.style.border = "none";
    });
});

// THIS MAKES BUTTON AUTOMATICLY OPEN INPUT CHANGER
 function openColorPicker() {
    PenColour.click();
  }
  // SAME FOR BACKGROUND
  function openBackground(){
    bckgrndColour.click();
  }

  const btnWithActive = document.querySelectorAll('.btn');

  btnWithActive.forEach(btn => {
    btn.addEventListener('click', ()=> {
        document.querySelector('.active')?.classList.remove('active');
        btn.classList.add('active');
    })
  })