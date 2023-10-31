let number = 1
let number1 = 1
let number2 = 1
let number3 = 1
let number4 = 1

function doubt() {
    if (number3 % 2 == 0) {
        document.getElementById("l1").style.display = "none";
    } else {
        document.getElementById("l1").style.display = "flex";
    }

    number3 = number3 + 1
}

function doubt1() {
    if (number4 % 2 == 0) {
        document.getElementById("l2").style.display = "none";
    } else {
        document.getElementById("l2").style.display = "flex";
    }

    number4 = number4 + 1
}

function changeimg() {


    if (number % 2 == 0) {
        document.getElementById("iconic").src = "img/downarrow2.png";
        let ele1 = document.getElementById("button1");

        ele1.style.textDecoration = "none";
    } else {
        document.getElementById("iconic").src = "img/uparrow2.png";
        let ele2 = document.getElementById("button1");

        ele2.style.textDecoration = "underline";
    }

    number = number + 1



}

function changeimg1() {

    if (number1 % 2 == 0) {
        document.getElementById("iconic1").src = "img/downarrow2.png";
        let ele3 = document.getElementById("button2");

        ele3.style.textDecoration = "none";
    } else {
        document.getElementById("iconic1").src = "img/uparrow2.png";
        let ele4 = document.getElementById("button2");

        ele4.style.textDecoration = "underline";
    }

    number1 = number1 + 1


}

function menuswitch() {
    if (number2 % 2 == 0) {
        document.getElementById("diss").style.display = "flex";
    } else {
        document.getElementById("diss").style.display = "none";
    }

    number2 = number2 + 1
}