var userName ;
var gender;
var title;
var age;
var userAnswer;

userName = prompt("What is your name");
gender = prompt("What is your gender (male,female)");
age=  prompt("What is your age");
(age<="0") ? alert("inter age again") +prompt("What is your age") : null;
if(gender.toLowerCase() == 'male'){
    title="Mr";
    userAnswer = confirm("Do you want to skip the welcoming message");
}else if(gender.toLowerCase() == 'female'){
    title="Ms";
    userAnswer = confirm("Do you want to skip the welcoming message");
}else{
    withoutTitle();
}



if(userAnswer==true){
}else{
    withTitle();
}
function withTitle(){
   alert("Welcome "+title+" " +userName );
}
function withoutTitle(){
    alert("Welcome "+userName );
}


