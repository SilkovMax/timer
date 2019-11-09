'use strict'
let containerNowPosition;
let containerNextPosition;
let numberNow;
let numberNext;
let createElements = function() {
    try{
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
            moveNumber(containerNowPosition, containerNextPosition);


        }
    } catch(e) {
        let x = e.message;
        console.log(x);

    }
}

let setNumbers = function(a,b) {
    numberNow.innerHTML = a;
    numberNext.innerHTML = b;
}

document.addEventListener("DOMContentLoaded", createElements);


function moveNumber(digitCur, digitNext) {
    console.log(digitCur);
    let coefSpeed = 0.05;
    let speedMsInteval = 50;
    let digitCurTopPosition = 0; //текущая позиция, запоминание
    let D6=0;
    let D6_1=1;
    let D5=0;
    let D5_1=1;
    let D4=0;
    let D4_1=1;
    let D3=0;
    let D3_1=1;
    let D2=0;
    let D2_1=1;
    let D1=0;
    let D1_1=1;
    setNumbers(D6, D6_1);

    let timer = setTimeout(function positionNumber() {
        digitCurTopPosition -= coefSpeed * digitCur.offsetHeight;
        digitCur.style.top = digitCurTopPosition + 'px';
        digitNext.style.top = digitCurTopPosition + digitNext.offsetHeight + 'px';
        if (digitCurTopPosition > -digitCur.offsetHeight) {
            timer = setTimeout(positionNumber,speedMsInteval);//step up
        } else {
            if (D6_1<9) {
                D6<9 ? D6 ++ : D6=0;
                D6_1 ++;
            } else {
                D6 =9;
                D6_1=0;
            }
            setNumbers(D6, D6_1);
            digitCur.style.top = "0px";
            digitNext.style.top = digitNext.offsetHeight + 'px';
            digitCurTopPosition = 0;
            timer = setTimeout(positionNumber,speedMsInteval);
        }

    }, speedMsInteval);
}
