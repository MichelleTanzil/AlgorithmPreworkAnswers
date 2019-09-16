//Chapter 0
//Setting and Swapping
var myNumber = 42;
var myName = "Michelle Tanzil";

temp = myNumber;
myNumber = myName;
myName = temp;

//Print -52 to 1066
for (var i = -52; i <= 1066; i++){
    console.log (i);
}

//Don't Worry, Be Happy
function beCheerful() {
    for (var i = 0; i < 98; i++){
        console.log("good morning!");
    }
}

//Multiples of Three = but Not All
for (var i = -300; i <=0; i++) {
    if (i === -3 || i === -6){
        continue;
    }
    else if (i % 3 === 0){
        console.log(i);  
    }
}

//Printing Integers with While

var i = 2000;
while ( i >= 2000 && i <= 5280){
    console.log(i);
    i++;
}

//You Say It's Your Birthday
function birthday(month, day){
    if (month === 7 && day === 21){
        console.log("How did you know?");
    }
    else {
        console.log("Just another day");
    }
}

//Leap Year
var boolean = true;
function leapYear(year){
    if (year % 4 === 0){
        boolean = true;
        if (year % 400 === 0){
            boolean = true;
        }
        else if(year % 100 === 0){
            boolean = false;
        }
    }
    return boolean;
}

//Print and Count
var counter = 0;

for (var i = 512; i <= 4096; i++){
    if (i % 5 === 0){
        console.log(i);
        counter++;
    }  
}
console.log(counter);

//Multiples of Six
var i = 6;

while (i % 6 === 0 && i < 60001){
    console.log (i);
    i+=6;
}

//Counting, the Dojo Way

for (var i = 1; i <= 100; i++){
    if (i % 5 === 0){
        console.log("Coding");
        if (i % 10 === 0){
            console.log ("Dojo");
        }
    }    
    else {
        console.log(i);
    }
}

//What Do You Know?

function what(incoming) {
    console.log(incoming);
}

//Whoa, That Sucker's Huge...
var sum = 0;
for (var i = -300000; i >= 300000; i++){
    sum += i;    
}
console.log(sum);

//Countdown by Fours
var four = 2016;

while (four > 0){
    console.log (four);
    four -= 4;
}

//Flexible Countdown
function flexibleCountdown (lowNum, highNum, mult){
    for (var i = highNum; i > 0; i-=mult){
        if (highNum >= lowNum && highNum % mult === 0){
            console.log(highNum);
        }
        highNum-=mult;
    }
}

//The Final Countdown 
function finalCountdown(param1, param2, param3, param4){
    while (param2 <= param3){
        if (param2 === param4){
            param2++;
            continue;
        }
        else if (param2 % param1 === 0){
            console.log(param2);
        }       
        param2++;
    }
}

//Chapter 1
//Countdown
function countdownTwo (num){
    var arr = [];
    for (i=num ; i > 0 ; i--){
        arr.push(i);
    }
    console.log(arr.length);
    console.log(arr);
}

//Print and Return
function printAndReturn (num1,num2){
    console.log(num1);
    return num2;
}

//First Plus Length
function firstPlusLength (arr){
    return arr[0] + arr.length;
}

//Values Greater than Second

function valuesGreaterThanSecond (arr){
    var count = 0;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > arr[1]){
            console.log (arr[i]);
            count++;
        }
    }
    return count;
}

//Values Greater than Second, Generalized
function valuesGreaterThanSecondGeneralized (arr){
    var count = 0;
    var newarr = [];
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > arr[1]){
            newarr.push(arr[i]);
            count++;
        }
    }
    console.log(count);
    if (newarr.length === 1){
        return newarr[0];
    }
    else {
        return newarr;
    }    
}

//This Length, That Value
function thisLengthThatValue (num1, num2){
    var newarr = [];
    if (num1 === num2){
        console.log("Jinx!");
    }
   else {
    for (var i=1; i <= num1; i++){
        newarr.push(num2);
        }
        return newarr;
    }
}

