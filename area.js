
const sideInputs = document.querySelectorAll(".area-input");
const showMessage = document.querySelector("#show-message");
const areaButton = document.querySelector("#button-area");

function calculateArea( side1 , side2){
        const counter = 0.5 * side1 * side2 ;
        return counter; 
}

function calculateAreaOfTriangle(){
    const a = Number(sideInputs[0].value);
    const b = Number(sideInputs[1].value);
    if(a > 0 && b > 0)
    {
        const areaOfTriangle = calculateArea(a,b)
        showMessage.innerText ="The area of triangle is : " +  areaOfTriangle.toFixed(2) ;
       
    }else{
        showMessage.innerText ="Please enter valid inputs";
    }
}

areaButton.addEventListener("click" , calculateAreaOfTriangle);