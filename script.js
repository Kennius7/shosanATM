

const header = document.getElementById("atmHeader");
const fullName = document.getElementById("name");
const fullName222 = document.getElementsByName("fullNames");
const pinCode = document.getElementById("pin");
const logBtn = document.getElementById("login");
const alertMsg = document.getElementById("alert");
const formBox = document.getElementById("formID");
const atmButtons = document.getElementsByClassName("btn");
const theSameATMBtns1 = document.getElementById("topButtons1");
const theSameATMBtns2 = document.getElementById("topButtons2");
const theSameATMBtns3 = document.getElementById("bottomButtons1");
const theSameATMBtns4 = document.getElementById("bottomButtons2");
const firstBtn = document.querySelector("#topButtons1 :nth-child(1)");
const secondBtn = document.querySelector("#topButtons1 :nth-child(2)");
const thirdBtn = document.querySelector("#topButtons2 :nth-child(1)");
const fourthBtn = document.querySelector("#topButtons2 :nth-child(2)");
const fifthBtn = document.querySelector("#bottomButtons1 :nth-child(1)");
const sixthBtn = document.querySelector("#bottomButtons1 :nth-child(2)");
const seventhBtn = document.querySelector("#bottomButtons2 :nth-child(1)");
const eighthBtn = document.querySelector("#bottomButtons2 :nth-child(2)");

const formPinTarget = document.querySelector("#formID :nth-child(2)");
const atmImage = document.getElementById("atmImg");






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
    
    return NairaBill_1000, NairaBill_500, NairaBill_200, NairaBill_100, NairaBill_50, NairaBill_20, NairaBill_10, NairaBill_5;
}


let tick1 = 0;
let tick2 = 0;
let setInt1 = 0;
let setInt2 = 0;
const nameArray = [];
let tracker1 = 0;
theSameATMBtns1.style.display = "none";
theSameATMBtns2.style.display = "none";
theSameATMBtns3.style.display = "none";
theSameATMBtns4.style.display = "none";
atmImage.style.display = "none";


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


loginWithdraw = () => {
    if (fullName.value === "" || pinCode.value === "") {
        event.preventDefault();
        ErrMsg1();
    }
    else if (pinCode.value !== "0000" && fullName.value !== "" && pinCode.value !== "" && tracker1 === 0) {
        event.preventDefault();
        ErrMsg2();
    }
    else if (pinCode.value === "0000" && fullName.value !== "" && tracker1 === 0) {
        event.preventDefault();
        nameArray[0] = fullName.value;
        formBox.style.display = "none";
        theSameATMBtns1.style.display = "flex";
        theSameATMBtns2.style.display = "flex";
        theSameATMBtns3.style.display = "flex";
        theSameATMBtns4.style.display = "flex";
        firstBtn.innerHTML = "About SPB";
        secondBtn.innerHTML = "Check Balance";
        thirdBtn.innerHTML = "ATM Card Renewal";
        fourthBtn.innerHTML = "Withdraw";
        fifthBtn.innerHTML = "Quikteller";
        sixthBtn.innerHTML = "Earn Some Money";
        seventhBtn.innerHTML = "Go Back";
        eighthBtn.innerHTML = "Exit";
        header.innerHTML = `Welcome, ${nameArray[0]}. <br> How may we be of service to you?`
        tracker1++;
    }
    else if (fullName.value !== "" && tracker1 === 3) {
        event.preventDefault();
        header.innerHTML = `Welcome, ${nameArray[0]}. <br> <span style="color: rgb(68, 7, 7);">Please take your cash</span>`;
        amount = fullName.value;
        atmPrintFunction();
        fullName.style.display = "none";
        logBtn.style.display = "none";
        atmImage.style.display = "block";
        formBox.style.marginTop = "50px"
        alertMsg.innerHTML = `<span style='letter-spacing: 2px;'>You have: <br> <br> <span style="color: black; font-size: 18px; font-weight: bolder; font-family: Verdana;">
        ${NairaBill_1000}</span> 1000 Naira bill(s), <span style="color: black; font-size: 18px; font-weight: bolder; font-family: Verdana;">
        ${NairaBill_500}</span> 500 Naira bill(s), <br> <span style="color: black; font-size: 18px; font-weight: bolder; font-family: Verdana;">
        ${NairaBill_200}</span> 200 Naira bill(s), <span style="color: black; font-size: 18px; font-weight: bolder; font-family: Verdana;">
        ${NairaBill_100}</span> 100 Naira bill(s), <br> <span style="color: black; font-size: 18px; font-weight: bolder; font-family: Verdana;">
        ${NairaBill_50}</span> 50 Naira bill(s), <span style="color: black; font-size: 18px; font-weight: bolder; font-family: Verdana;">
        ${NairaBill_20}</span> 20 Naira bill(s), <br> <span style="color: black; font-size: 18px; font-weight: bolder; font-family: Verdana;">
        ${NairaBill_10}</span> 10 Naira bill(s), and <span style="color: black; font-size: 18px; font-weight: bolder; font-family: Verdana;">
        ${NairaBill_5}</span> 5 Naira bill(s) <br> <br> in the tray.</span>`
        tracker1++;
    }
}