//Fit The First Value

function fitTheFirstValue(arr){
   if (arr[0] > arr.length){
    console.log ("Too big!");
   }
   else if (arr [0] < arr.length){
    console.log("Too small!");
   }
   else {
    console.log("Just right!");
   }    
}

//Fahrenheit to Celsius
function fahrenheitToCelsius(fDegrees){
    var cDegrees = (fDegrees - 32) * (5/9);
    return cDegrees;
}

//Celsius to Fahrenheit 
function celsiusToFahrenheit(cDegrees){
    var fDegrees = (9/5) * cDegrees + 32;
    return fDegrees;
}

//Biggie Size
function biggieSize (arr){
    for (var i =0; i<arr.length; i++){
        if (arr[i] > 0){
            arr[i] = "big";
        }
    }
    return arr;
}

//Print Low, Return High

function printLowReturnHigh(arr){
    var max = arr[0];
    var min = arr[0];
    for (var i = 0; i<arr.length; i++){
        if (arr[i] > max){
            max = arr[i];
        }
        else if (arr[i] < min){
            min = arr[i];
        }
    }
    console.log(min);
    return max;
}

//Print One, Return Another
function printOneReturnAnother(arr){
    console.log(arr[arr.length-2]);
    for (var i = 0; i < arr.length; i++){
        if (arr[i] !== 0){
            return arr[i];
            break;
        }
    }
}

//Double Vision
function doubleVision(arr){
    for (var i = 0; i < arr.length; i++){
        arr[i] *= arr[i];
    }
    return arr;
}

//Count Positives
function positives(arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > 0){
            count++;
        }
    }
    arr[arr.length - 1] = count;
    return arr;
}

//Evens and Odds
function evensAndOdds(arr){
    for (var i = 2; i < arr.length; i++){
        if (arr[i] % 2 !== 0 && arr[i - 1] % 2 !== 0 && arr[i - 2] % 2 !== 0){
            console.log ("That's odd!");
        }
        else if (arr[i] % 2 === 0 && arr[i - 1] % 2 === 0 && arr[i - 2] % 2 === 0){
            console.log("Even more so!");
        }
    }
}


//Increment the Seconds
function incrementTheSeconds(arr){
    for (var i=0; i < arr.length; i++){
        if (arr[i] % 2 !== 0){
            arr[i] += 1;
        }
        console.log(arr[i]);
    }
    return arr;
}

//Previous Lengths
function previousLengths(arr){
    var newarr = [];
    for (var i = 0; i < arr.length; i++) {
        newarr[i] = i;
    }
    return newarr;
}

//Add Seven to Most

function sevenToMost(arr){
    for (var i = 1; i < arr.length; i++){
        arr[i] = arr[i] + 7;
    }
    return arr;
}

//Reverse Array
//First Solution
function reverse(arr){  
    return arr.reverse();
}

//Second Solution
function reverse(arr){
    var newarr=[];
    for (var i = arr.length - 1; i >= 0; i--){
        newarr.push(arr[i]);
    }
    return newarr;
}

//Outlook: Negative
function outlookNegative(arr){
    var newarr = [];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0){
            newarr[i] = arr[i];
        }
        else if (arr[i] > 0){
            newarr[i] = -arr[i];
        }
    }
    return newarr;
}

//Always Hungry
function alwaysHungry(arr){
    var count = 0;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] === "food"){
            console.log("yummy");
        }
        else {
            count++;
        }        
    }
    if (count === arr.length){
        console.log("I'm hungry");
    }
}

//Swap Toward the Center
function swapTowardTheCenter(arr){
    var temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;

    if (arr[2] !== arr[arr.length - 3]){
        var temp2 = arr[2];
        arr[2] = arr[arr.length - 3];
        arr[arr.length - 3] = temp2;
    }

    return arr;
}

//Scale the Array
function scaleTheArray(arr, num){
    for (var i = 0; i < arr.length; i++){
        arr[i] *= num;
    }
    return arr;
}