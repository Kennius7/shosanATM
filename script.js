



// const bankAndAmtArray = [];
// const AtmArray = [nameAndLocArray, bankAndAmtArray];


const header = document.getElementById("atmHeader");
const fullName = document.getElementById("name");
const pinCode = document.getElementById("pin");
const logBtn = document.getElementById("login");
const alertMsg = document.getElementById("alert");
const formBox = document.getElementById("formID");
const atmButtons = document.getElementsByClassName("btn");
const theSameATMBtns1 = document.getElementById("topButtons1");
const theSameATMBtns2 = document.getElementById("topButtons2");
const theSameATMBtns3 = document.getElementById("bottomButtons1");
const theSameATMBtns4 = document.getElementById("bottomButtons2");



theSameATMBtns1.style.display = "none";
theSameATMBtns2.style.display = "none";
theSameATMBtns3.style.display = "none";
theSameATMBtns4.style.display = "none";

let tick1 = 0;
let tick2 = 0;
let setInt1 = 0;
let setInt2 = 0;

ErrMsg1 = () =>{
    setInt1 = setInterval(() => {
        tick1++;
        alertMsg.innerHTML = "Fill all fields";    
    }, 1000);
    setTimeout(() => {
        clearInterval(setInt1);
        alertMsg.innerHTML = "";
    }, 3000);
}

ErrMsg2 = () =>{
    setInt2 = setInterval(() => {
        tick2++;
        alertMsg.innerHTML = "Incorrect pin";    
    }, 1000);
    setTimeout(() => {
        clearInterval(setInt2);
        alertMsg.innerHTML = "";
    }, 3000);
}




const nameArray = [];

loginValidate = () => {
    if (fullName.value === "" || pinCode.value === "") {
        event.preventDefault();
        ErrMsg1();
    }
    else if (pinCode.value != 0000 && fullName.value !== "" && pinCode.value !== "") {
        event.preventDefault();
        ErrMsg2();
    }
    else if (pinCode.value == 0000 && fullName.value !== "") {
        event.preventDefault();
        nameArray[0] = fullName.value;
        formBox.style.display = "none";
        theSameATMBtns1.style.display = "flex";
        theSameATMBtns2.style.display = "flex";
        theSameATMBtns3.style.display = "flex";
        theSameATMBtns4.style.display = "flex";
        header.innerHTML = `Welcome, ${nameArray[0]}. <br> How may we be of service to you?`
    }
}

exitBtn = () => {
    theSameATMBtns1.style.display = "none";
    theSameATMBtns2.style.display = "none";
    theSameATMBtns3.style.display = "none";
    theSameATMBtns4.style.display = "none";
    formBox.style.display = "grid";
    header.innerHTML = "Shosan PayBank Services (SPB)";
    fullName.value = "";
    pinCode.value = "";
}









// let t = 0;
// let b = 0;
// let setInt1 = 0;
// let setInt2 = 0;

// atmLocationPrint = () =>{
//     setInt1 = setInterval(() => {
//         t++;
//         atmLocationPrinter.innerHTML = "";
//     }, 1000);
// }
// atmLocationPrint();


// atmButtonDisplay = () =>{
//     setInt2 = setInterval(() => {
//         b++;
//         atmButton.innerHTML = "Insert ATM Card";
//     }, 1000);
// }
// atmButtonDisplay();


// let amount = 0;
// let remainder1 = 0;
// let remainder2 = 0;
// let remainder3 = 0;
// let remainder4 = 0;
// let remainder5 = 0;
// let remainder6 = 0;
// let remainder7 = 0;

// let NairaBill_1000 = 0;
// let NairaBill_500 = 0;
// let NairaBill_200 = 0;
// let NairaBill_100 = 0;
// let NairaBill_50 = 0;
// let NairaBill_20 = 0;
// let NairaBill_10 = 0;
// let NairaBill_5 = 0;

// atmPrintFunction = () => {
//     NairaBill_1000 = Math.floor(amount / 1000);
//     remainder1 = amount % 1000;

//     NairaBill_500 = Math.floor(remainder1 / 500);
//     remainder2 = remainder1 % 500;

//     NairaBill_200 = Math.floor(remainder2 / 200);
//     remainder3 = remainder2 % 200;

//     NairaBill_100 = Math.floor(remainder3 / 100);
//     remainder4 = remainder3 % 100;

//     NairaBill_50 = Math.floor(remainder4 / 50);
//     remainder5 = remainder4 % 50;

//     NairaBill_20 = Math.floor(remainder5 / 20);
//     remainder6 = remainder5 % 20;

//     NairaBill_10 = Math.floor(remainder6 / 10);
//     remainder7 = remainder6 % 10;
    
//     NairaBill_5 = Math.floor(remainder7 / 5);
    
//     return NairaBill_1000, NairaBill_500, NairaBill_200, NairaBill_100, NairaBill_50, NairaBill_20, NairaBill_10, NairaBill_5;
// }



