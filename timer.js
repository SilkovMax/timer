'use strict'
let numbers = [];
let fields = [];
let containers = [];
let D = [0,0,0,0,0,0,0,0,0,0,0,1];
let play = true;


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

            containers[i].appendChild(numbers[i]);
            containers[i+1].appendChild(numbers[i+1]);

            containers[i+1].style.top = 200 + "px";
            i+=2;
        }
        // numbers[0].textContent="2";
        // numbers[1].textContent="3";
        // numbers[2].textContent="3";
        // numbers[3].textContent="4";
        // numbers[4].textContent="5";
        // numbers[5].textContent="0";
        // numbers[6].textContent="8";
        // numbers[7].textContent="9";
        // numbers[8].textContent="5";
        // numbers[9].textContent="0";
        // numbers[10].textContent="9";
        // numbers[11].textContent="0";
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

window.onkeydown = function spaceNumbers() {
    if(event.keyCode==32)
		if (!play) {
			moveNumber();
			play = true;
		} else
			play = false;
}


function moveNumber() {
    let coefSpeed = 0.05;
    let speedMsInteval = 50;
    let curPos = [0,0,0,0,0,0];

    let h = containers[0].offsetHeight

    let timer = setTimeout(function positionNumber() {
         curPos[5] -= coefSpeed * h;
         containers[10].style.top = curPos[5] + 'px';
         containers[11].style.top = curPos[5] + h + 'px';
        if (D[10] == 9) {
            curPos[4] -= coefSpeed * h;
            containers[8].style.top = curPos[4] + 'px';
            containers[9].style.top = curPos[4] + h + 'px';
            if (D[8] == 5) {
                curPos[3] -= coefSpeed * h;
                containers[6].style.top = curPos[3] + 'px';
                containers[7].style.top = curPos[3] + h + 'px';
                if (D[6] == 9) {
                    curPos[2] -= coefSpeed * h;
                    containers[4].style.top = curPos[2] + 'px';
                    containers[5].style.top = curPos[2] + h + 'px';
                    if (D[4] == 5) {
                        curPos[1] -= coefSpeed * h;
                        containers[2].style.top = curPos[1] +  'px';
                        containers[3].style.top = curPos[1] + h + 'px';
                        if (D[2] == 9) {
                            curPos[0] -= coefSpeed * h;
                            containers[0].style.top = curPos[0] +  'px';
                            containers[1].style.top = curPos[0] + h + 'px';
                        }
                    }
                }
            }
        }

        let flag = true;
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
                        D[8]<5 ? D[8] ++ : D[8]=0;
                    } else {
                        D[8]=5;
                        D[9]=0;
                        D[7] ++;
                        if (D[7]>1) {
                            if (D[7]<10) {
                                D[6]<9 ? D[6] ++ : D[6]=0;
                            } else {
                                D[6]=9;
                                D[7]=0;
                                D[5] ++;
                                console.log("D5 =" + D[5]);
                                if (D[5]>1) {
                                    if (D[5]<6) {
                                        D[4]<5 ? D[4] ++ : D[4]=0;
                                        console.log("D3 =" + D[3] +" D0 ="  + D[0]);
                                    } else {
                                        D[4]=5;
                                        D[5]=0;
                                        D[3] ++;
                                        console.log("D3 =" + D[3] +" D0 ="  + D[0]);
                                        if (D[3]>1 && D[0]<2) {
                                            if (D[3]<10) {
                                                D[2]<9 ? D[2] ++ : D[2]=0;
                                            } else {
                                                D[2]=9;
                                                D[3]=0;
                                                D[1] ++;
                                            }
                                        }
                                        else {
                                            if (D[3] == 1) {
                                                D[2] = 0;
                                                console.log(D[2]);
                                            }
                                            else {
                                                if (D[3]<5) {
                                                    D[2]<4 ? D[2] ++ : D[2]=0;
                                                    console.log(D[2]);
                                                } else {
                                                    D[2]=3;
                                                    D[3]=0;
                                                    D[1] ++;
                                                    console.log(D[1]);
                                                }
                                            }
                                        }
                                        setNumbers(D[2], D[3], numbers[2], numbers[3]);
                                        containers[2].style.top = "0px";
                                        containers[3].style.top = h + 'px';
                                        curPos[1] = 0;
                                    }
                                }
                                else {
                                    if (D[0] == 2 && D[2] == 3) {
                                        D = [0,0,0,0,0,0,0,0,0,0,0,1];
                                        for (let i=0;i<12;i+=2)
                                            setNumbers(D[i],D[i+1],numbers[i],numbers[i+1]);
                                        flag = false;
                                    }
                                    else D[4] =0;
                                }
                                setNumbers(D[4], D[5], numbers[4], numbers[5]);
                                containers[4].style.top = "0px";
                                containers[5].style.top = h + 'px';
                                curPos[2] = 0;
                            }
                        }
                        else {
                            D[6] =0;
                        }
                        setNumbers(D[6], D[7], numbers[6], numbers[7]);
                        containers[6].style.top = "0px";
                        containers[7].style.top = h + 'px';
                        curPos[3] = 0;
                    }
                }
                else {
                    D[8] =0;
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
            document.body.style = "background-color: #"+D[1]+D[3]+D[5]+D[7]+D[9]+D[11] + ";";
            console.log("#" +D[1]+D[3]+D[5]+D[7]+D[9]+D[11]);

            if (flag && play)
                timer = setTimeout(positionNumber,speedMsInteval);
        }

    }, speedMsInteval);
}
