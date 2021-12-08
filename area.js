const base = document.querySelector("#base");
const height = document.querySelector("#height");
const checkArea = document.querySelector("#check-area");
const outputEl = document.querySelector("#output");


function calculateArea() {
    const b = Number(base.value);
    const h = Number(height.value);
    if(b === "" || h === "" || b === 0 || h === 0) {
        outputEl.innerText = "Base or height cannot be blank or zero";
    }
    else if (b < 0 || h < 0){
        outputEl.innerText = "Base or Height cannot be negative, enter some positive values ";
    }
    else {
        output.innerText = "Area of a triangle is : " + (1 / 2) * b * h;
    }
}

checkArea.addEventListener('click',calculateArea);