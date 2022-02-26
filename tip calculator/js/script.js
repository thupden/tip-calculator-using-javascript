let button = document.querySelector("#button");
button.addEventListener("click",calculateTip);


function calculateTip()
{
    let billAmount;
    let service;
    let noOfPeople;
    let total;
    billAmount = document.querySelector("#billamt").value;
    service = document.querySelector("#service").value;
    noOfPeople = document.querySelector("#no-of-people").value;

    if(billAmount=="" || service==0){
        alert("Please enter values");
        return;
    }
    if(noOfPeople=="" || noOfPeople<1)
    {
        noOfPeople = 1;
    }
   
    total = ((billAmount * service)/100)/noOfPeople;
    total = total.toFixed(2);
    document.querySelector("#tip").innerText = total;
}