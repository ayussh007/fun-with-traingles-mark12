// for the entire form
const quizForm = document.querySelector(".quiz-form");

// for the submit button
const submitAnswerBtn = document.querySelector("#submit-answer-btn");

// to select the output
const outputEl = document.querySelector("#output");

// we will need a seperate array for the right answers. so we have created this in the same order
const correctAnswers = ["90°", "right angled"];

function calculateScore() {
    // need seperate variable for score
    // need a seperate variable for the array correctAnswers which will iterate through it
    let score=0;
    let index=0;
    // here we use FormData and also use for of to get the ans
    // Form Data is an API just gives the value that the user has entered and not other options. so we don't need to loop through all the options and it saves a lot of time
    const formResults = new FormData(quizForm);
    for(let value of formResults.values()){
        if(value === correctAnswers[index]){
        score = score + 1;
    }
    index = index + 1;
 }
 outputEl.innerText = "Your score is"+ score;
}
// the above function should invoke when user submits the answer so attach eventlistner to the button. This should work on click and the function name that you created

submitAnswerBtn.addEventListener('click', calculateScore);