// insertButton.addEventListener("click", function () {
//     if (nameValue.value == "" || locationValue.value == "") {
//         alert("Fill all fields")
//     }
//     else if (nameValue.value != "" && locationValue.value != "") {
//         localStorage.setItem("nameVal", nameValue.value);
//         localStorage.setItem("locationVal", locationValue.value);
//         clearInterval(setInt1);
//         clearInterval(setInt2);
//         atmLocationPrinter.innerHTML = locationValue.value;
//         window.location.href = "withdraw.html"
//     }
// })



// withdrawFunction = () => {
//     if (bankValue.value == "" || amountValue.value == "") {
//         alert("Fill all fields")
//     }

//     else if (bankValue.value != "" && amountValue.value != "") {
        
//         bankAndAmtArray[0] = bankValue.value;
//         amount = amountValue.value;
//         atmPrintFunction();
//         currencyDetails.innerHTML = `${AtmArray[1][0]} Bank: Hello ${AtmArray[0][0]}, There are ${NairaBill_1000} 1000bills, ${NairaBill_500} 500bills, ${NairaBill_200} 200bills, ${NairaBill_100} 100bills, ${NairaBill_50} 50bills, ${NairaBill_20} 20bills, ${NairaBill_10} 10bills, and ${NairaBill_5} 5bills in the ATM tray. Please collect your cash, thank you!`
//         console.log(AtmArray);
//     }
// }










// const nameAndLocArray = [];
// const bankAndAmtArray = [];
// const AtmArray = [nameAndLocArray, bankAndAmtArray];


// const insertButton = document.getElementById("insertBtn");
// const atmButton = document.getElementById("withdrawBtn");
// const atmLocationPrinter = document.getElementById("locationImport");
// const nameValue = document.getElementById("nameID");
// const locationValue = document.getElementById("locationID");
// const bankValue = document.getElementById("bankID");
// const amountValue = document.getElementById("amountID");
// const currencyDetails = document.getElementById("currencyID");

// let t = 0;
// let b = 0;
// let setInt1 = 0;
// let setInt2 = 0;

// atmLocationPrint = () =>{
//     setInt1 = setInterval(() => {
//         t++;
//         atmLocationPrinter.innerHTML = "";
//     }, 1000);
// }
// atmLocationPrint();


// // atmButtonDisplay = () =>{
// //     setInt2 = setInterval(() => {
// //         b++;
// //         atmButton.innerHTML = "Insert ATM Card";
// //     }, 1000);
// // }
// // atmButtonDisplay();


// let amount = 0;
// let remainder1 = 0;
// let remainder2 = 0;
// let remainder3 = 0;
// let remainder4 = 0;
// let remainder5 = 0;
// let remainder6 = 0;
// let remainder7 = 0;

// let NairaBill_1000 = 0;
// let NairaBill_500 = 0;
// let NairaBill_200 = 0;
// let NairaBill_100 = 0;
// let NairaBill_50 = 0;
// let NairaBill_20 = 0;
// let NairaBill_10 = 0;
// let NairaBill_5 = 0;

// atmPrintFunction = () => {
//     NairaBill_1000 = Math.floor(amount / 1000);
//     remainder1 = amount % 1000;

//     NairaBill_500 = Math.floor(remainder1 / 500);
//     remainder2 = remainder1 % 500;

//     NairaBill_200 = Math.floor(remainder2 / 200);
//     remainder3 = remainder2 % 200;

//     NairaBill_100 = Math.floor(remainder3 / 100);
//     remainder4 = remainder3 % 100;

//     NairaBill_50 = Math.floor(remainder4 / 50);
//     remainder5 = remainder4 % 50;

//     NairaBill_20 = Math.floor(remainder5 / 20);
//     remainder6 = remainder5 % 20;

//     NairaBill_10 = Math.floor(remainder6 / 10);
//     remainder7 = remainder6 % 10;
    
//     NairaBill_5 = Math.floor(remainder7 / 5);
    
//     return NairaBill_1000, NairaBill_500, NairaBill_200, NairaBill_100, NairaBill_50, NairaBill_20, NairaBill_10, NairaBill_5;
// }










// withdrawFunction = () => {
//     if (bankValue.value == "" || amountValue.value == "") {
//         alert("Fill all fields")
//     }

//     else if (bankValue.value != "" && amountValue.value != "") {
        
//         bankAndAmtArray[0] = bankValue.value;
//         amount = amountValue.value;
//         atmPrintFunction();
//         currencyDetails.innerHTML = `${AtmArray[1][0]} Bank: Hello ${localStorage.getItem("nameVal")}, There are ${NairaBill_1000} 1000bills, ${NairaBill_500} 500bills, ${NairaBill_200} 200bills, ${NairaBill_100} 100bills, ${NairaBill_50} 50bills, ${NairaBill_20} 20bills, ${NairaBill_10} 10bills, and ${NairaBill_5} 5bills in the ATM tray. Please collect your cash, thank you!`
//         console.log(AtmArray);
//     }
// }









