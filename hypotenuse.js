const inputs = document.querySelectorAll(".inputs");
const checkHypotenuseBtn = document.querySelector("#check-hypotenuse-btn");
const outputEl = document.querySelector("#output");

// need one function which calculate sum of squares

function calculateSumOfSquares(a,b) {
    const sumOfSquares = a*a + b*b;
    return sumOfSquares;
}

function calculateHypotenuse(){
    const sumOfSquares = calculateSumOfSquares(Number(inputs[0].value), Number(inputs[1].value));

    // till above we only got sum of squares. now we need sqrt of it for this we use inbuilt function
    const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
    outputEl.innerText = "The length of Hypotenuse is "+ lengthOfHypotenuse + "cm";
}

checkHypotenuseBtn.addEventListener('click', calculateHypotenuse);