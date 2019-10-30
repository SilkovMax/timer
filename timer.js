'use strict'
let containerNowPosition;
let containerNextPosition;
let numberNow;
let numberNext;
let createElements = function() {
    containerNowPosition = document.createElement("div");
    containerNextPosition = document.createElement("div");
    numberNow = document.createElement("span");
    numberNext = document.createElement("span");
    if (containerNowPosition && containerNextPosition && numberNow && numberNext) {
        containerNowPosition.classList.add("boxForNumber");
        containerNextPosition.classList.add("boxForNumber");
        document.getElementsByClassName("field")[0].appendChild(containerNowPosition);
        document.getElementsByClassName("field")[0].appendChild(containerNextPosition);

        numberNow.classList.add("numberNow");
        containerNowPosition.appendChild(numberNow);

        numberNext.classList.add("numberNext");
        containerNextPosition.appendChild(numberNext);

        containerNextPosition.style.top = 200 + "px";
        let D6=0;
        let D6_1=1;

        let MoveCur = setInterval(function changeDigit () {
            createNumbers(D6, D6_1);
            moveNumber(containerNowPosition, containerNextPosition);
            if (D6_1<9) {
                D6 ++;
                D6_1 ++;
                console.log(D6 + ' ' + D6_1);
            } else {
                D6 =0;
                D6_1=1;
            }
        },1000);



    }

}
let createNumbers = function(a,b) {
    numberNow.innerHTML = a;
    numberNext.innerHTML = b;
}

document.addEventListener("DOMContentLoaded", createElements);


function moveNumber(digitCur, digitNext) {
    console.log(digitCur);
    let coefSpeed = 0.05;
    let speedMsInteval = 50;
    let digitCurTopPosition = 0; //текущая позиция, запоминание

    let timer = setTimeout(function positionNumber() {
        digitCurTopPosition -= coefSpeed * digitCur.offsetHeight;

        digitCur.style.top = digitCurTopPosition + 'px';
        digitNext.style.top = digitCurTopPosition + digitNext.offsetHeight + 'px';


        if (digitCurTopPosition > -digitCur.offsetHeight) {
            timer = setTimeout(positionNumber,speedMsInteval);


        } else {
            digitCur.style.top = "0px";
            digitNext.style.top = digitNext.offsetHeight + 'px';
        };

    }, speedMsInteval);
}
