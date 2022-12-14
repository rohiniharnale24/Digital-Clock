"use strict";

const cl = console.log;
// try to write all the task in function


//requirement
//hr 
//min
//sec
//session

function dClock(){
	
let digitalClock = document.getElementById('digitalclock');

 let d = new Date();//it provide current data
//cl(d);
let hr = d.getHours();
//cl(hr);
let min = d.getMinutes();
//cl(min);
let sec = d.getSeconds();
 
 
let session = "AM";

if(hr >= 12){
	session ="PM";
}
//13  13-12 >> 1
// 14  14-12 >> 2
//15  15-12 >> 3

if(hr >= 12){
	hr = hr - 12;
}
hr = setZero(hr);
min = setZero(min);
sec = setZero(sec);

let result = `${hr} : ${min} : ${sec} ${session}`;
cl(hr , min , sec);

digitalClock.innerHTML = result;

setTimeout(dClock , 1000);

// fun which we want to execute , time in milli sec

}

dClock();


function setZero(num){
	return (num < 10)? ('0'+num):num;
}


//setTimeOut 
//2 parameter
//1st function//2nd time milisecond



/* if(hr < 10){
	hr = "0" + hr;
}
 */
 
 // ternory operator
 
 /* hr = (hr < 10) ? ('0'+hr ): hr;
     //condition ? true condition : false condition

  min = (min <10 )? ('0' + min ):min;
  
  sec = (sec < 10 )? ('0'+ sec):sec;
  
 */
 













