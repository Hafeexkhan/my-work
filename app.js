let display = document.querySelector('input[name="display"]');
let acBtn = document.querySelector('input[value="AC"]');
let delBtn = document.querySelector('input[value="DEL"]');
let equalBtn = document.querySelector('input[value="="]');

// All Clear //

acBtn.addEventListener('click', () => {
    display.value = "";
});

// Delete last character //

delBtn.addEventListener('click', () => {
    display.value = display.value.slice(0, -1);
});

// Calculate result //

equalBtn.addEventListener('click', () => {
    if (display.value !== "") {
        display.value = eval(display.value);
    } else {
        display.value = "";
    }
});
