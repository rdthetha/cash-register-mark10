const billAmt = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector(".error-message");
const changeReturn=document.querySelector(".output");
const cashGivendiv=document.querySelector(".cash-given-input");
const noteValue = document.querySelectorAll(".note-value");
const nextButton=document.querySelector("#next-button");
const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

nextButton.addEventListener("click",function firstValidity(){
hideMessage();
if (billAmt.value > 0) {
    nextButton.style.display="none";
    cashGivendiv.style.display="block";
}
else{
    showMessage("Enter Valid Bill Amount");
}
})
checkButton.addEventListener("click", function secondValidity() {
    hideMessage();
    let a=Number(billAmt.value);
    let b=Number(cashGiven.value);

    if (a>0 && b>0) 
    {
        
        if(a > b){
            showMessage("Cash Given is less than bill amount ");
            return;
        }
        calculateChange(a, b);
    } 
    else{
        showMessage("Enter valid Bill amount and Cash given");
        }
})



function hideMessage() {
    message.style.display = "none";
}

function showMessage(m) {

    message.style.display = "block";
    message.innerText = m;
    changeReturn.style.display="none"
}
function calculateChange(change) {
    changeReturn.style.display="block";
    for (let i = 0; i < availableNotes.length; i++) {
        const noOfNotes = Math.trunc(change / availableNotes[i]);
        change = change % availableNotes[i];
        noteValue[i].innerText = noOfNotes;
    }


}