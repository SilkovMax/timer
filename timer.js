'use strict'
let numbers = [];
let fields = [];
let containers = [];





let createElements = function() {
    try{
        for (let i=0; i<6; i++) {
            fields.push(document.createElement("div"));
            fields[i].classList.add("field");
            document.getElementsByClassName("container")[0].appendChild(fields[i]);
            for (let z=0; z<2; z++) {
                containers.push(document.createElement("div"));
                numbers.push(document.createElement("span"));
                containers[z].classList.add("boxForNumber");
                numbers[z].classList.add("number");
                fields[i].appendChild(containers[z]);
                containers[z].appendChild(numbers[z]);
                if (z == 1) containers[z].style.top = 200 + "px";

            }

        }


        if (fields && containers && numbers) {
            document.getElementsByClassName("containers")[0].appendChild(f);
            document.getElementsByClassName("field5")[0].appendChild(container5Position);
            document.getElementsByClassName("field5")[0].appendChild(container5_1Position);

            number5.classList.add("number5");


            number5_1.classList.add("number5_1");
            container5_1Position.appendChild(number5_1);

            container5_1Position.style.top = 200 + "px";
        }

        if (field6 && container6Position && container6_1Position && number6 && number6_1) {
            field6.classList.add("field6");
            document.getElementsByClassName("container")[0].appendChild(field6);

            container6Position.classList.add("boxForNumber");
            container6_1Position.classList.add("boxForNumber");
            document.getElementsByClassName("field6")[0].appendChild(container6Position);
            document.getElementsByClassName("field6")[0].appendChild(container6_1Position);

            number6.classList.add("number6");
            container6Position.appendChild(number6);

            number6_1.classList.add("number6_1");
            container6_1Position.appendChild(number6_1);

            container6_1Position.style.top = 200 + "px";
        }
        moveNumber();

    } catch(e) {
        let x = e.message;
        console.log(x);

    }
}

let setNumbers = function(a,b,c,d) {
    number6.innerHTML = a;
    number6_1.innerHTML = b;
    number5.innerHTML = c;
    number5_1.innerHTML = d;


}

document.addEventListener("DOMContentLoaded", createElements);


function moveNumber() {
    console.log(digitCur);
    let coefSpeed = 0.05;
    let speedMsInteval = 50;
    let digitCurTopPosition6 = 0; //текущая позиция, запоминание
    let digitCurTopPosition5 = 0; //текущая позиция, запоминание

    let D = [0,1,0,1,0,1,0,1,0,1,0,1];

    for (i in D) {
        setNumber(D[i], number[i] }

    setNumbers(D6, D6_1, D5, D5_1);

    let timer = setTimeout(function positionNumber() {
        digitCurTopPosition6 -= coefSpeed * number6.offsetHeight;
        if (D6 == 9) {
            digitCurTopPosition5 -= coefSpeed * number5.offsetHeight;
            number5.style.top = digitCurTopPosition5 + 'px';
            number5_1.style.top = digitCurTopPosition5 + number5_1.offsetHeight + 'px';
        };

        number6.style.top = digitCurTopPosition6 + 'px';
        number6_1.style.top = digitCurTopPosition6 + number6_1.offsetHeight + 'px';
        if (digitCurTopPosition6 > -number6.offsetHeight) {
            timer = setTimeout(positionNumber,speedMsInteval);//step up
        } else {
            if (D6_1<9) {
                D6<9 ? D6 ++ : D6=0;
                D6_1 ++;

            } else {
                D6 =9;
                D6_1=0;
                D5 ++;
                D5_1 ++;
            }
            setNumbers(D6, D6_1, D5, D5_1);
            number6.style.top = "0px";
            number6_1.style.top = number6_1.offsetHeight + 'px';
            digitCurTopPosition6 = 0;
            timer = setTimeout(positionNumber,speedMsInteval);
        }

    }, speedMsInteval);
}
