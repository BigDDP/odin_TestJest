

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
});