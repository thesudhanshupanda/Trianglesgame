const quizForm = document.querySelector(".quiz-triangle");
const submitButton = document.querySelector("#submit-btn");
const resultQuiz = document.querySelector("#show-message");

const correctAnswers =["180°" ,"Right Angled Triangle", "70°" ,"all sides are equal", "Different" , "60°" , "12"];


function calculateScore() {
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    for(let value of formResults.values()) {
        if(value === correctAnswers[index]) {
            score = score + 1;
        }
        index = index + 1;
    }

    resultQuiz.innerText = "Your Score is" + score; 
}


quizForm.addEventListener("submit", calculateScore);


// (e)=>{

//   e.preventDefault()

// let score = 0;
// let index = 0;
// const formResults = new FormData(quizForm);

// for(let value of formResults.values())
// {
//         if(value === correctAnswers[index]){
//             score = score + 1;
//         }
//         index = index + 1 ;
//       } 
//       resultQuiz.innerText  = "Your score is " + score;
// });
