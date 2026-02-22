import getCapital from "./functions/capitalise.js"

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
    if (form.inp1.value && form.inp2.value) initCalc(form.inp1.value, form.inp2.value);
    if (form.str.value && form.inp1.value) initCipher(form.str.value, form.inp1.value);
    if (form.inp_arr.value) initCapital(form.inp_arr.value);
});

function initCapital(inp) {
    console.log(inp)
    console.log("Function: initCapital", getCapital(inp));
};

function initReverse(inp) {
    console.log("Function: initReverse");
};

function initCalc(inp1, inp2) {
    console.log("Function: initCalc");
};

function initCipher(inp1, inp2) {
    console.log("Function: initCipher");
};

function initArray(inp) {
    console.log("Function: initArray");
};