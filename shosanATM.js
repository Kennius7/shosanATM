
const nameAndLocArray = [];
const bankAndAmtArray = [];
const AtmArray = [nameAndLocArray, bankAndAmtArray];

const atmButton = document.getElementById("withdrawBtn");
const atmLocationPrinter = document.getElementById("locationImport");
const nameValue = document.getElementById("nameID");
const locationValue = document.getElementById("locationID");

let t = 0;
let b = 0;
let setInt1 = 0;
let setInt2 = 0;

atmLocationPrint = () =>{
    setInt1 = setInterval(() => {
        t++;
        atmLocationPrinter.innerHTML = "";
    }, 1000);
}
atmLocationPrint();


atmButtonDisplay = () =>{
    setInt2 = setInterval(() => {
        b++;
        atmButton.innerHTML = "Insert ATM Card";
    }, 1000);
}
atmButtonDisplay();


let amount = 0;
let remainder1 = 0;
let remainder2 = 0;
let remainder3 = 0;
let remainder4 = 0;
let remainder5 = 0;
let remainder6 = 0;
let remainder7 = 0;

let NairaBill_1000 = 0;
let NairaBill_500 = 0;
let NairaBill_200 = 0;
let NairaBill_100 = 0;
let NairaBill_50 = 0;
let NairaBill_20 = 0;
let NairaBill_10 = 0;
let NairaBill_5 = 0;

atmPrintFunction = () => {
    NairaBill_1000 = Math.floor(amount / 1000);
    remainder1 = amount % 1000;

    NairaBill_500 = Math.floor(remainder1 / 500);
    remainder2 = remainder1 % 500;

    NairaBill_200 = Math.floor(remainder2 / 200);
    remainder3 = remainder2 % 200;

    NairaBill_100 = Math.floor(remainder3 / 100);
    remainder4 = remainder3 % 100;

    NairaBill_50 = Math.floor(remainder4 / 50);
    remainder5 = remainder4 % 50;

    NairaBill_20 = Math.floor(remainder5 / 20);
    remainder6 = remainder5 % 20;

    NairaBill_10 = Math.floor(remainder6 / 10);
    remainder7 = remainder6 % 10;
    
    NairaBill_5 = Math.floor(remainder7 / 5);
    
    return NairaBill_1000;
    return NairaBill_500;
    return NairaBill_200;
    return NairaBill_100;
    return NairaBill_50;
    return NairaBill_20;
    return NairaBill_10;
    return NairaBill_5;
}
atmPrintFunction();




let firstInstance = 0;

atmButton.addEventListener("click", function () {
    if (nameValue.value == "" || locationValue.value == "") {
        alert("Fill all fields")
    }
    else if (nameValue.value != "" && locationValue.value != "" && AtmArray[0][0] != nameValue.value) {
        nameAndLocArray[0] = nameValue.value;
        nameAndLocArray[1] = locationValue.value;
        clearInterval(setInt1);
        clearInterval(setInt2);
        atmLocationPrinter.innerHTML = AtmArray[0][1];
        atmButton.innerHTML = "Withdraw";
        nameValue.value = "";
        locationValue.value = "";
        nameValue.placeholder = "What bank do you bank with?";
        locationValue.placeholder = "Withdraw amount?"
    }
    else if (nameValue.value != "" && locationValue.value != "" && AtmArray[0][0] == nameValue.value) {
      
    }
})







