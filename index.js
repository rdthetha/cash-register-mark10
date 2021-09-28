const billAmt = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const firstmessage=document.querySelector("#first-error");
const noteValue = document.querySelectorAll(".note-value");
const checkFirstButton=document.querySelector("#first-button");
const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

checkFirstButton.addEventListener("click",function firstValidity(){
hideMessage();
if (billAmt.value > 0) {}
else{
    firstshowMessage("Bill amount cannot be negative");
}
})
checkButton.addEventListener("click", function validateAmount() {
    hideMessage();

    if (billAmt.value > 0) {
        if (cashGiven.value >= billAmt.value) {
            const change = cashGiven.value - billAmt.value;
            calculateChange(change);
        } else {
            showMessage("Cash Given should be more than or equal to bill amount");
        }

    } else {
        showMessage("Bill amount cannot be negative");
    }

});


function hideMessage() {
    message.style.display = "none";
    firstmessage.style.display="none";
}

function showMessage(m) {

    message.style.display = "block";
    message.innerText = m;
}
function firstshowMessage(m) {

    firstmessage.style.display = "block";
    firstmessage.innerText = m;
}
function calculateChange(change) {
    for (let i = 0; i < availableNotes.length; i++) {
        const noOfNotes = Math.trunc(change / availableNotes[i]);
        change = change % availableNotes[i];
        noteValue[i].innerText = noOfNotes;
    }


}