withdraw500 = () => {
    if (tracker1 === 2) {
        event.preventDefault();
        header.innerHTML = `Welcome, ${nameArray[0]}. <br> <span style="color: rgb(68, 7, 7);">Please take your cash</span>`;
        theSameATMBtns1.style.display = "none";
        theSameATMBtns2.style.display = "none";
        theSameATMBtns3.style.display = "none";
        theSameATMBtns4.style.display = "flex";
        amount = 500;
        atmPrintFunction();
        formBox.style.display = "grid";
        fullName.style.display = "none";
        pinCode.style.display = "none";
        logBtn.style.display = "none";
        atmImage.style.display = "block";
        formBox.style.marginTop = "50px"
        eighthBtn.innerHTML = "Exit";
        alertMsg.innerHTML = `<span style='letter-spacing: 2px;'>You have: <span style="color: black; font-size: 18px; font-weight: bolder; font-family: Verdana;">
        ${NairaBill_500}</span> 500 Naira bill(s), in the tray.</span>`
        tracker1++;
    }
}

withdraw1000 = () => {
    if (tracker1 === 2) {
        event.preventDefault();
        header.innerHTML = `Welcome, ${nameArray[0]}. <br> <span style="color: rgb(68, 7, 7);">Please take your cash</span>`;
        theSameATMBtns1.style.display = "none";
        theSameATMBtns2.style.display = "none";
        theSameATMBtns3.style.display = "none";
        theSameATMBtns4.style.display = "flex";
        amount = 1000;
        atmPrintFunction();
        formBox.style.display = "grid";
        fullName.style.display = "none";
        pinCode.style.display = "none";
        logBtn.style.display = "none";
        atmImage.style.display = "block";
        formBox.style.marginTop = "50px"
        eighthBtn.innerHTML = "Exit";
        alertMsg.innerHTML = `<span style='letter-spacing: 2px;'>You have: <span style="color: black; font-size: 18px; font-weight: bolder; font-family: Verdana;">
        ${NairaBill_1000}</span> 1000 Naira bill(s), in the tray.</span>`
        tracker1++;
    }
}

withdraw2000 = () => {
    if (tracker1 === 2) {
        event.preventDefault();
        header.innerHTML = `Welcome, ${nameArray[0]}. <br> <span style="color: rgb(68, 7, 7);">Please take your cash</span>`;
        theSameATMBtns1.style.display = "none";
        theSameATMBtns2.style.display = "none";
        theSameATMBtns3.style.display = "none";
        theSameATMBtns4.style.display = "flex";
        amount = 2000;
        atmPrintFunction();
        formBox.style.display = "grid";
        fullName.style.display = "none";
        pinCode.style.display = "none";
        logBtn.style.display = "none";
        atmImage.style.display = "block";
        formBox.style.marginTop = "50px"
        eighthBtn.innerHTML = "Exit";
        alertMsg.innerHTML = `<span style='letter-spacing: 2px;'>You have: <span style="color: black; font-size: 18px; font-weight: bolder; font-family: Verdana;">
        ${NairaBill_1000}</span> 1000 Naira bill(s), in the tray.</span>`
        tracker1++;
    }
}

