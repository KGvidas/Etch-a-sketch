// RANGE SLIDER 

let value = document.querySelector('.valuecontainer');
let input = document.getElementById('myRange');


input.addEventListener("input", (event) => {
    value.textContent = event.target.value + " x " + event.target.value;

    resetGrid()
   
    let oneNumberValue = event.target.value;
    // console.log(oneNumberValue);
    checkForDefaultGrid(oneNumberValue);
});
// RANGE SLIDER  END

function resetGrid(){
    const removeDivs = document.querySelectorAll('.addedDiv');
     removeDivs.forEach(div => div.remove());
};

let containerGrid = document.querySelector('.containerGrid')

function checkForDefaultGrid(oneNumberValue){
    if (oneNumberValue === "1" ) {
        let div = document.createElement('div');
        div.classList.add('addedDiv');
        div.textContent = "hello";
        containerGrid.appendChild(div);
    } else {
        createGrid(oneNumberValue);
    }
}

function createGrid(oneNumberValue) {
    for (let i = 0; i < (oneNumberValue  ** 2); i++){
        let div = document.createElement('div');
        div.classList.add('addedDiv');
        div.textContent = "hello";
        containerGrid.appendChild(div);
    }
};



// toggle shading
// toggle lightnen