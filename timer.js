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
        }
        let i =0;
        for (let field in fields) {

            containers.push(document.createElement("div"));
            containers[i].classList.add("boxForNumber");
            numbers.push(document.createElement("span"));
            numbers[i].classList.add("number");
            numbers[i].textContent = "0";

            containers.push(document.createElement("div"));
            containers[i+1].classList.add("boxForNumber");
            numbers.push(document.createElement("span"));
            numbers[i+1].classList.add("number");
            numbers[i+1].textContent = "1";

            fields[field].appendChild(containers[i]);
            fields[field].appendChild(containers[i+1]);
            console.log(field);

            containers[i].appendChild(numbers[i]);
            containers[i+1].appendChild(numbers[i+1]);

            containers[i+1].style.top = 200 + "px";
            i+=2;
        }
        moveNumber();
    } catch(e) {
        let x = e.message;
        console.log(x);
    }
}

let setNumbers = function(a,b,numCur,numNext) {
    numCur.textContent = a;
    numNext.textContent = b;
}

document.addEventListener("DOMContentLoaded", createElements);


function moveNumber() {
    let coefSpeed = 0.05;
    let speedMsInteval = 30;
    let curPos = [0,0,0,0,0,0];


    let D = [0,0,0,0,0,0,0,0,0,0,0,1];

    let h = containers[0].offsetHeight

    let timer = setTimeout(function positionNumber() {
         curPos[5] -= coefSpeed * h;
         containers[10].style.top = curPos[5] + 'px';
         containers[11].style.top = curPos[5] + h + 'px';
        if (D[10] == 9) {
            curPos[4] -= coefSpeed * h;
            containers[8].style.top = curPos[4] + 'px';
            containers[9].style.top = curPos[4] + h + 'px';
            if (D[8] == 6) {
                curPos[3] -= coefSpeed * h;
                containers[6].style.top = curPos[3] + 'px';
                containers[7].style.top = curPos[3] + h + 'px';
                if (D[6] == 9) {
                    curPos[2] -= coefSpeed * h;
                    containers[4].style.top = curPos[2] + 'px';
                    containers[5].style.top = curPos[2] + h + 'px';
                    if (D[4] == 3) {
                        curPos[1] -= coefSpeed * h;
                        containers[2].style.top = curPos[1] +  'px';
                        containers[3].style.top = curPos[1] + h + 'px';
                        if (D[2] == 2) {
                            curPos[0] -= coefSpeed * h;
                            containers[0].style.top = curPos[0] +  'px';
                            containers[1].style.top = curPos[0] + h + 'px';
                        }
                    }
                }
            }
        }


        if (curPos[5] > -h) {
            timer = setTimeout(positionNumber,speedMsInteval);//step up
        } else {
            if (D[11]<9) {
                D[10]<9 ? D[10] ++ : D[10]=0;
                D[11] ++;
            } else {
                D[10] =9;
                D[11]=0;
                D[9] ++;
                if (D[9]>1) {
                    if (D[9]<6) {
                        D[8]<6 ? D[8] ++ : D[8]=0;
                    } else {
                        D[8]=5;
                        D[9]=0;
                        D[7] ++;
                        if (D[7]>1) {
                            if (D[7]<9) {
                                D[6]<9 ? D[6] ++ : D[6]=0;
                            } else {
                                D[6] =9;
                                D[7]=0;
                                D[5] ++;
                                if (D[5]>1)
                                    D[4] ++;
                                setNumbers(D[4], D[5], numbers[4], numbers[5]);
                                containers[4].style.top = "0px";
                                containers[5].style.top = h + 'px';
                                curPos[2] = 0;
                            }

                        }
                        setNumbers(D[6], D[7], numbers[6], numbers[7]);
                        containers[6].style.top = "0px";
                        containers[7].style.top = h + 'px';
                        curPos[3] = 0;
                    }

                }
                setNumbers(D[8], D[9], numbers[8], numbers[9]);
                containers[8].style.top = "0px";
                containers[9].style.top = h + 'px';
                curPos[4] = 0;
            }
            setNumbers(D[10], D[11], numbers[10], numbers[11]);
            containers[10].style.top = "0px";
            containers[11].style.top = h + 'px';
            curPos[5] = 0;
            timer = setTimeout(positionNumber,speedMsInteval);
        }

    }, speedMsInteval);
}
