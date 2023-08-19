// RANGE SLIDER 

let value = document.querySelector('.valuecontainer');
let input = document.getElementById('myRange');


input.addEventListener("input", (event) => {
    value.textContent = event.target.value + " x " + event.target.value;
    console.log(value);
});
// RANGE SLIDER  END
