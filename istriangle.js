// selects all the elements that has this class name in DOM
const inputs = document.querySelectorAll(".angle-input");

// for the button
const isTriangleBtn = document.querySelector("#check-button");

// for the output element
const  outputEl = document.querySelector("#output");


// this is to check the sum of the three angles
function calculateSumOfAngles(angle1, angle2, angle3) {
    const sumOfAngles = angle1 + angle2 + angle3;

    // console.log is just to check whether your function is working
    // console.log(sumOfAngles);

    // now we will return the output so that we can use it in the below function
    return sumOfAngles;
}

// this is to check whether the angles form a triangle or not
function isTriangle(){
    // values are string so below we have typcasted to number
    const sumOfAngles = calculateSumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));
    // this is how we access each value. we will also check the type of this input field
    // console.log(inputs[0].value, inputs[1].value, inputs[2].value);

    // typeof is used to check the data type of the value. In this case it showed string. so when we do SUM in string it concatenates it rather than
    // doing the actual thing
    // console.log(typeof inputs[0].value);
    // console.log(sumOfAngles);
    // so we need to change from string to number
    if(sumOfAngles === 180){
        // to get the output to DOM we use innerText.  The innerText property sets or returns the text content of the specified node, and all its descendants.   
        outputEl.innerText = "YaY, the angles form a triangle";
    }
    else {
        outputEl.innerText = "Oh oh! The angles don't form a triangle";
    }
}

isTriangleBtn.addEventListener("click", isTriangle)

