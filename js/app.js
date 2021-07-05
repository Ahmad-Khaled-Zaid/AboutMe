'use strict';
let getname = prompt("welcome to our website, may i have your name please?")
alert("nice to see you here " + getname)
    // console.log(getname);

let ask = prompt("we want to take your opinion in scholerships " + getname + " ,if you accept to answer Press y, otherwise press n ")
ask = ask.toLowerCase();
if (ask == "yes" || ask == "y") {


    alert("amazing, you have to answer 5 questions with yes or no, you can use y or n inested ")
    let Q1 = prompt("is Peterson’s platform better than fast web?")
    // console.log(Q1);
alert("good suggestion")
    let Q2 = prompt(" is Duct Tape Attire Scholarships the most valuable? ")
    // console.log(Q2);
    alert("we thought that too")

    let Q3 = prompt(" europe is the best place to apply for scholerships? ")
    // console.log(Q3);
    alert("good suggestion")

    let Q4 = prompt(" Arab countries are lack of scholerships? ")
    // console.log(Q4);
    alert("That's true")

    let Q5 = prompt(" you've been applied for a scholership before? ")
    // console.log(Q5);
    alert("good suggestion")

}


else if (ask == "no" || ask == "n") {


    alert("don't worry, you might have a look on our website")
    

}
else {
    alert("invaild input,please enter y,yes,n,no")

}


