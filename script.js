
// textarea node is selected and stored in display variable //

const display = document.querySelector("#textarea");
console.log(display);

// append the argument passed as input every time a button is clicked //

function append(input) {
    display.value += input;
}

// evaluate built-in function is used instead of writing functions seperately 
// like add, multiply etc..
// simple error handling is used if there is an error object is caught

function calc() {
    try {
        display.value = eval(display.value);
    }
    catch(error) {
        display.value = "Error!";
    }
}

// set the display back to empty if the clear button is clicked

function clearDisplay() {
    display.value = "";
}