withdraw5000 = () => {
    if (tracker1 === 2) {
        event.preventDefault();
        header.innerHTML = `Welcome, ${nameArray[0]}. <br> <span style="color: rgb(68, 7, 7);">Please take your cash</span>`;
        theSameATMBtns1.style.display = "none";
        theSameATMBtns2.style.display = "none";
        theSameATMBtns3.style.display = "none";
        theSameATMBtns4.style.display = "flex";
        amount = 5000;
        atmPrintFunction();
        formBox.style.display = "grid";
        fullName.style.display = "none";
        pinCode.style.display = "none";
        logBtn.style.display = "none";
        atmImage.style.display = "block";
        formBox.style.marginTop = "50px"
        eighthBtn.innerHTML = "Exit";
        alertMsg.innerHTML = `<span style='letter-spacing: 2px;'>You have: <span style="color: black; font-size: 18px; font-weight: bolder; font-family: Verdana;">
        ${NairaBill_1000}</span> 1000 Naira bill(s), in the tray.</span>`
        tracker1++;
    }
}

withdraw20000 = () => {
    if (tracker1 === 2) {
        event.preventDefault();
        header.innerHTML = `Welcome, ${nameArray[0]}. <br> <span style="color: rgb(68, 7, 7);">Please take your cash</span>`;
        theSameATMBtns1.style.display = "none";
        theSameATMBtns2.style.display = "none";
        theSameATMBtns3.style.display = "none";
        theSameATMBtns4.style.display = "flex";
        amount = 20000;
        atmPrintFunction();
        formBox.style.display = "grid";
        fullName.style.display = "none";
        pinCode.style.display = "none";
        logBtn.style.display = "none";
        atmImage.style.display = "block";
        formBox.style.marginTop = "50px"
        eighthBtn.innerHTML = "Exit";
        alertMsg.innerHTML = `<span style='letter-spacing: 2px;'>You have: <span style="color: black; font-size: 18px; font-weight: bolder; font-family: Verdana;">
        ${NairaBill_1000}</span> 1000 Naira bill(s), in the tray.</span>`
        tracker1++;
    }
}

withdrawOR10000 = () => {
    if (tracker1 === 1) {
        header.innerHTML = `Welcome, ${nameArray[0]}. <br> <span style="color: rgb(68, 7, 7);">How much would you like to withdraw?</span>`;
        firstBtn.innerHTML = "N500";
        secondBtn.innerHTML = "N5000";
        thirdBtn.innerHTML = "N1000";
        fourthBtn.innerHTML = "N10,000";
        fifthBtn.innerHTML = "N2000";
        sixthBtn.innerHTML = "N20,000";
        seventhBtn.innerHTML = "Go Back";
        eighthBtn.innerHTML = "Other Amount?";
        tracker1++;
    }
    else if (tracker1 === 2) {
        event.preventDefault();
        header.innerHTML = `Welcome, ${nameArray[0]}. <br> <span style="color: rgb(68, 7, 7);">Please take your cash</span>`;
        theSameATMBtns1.style.display = "none";
        theSameATMBtns2.style.display = "none";
        theSameATMBtns3.style.display = "none";
        theSameATMBtns4.style.display = "flex";
        amount = 10000;
        atmPrintFunction();
        formBox.style.display = "grid";
        fullName.style.display = "none";
        pinCode.style.display = "none";
        logBtn.style.display = "none";
        atmImage.style.display = "block";
        formBox.style.marginTop = "50px"
        eighthBtn.innerHTML = "Exit";
        alertMsg.innerHTML = `<span style='letter-spacing: 2px;'>You have: <span style="color: black; font-size: 18px; font-weight: bolder; font-family: Verdana;">
        ${NairaBill_1000}</span> 1000 Naira bill(s), in the tray.</span>`
        tracker1++;
    }
}





