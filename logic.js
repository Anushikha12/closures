//QUESTION1---------------------    
 function counter(){
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

var counter = counter();
alert(counter());
alert(counter());
alert(counter());
alert(counter());

//first alert returns 1,second alert returns 2,3rd alert returns 3 and fourth alert returns 4.

//QUESTION2------------------------------
let count = 0;
(function immediate() {
  if (count === 0) {
    let count = 1;
    console.log(count); // What is logged?
  }
  console.log(count); // What is logged?
})();

//In the log under "if" block ,the value will be 1 since we are reassigning the value of count variable and we are permitted 
//to do so,because we are using "let" keyword here.the log outside if block will have value 0.

//QUESTION3-----------------------------

for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); // What is logged?
    }, 1000);
}

//3 is logged 3 times.

//Question4-----------------------------------

//Write a code to calculate area of a rectangle using inner function. In this case outer function should accept parameter length and inner function should accept parameter breadth.

function area(l){
    function breadth(b){
        let rec_area=l*b;
        console.log(rec_area);
    }
    breadth(20);
}
area(20);

//QUESTION5-------------------
//Take a variable in outer function and create an inner function to increase the counter every time it is called.

function outer(a){
  function inner(){
    console.log(a+1); 
  }
  inner()
}
for(let i=0;i<5;i++){
  outer(i);
}


//Question6-------------------------

//Print Output
var a = 12;
(function () {
  alert(a);
})();

//it gives us alert value 12.

//question7-------------------------------

var a = 10;
var x = (function () {
  var a = 12;
  return function () {
    alert(a);
  };
})();
x();

//it gives us alert with value 12.

//question8----------------------

var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        "outerArg = " + outerArg + "\n"+  //123
        "innerArg = " + innerArg + "\n" +  //456
        "outerVar = " + outerVar + "\n" +  //a
        "innerVar = " + innerVar + "\n" +  //b
        "globalVar = " + globalVar);   //xyz
    
    })(456);
})(123);



