// this is a single line comment in JS

/*           
THIS IS A BLOCK COMMENT - good for whole sections
*/

//VARIABLES
//STRING type of data*********************************************
var firstName = "tiffany";  //var holds information or a container var is creating the variable
var lastName = "carter";
//firstName = "bob"; //accessing or using a var 

// = is the assignment operator

//var userName = "tiffany"; // semicolon tells you that's one statement 


//bad variable names no numbers or special symbols
//var @00 hi there = "something"
//var time = "12:30"; //reserved keyword time, function, true, false

//USING SINGLE AND DOUBLE QUOTE

var myComment = "who said this: ";
myQuote = "all the world\'s s stage" //single quote literal characters'""'\'s//


//console.log(myComment); //shows the value of myComment to the console, when we reload
//console.log(message);

var message = firstName +  " "  + lastName; //joining two variables plus sign has a dual use
//target and replace elements on the page
var string1 = document.getElementById("string1");
// //innerHTML = whatever that eleemnt is replace the inside of it
var imagePath = "images/water-color/thumbs/artwork_01.jpg";
//console.log(imagePath);
message = message.toUpperCase();
//console.log(message);

//concantenation - squish things together-strings
//NUMBER *********************************************(don't use quotes or numbers) number data stypes are going to be without quotes
var level = 1;
var lives = 3;
var ssNumber=234334234; //this is interger
var cost = 1.50; //this is a float type number
var cost1 = 50;
var cost2 = 50;
var total = Number(cost1) + cost2; //perform math by adding +
//consol.log(total);

//console.log(level);
/****ARRAY DATA TYPE****/ //it is a variable that can hold many values-lists 0 indexed array - first item in the array starts with what's called an index number of 0 
var imageList = new Array;
imageList[0] = "images/oil/thumbs/artwork_1.jpg";
imageList[1] = "images/oil/thumbs/artwork_2.jpg";
imageList[2] = "images/oil/thumbs/artwork_3.jpg";
imageList[3] = "images/oil/thumbs/artwork_4.jpg";
imageList[4] = "images/oil/thumbs/artwork_5.jpg";
imageList[5] = "images/oil/thumbs/artwork_6.jpg";
imageList[6] = "images/oil/thumbs/artwork_7.jpg";
//imageList.push(""images/oil/thumbs/artwork_8.jpg""); //push - build up the list with a .push method
//console.log(imageList.length); 

var imagePlaceholder = document.getElementById("placeholder");
imagePlaceholder.setAttribute("src", imageList[2]); //update the src attribute of the image 
//why do care about validating input - beause we let users input untrusted data( data you do not control) blackhat(bad people) - user error

//********BOOLEAN DATA TYE******************************
//truth or false, yes or no, 1or 0

var oldEnough = false;
var hasContent = true;

var age = 18;


//*****************ifthen statements(branching logic, application logic, buisness logic)******************

//check the age

if (age <= 20 && age != 5){
  //too young
  oldEnough = false;
}else{
oldEnough = true;
}
  
if (oldEnough == true){ //==means is equal to // = means get sets to
//more code here
  console.log("you may go on the ride");
}else{
console.log("you may not go on the ride");
}

//***********Functions************
//method - are funtions that belong to objects
//what are objects are a collection of properties and methods
//object - respondes to messages - a collection

function dynamicGreeting(){
//create the built-in date object
  var now = new Date();
  var time = now.getHours(); //extract the hours
  
  if(time < 12){
    alert("good morning!");
  }
  
  if (time == 12){
      alert("time to eat lunch");
  }
  
  if (time > 12){
  alert("good evening!, the time is..." + now.toLocaleString());
  }
  
}

dynamicGreeting();