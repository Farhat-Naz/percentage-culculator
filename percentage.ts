//this is calculator which calculate percentages of five subjects
let studentId="334";
let totalmarks=500;
let mathScore=85;
let physicsScore=80;
let chemistryScore=90;
let bioScore=70;
let ComputerScore=95;
let totalNumber=mathScore+physicsScore+chemistryScore+bioScore+ComputerScore;
let finalResult=(totalNumber/totalmarks)*100;
console.log(totalNumber);
console.log(finalResult);
let result="student"+"" + studentId+""+finalResult+"%";
console.log(result);
