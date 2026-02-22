import getCapital from "./functions/capitalise.js"
import getReverse from "./functions/reverse.js"
import getCalc from "./functions/calc.js"
import getCipher from "./functions/cipher.js"
import getArray from "./functions/intarray.js"

const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");

inputs.forEach(input => {
    console.log("loop")
    input.addEventListener("change", () => {
        form.requestSubmit();
    });
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("form: ", form);
    
    if (form.str.value) {
        initCapital(form.str.value);
        initReverse(form.str.value);
    };
    if (form.int1.value && form.int2.value) initCalc(form.int1.value, form.int2.value);
    if (form.str.value && form.int1.value) initCipher(form.str.value, form.int1.value);
    if (form.int_arr.value) initArray(form.int_arr.value);
});

function initCapital(inp) {
    console.log("Function: initCapital", getCapital(String(inp)));
};

function initReverse(inp) {
    console.log("Function: initReverse", getReverse(String(inp)));
};

function initCalc(inp1, inp2) {
    console.log("Function: initCalc", getCalc(Number(inp1), Number(inp2)));
};

function initCipher(inp1, inp2) {
    console.log("Function: initCipher", getCipher(String(inp1), Number(inp2)));
};

function initArray(inp) {
    console.log("Function: initArray", getArray(String(inp)));
};