//this is calculator which calculate percentages of five subjects
var studentId = "334";
var totalmarks = 500;
var mathScore = 85;
var physicsScore = 80;
var chemistryScore = 90;
var bioScore = 70;
var ComputerScore = 95;
var totalNumber = mathScore + physicsScore + chemistryScore + bioScore + ComputerScore;
var finalResult = (totalNumber / totalmarks) * 100;
console.log(totalNumber);
console.log(finalResult);
var result = "student" + studentId + "" + finalResult + "%";
console.log(result);
