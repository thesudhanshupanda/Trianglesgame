const angleEntered = document.querySelectorAll("#angle-input");
const CheckButton = document.querySelector("#check-button");
const displayMessage = document.querySelector("#show-message");

function calculateSum(angle1, angle2, angle3) {
    const sum = angle1 + angle2 + angle3;
    return sum;
}

function isTriangleOrNot() {

    if (Number(angleEntered[0].value) > 0 && Number(angleEntered[1].value) > 0 && Number(angleEntered[2].value > 0)) {
        const finalSum = calculateSum(Number(angleEntered[0].value), Number(angleEntered[1].value), Number(angleEntered[2].value))
            if(finalSum === 180){
                displayMessage.innerText="Yay! The angles entered forms a triangle";

            }else{
                displayMessage.innerText ="The angles entered does not form a triangle";
            }
    } else {
        displayMessage.innerText = "Please enter valid inputs.";
    }

}

CheckButton.addEventListener("click", isTriangleOrNot);