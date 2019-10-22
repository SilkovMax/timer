'use strict'
let contCurrent;
let numberCount;
let numberNext;
let contFuture;
let createElements = function() {
    contCurrent = document.createElement("div");
    contFuture = document.createElement("div");
    numberCount = document.createElement("span");
    numberNext = document.createElement("span");
    if (contCurrent && contFuture && numberCount && numberNext) {
        contCurrent.classList.add("number");
        contFuture.classList.add("number");
        document.getElementsByClassName("field")[0].appendChild(contCurrent);
        document.getElementsByClassName("field")[0].appendChild(contFuture);

        numberCount.classList.add("numberCount");
        contCurrent.appendChild(numberCount);

        numberNext.classList.add("numberNext");
        contFuture.appendChild(numberNext);

        contFuture.style.top = 200 + "px";
        createNumbers("0", "1");


    }

}
let createNumbers = function(a,b) {
    numberCount.innerHTML = a;
    numberNext.innerHTML = b;
}

document.addEventListener("DOMContentLoaded", createElements);
