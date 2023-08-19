// RANGE SLIDER 

let value = document.querySelector('.valuecontainer');
let input = document.getElementById('myRange');


input.addEventListener("input", (event) => {
    value.textContent = event.target.value + " x " + event.target.value;

    resetGrid()

    let oneNumberValue = event.target.value;
    // console.log(oneNumberValue);
    createGrid(oneNumberValue);
});
// RANGE SLIDER  END
 
let containerGrid = document.querySelector('.containerGrid')

function createGrid(oneNumberValue) {
    for (let i = 0; i < oneNumberValue; i++){
        let div = document.createElement('div');
        div.classList.add('addedDiv');
        div.textContent = "hello";
        containerGrid.appendChild(div);
    }
};

function resetGrid(){
    const removeDivs = document.querySelectorAll('.addedDiv');
     removeDivs.forEach(div => div.remove());
};



// toggle shading
// toggle lightnen