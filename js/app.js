'use strict';
let getname = prompt("welcome to our website, may i have your name please?")
alert("nice to see you here " + getname)
// console.log(getname);

let ask = prompt("we want to take your opinion in scholerships " + getname + " ,if you accept to answer Press y,yes otherwise press n,no ")
ask = ask.toLowerCase();
if (ask == "yes" || ask == "y") {
    alert("amazing, you have to answer 5 questions with yes or no, you can use y or n inested ")



    let Q1 = prompt("is Peterson’s platform better than fast web?")
    Q1 = Q1.toLowerCase();
    // console.log(Q1);

    if (Q1 === 'yes' || Q1 === 'y')
        alert("good suggestion")
    else if (Q1 === 'no' || Q1 === 'n')
        alert("maybe you are right")
    else
        alert("inavalid input")


    let Q2 = prompt(" is Duct Tape Attire Scholarships the most valuable? ")
    Q2 = Q2.toLowerCase();

    // console.log(Q2);
    if (Q2 === 'yes' || Q2 === 'y')
        alert("Exactly")
    else if (Q2 === 'no' || Q2 === 'n')
        alert("there are more valuable scholerships :)")
    else
        alert("inavalid input")



    let Q3 = prompt(" europe is the best place to apply for scholerships? ")
    Q3 = Q3.toLowerCase();

    // console.log(Q3);
    if (Q3 === 'yes' || Q3 === 'y')
        alert("YEAH!")
    else if (Q3 === 'no' || Q3 === 'n')
        alert("i will check taht later ")
    else
        alert("inavalid input")



    let Q4 = prompt(" Arab countries are lack of scholerships? ")
    Q4 = Q4.toLowerCase();

    // console.log(Q4);
    if (Q4 === 'yes' || Q4 === 'y')
        alert("i think that too")
    else if (Q4 === 'no' || Q4 === 'n')
        alert("Really!!!")
    else
        alert("inavalid input")



    let Q5 = prompt(" you've been applied for a scholership before? ")
    Q5 = Q5.toLowerCase();

    // console.log(Q5);
    if (Q5 === 'yes' || Q5 === 'y')
        alert("cool!")
    else if (Q5 === 'no' || Q5 === 'n')
        alert("give your self a try")
    else
        alert("inavalid input")
    alert(`Thank you ${getname} for playing this game`)
}


else if (ask == "no" || ask == "n") {


    alert("don't worry, you might have a look on our website")


}
else {
    alert("invaild input,please enter y,yes,n,no")

}


