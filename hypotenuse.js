const sideInputs = document.querySelectorAll(".side-input");
const calculateBtn =document.querySelector("#button-calculate");
const messageDisplay = document.querySelector("#show-message");

function sumOfSqauresOfSide(side1 , side2){
    const counter = side1*side1 + side2*side2 ;
    return counter;
}

function calculateHypotenuse(){
     const a = Number(sideInputs[0].value);
     const b = Number(sideInputs[1].value);
     if(a > 0 && b > 0){
         const sumOfSides = sumOfSqauresOfSide(Number(sideInputs[0].value), Number(sideInputs[1].value));
            const result =Math.sqrt(sumOfSides);
            messageDisplay.innerText = " The value of Hypotenuse B is :" + result.toFixed(2);
     }else{
         messageDisplay.innerText="Please enter valid inputs";
     }
}

calculateBtn.addEventListener("click" , calculateHypotenuse);