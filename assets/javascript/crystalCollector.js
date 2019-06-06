// create an array with random numbers
var randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);

$("#randomNumberMessage").append(randomNumber);

var randomNum = [];

$("#randomNum")
function randomNumberMessage() { 
    document.getElementById("randomNumberMessage").innerHTML = Math.floor(Math.random() * 100) + 1;
console.log(randomNumberMessage);
}

// assign random number to crystal image 

var crystalNum = Math.floor(Math.random() * 50) + 1;
console.log(crystalNum);

//$("#image1").append(crystalNum);
$("#image1").attr("data-value", crystalNum);

var crystalRandom = [];

 $("#image1").click(function image1() {
     var imagevalue = $("#image1").data("value") 
console.log(imagevalue);
userScore = userScore + imagevalue;
$("#userScore").text(userScore);
   
});

$("#image2").attr("data-value", crystalNum);

$("#image2").click(function image2() {
    var imagevalue = $("#image2").data("value") 
console.log(imagevalue);
userScore = userScore + imagevalue;
$("#userScore").text(userScore);
  
});

$("#image3").attr("data-value", crystalNum);

$("#image3").click(function image3() {
    var imagevalue = $("#image3").data("value") 
console.log(imagevalue);
userScore = userScore + imagevalue;
$("#userScore").text(userScore);
  
});




//$("#crystalRandom")
//function image1(){
   //document.getElementById("#image1").innerHTML = Math.floor(Math.random() * 50) + 1;
  // console.log(image1);
//}
// click on crystal to select random number 
// when user click on crystal the number is added to userScore

var userScore = 0;

$("#userScore").text(userScore);             //change the content of user score 



// when user click on another crystal that number is also added
// if user match random number the user wins
    // user win column is increased by one increment
    // user is alerted with you've won 
    // add animation (happy dance!)
    // generated another random number guess
    // generated random number for crystal
// if user exceeds random number the user lose 
    //user lose colunm is increased by one increment
    // user is alerted with you've lose
    // add animation (sad face!)
    // generated another random number guess
    // generated random number for crystal



   
 
//choose number randomly with the math.floor 

$