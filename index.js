const billAmt=document.querySelector("#bill-amount");
const cashGiven=document.querySelector("#cash-given");
const checkButton=document.querySelector("#check-button");
const message=document.querySelector("#error-message");


checkButton.addEventListener("click",function validateAmount(){
    
    
    if(billAmt.value>0)
    {
     
    }
    else{
        message.innerText="Invaliddd";
    }

});


function showMessage(message){
    
    message.innerText="Invaliddd";
}