goBack = () => {
    if (tracker1 === 1) {
        theSameATMBtns1.style.display = "none";
        theSameATMBtns2.style.display = "none";
        theSameATMBtns3.style.display = "none";
        theSameATMBtns4.style.display = "none";
        atmImage.style.display = "none";
        alertMsg.innerHTML = "";
        formBox.style.display = "grid";
        // formBox.style.marginTop = "45%"
        fullName.style.display = "flex";
        formPinTarget.style.display = "flex";
        logBtn.style.display = "block";
        fullName222[0].value = "";
        fullName222[0].placeholder = "                 Full Name";
        header.innerHTML = "Shosan PayBank Services (SPB)";
        logBtn.innerHTML = "Login";
        fullName.value = "";
        pinCode.value = "";
        amount = 0;
        tracker1 = 0;
    }
    else if (tracker1 === 2) {
        header.innerHTML = `Welcome, ${nameArray[0]}. <br> How may we be of service to you?`;
        firstBtn.innerHTML = "About SPB";
        secondBtn.innerHTML = "Check Balance";
        thirdBtn.innerHTML = "ATM Card Renewal";
        fourthBtn.innerHTML = "Withdraw";
        fifthBtn.innerHTML = "Quikteller";
        sixthBtn.innerHTML = "Earn Some Money";
        seventhBtn.innerHTML = "Go Back";
        eighthBtn.innerHTML = "Exit";
        amount = 0;
        tracker1--;
    }
    else if (tracker1 === 3) {
        header.innerHTML = `Welcome, ${nameArray[0]}. <br> <span style="color: rgb(68, 7, 7);">How much would you like to withdraw?</span>`;
        formBox.style.display = "none";
        theSameATMBtns1.style.display = "flex";
        theSameATMBtns2.style.display = "flex";
        theSameATMBtns3.style.display = "flex";
        theSameATMBtns4.style.display = "flex";
        firstBtn.innerHTML = "N500";
        secondBtn.innerHTML = "N5000";
        thirdBtn.innerHTML = "N1000";
        fourthBtn.innerHTML = "N10,000";
        fifthBtn.innerHTML = "N2000";
        sixthBtn.innerHTML = "N20,000";
        seventhBtn.innerHTML = "Go Back";
        eighthBtn.innerHTML = "Other Amount?";
        amount = 0;
        tracker1--;
    }
    else if (tracker1 === 4) {
        header.innerHTML = `Welcome, ${nameArray[0]}. <br> <span style="color: rgb(68, 7, 7);">Please specify amount</span>`;
        theSameATMBtns1.style.display = "none";
        theSameATMBtns2.style.display = "none";
        theSameATMBtns3.style.display = "none";
        theSameATMBtns4.style.display = "flex";
        formBox.style.display = "grid";
        // formBox.style.marginTop = "45%";
        atmImage.style.display = "none";
        fullName.style.display = "block";
        logBtn.style.display = "block";
        fullName222[0].value = "";
        fullName222[0].placeholder = "              Enter Amount";
        formPinTarget.style.display = "none";
        eighthBtn.innerHTML = "Exit";
        logBtn.innerHTML = "Withdraw";
        alertMsg.innerHTML = "";
        tracker1--;
        console.log(tracker1);
    }
}


exitOtherAmountBtn = () => {
    if (tracker1 === 2) {
        header.innerHTML = `Welcome, ${nameArray[0]}. <br> <span style="color: rgb(68, 7, 7);">Please specify amount</span>`;
        theSameATMBtns1.style.display = "none";
        theSameATMBtns2.style.display = "none";
        theSameATMBtns3.style.display = "none";
        theSameATMBtns4.style.display = "flex";
        formBox.style.display = "grid";
        // formBox.style.marginTop = "45%";
        atmImage.style.display = "none";
        fullName.style.display = "block";
        logBtn.style.display = "block";
        fullName222[0].value = "";
        fullName222[0].placeholder = "              Enter Amount";
        formPinTarget.style.display = "none";
        eighthBtn.innerHTML = "Exit";
        logBtn.innerHTML = "Withdraw";
        alertMsg.innerHTML = "";
        tracker1++;
        console.log(tracker1);
    }
    else if (tracker1 !== 2) {
        window.location.href = "index.html";
        // theSameATMBtns1.style.display = "none";
        // theSameATMBtns2.style.display = "none";
        // theSameATMBtns3.style.display = "none";
        // theSameATMBtns4.style.display = "none";
        // atmImage.style.display = "none";
        // alertMsg.innerHTML = "";
        // formBox.style.display = "grid";
        // fullName.style.display = "flex";
        // formPinTarget.style.display = "flex";
        // logBtn.style.display = "block";
        // fullName222[0].value = "";
        // fullName222[0].placeholder = "                 Full Name";
        // header.innerHTML = "Shosan PayBank Services (SPB)";
        // logBtn.innerHTML = "Login";
        // fullName.value = "";
        // pinCode.value = "";
        amount = 0;
        tracker1 = 0;
    }
}









//EXIT ===> OTHER AMOUNT
//WITHDRAW ===> N10,000
//ABOUT SPB ===> N500
//ATM CARD RENEWAL ===> N1000
//QUICKTELLER ===> N2000
//PAY YOUR BILLS ===> GO BACK
//CHECK BALANCE ===> N5000
//EARN SOME MONEY ===> N20,000














