/* eslint-disable no-inner-declarations */
'use strict';
let score = 0;

let getname = prompt('welcome to our website, may i have your name please?');
alert('nice to see you here ' + getname);
// console.log(getname);

let ask = prompt('we want to take your opinion in scholerships ' + getname + ' ,if you accept to answer Press y,yes otherwise press n,no ');
ask = ask.toLowerCase();
if (ask === 'yes' || ask === 'y') {


  alert('amazing, you have to answer 5 questions with yes or no, you can use y or n inested ');
} else if (ask === 'no' || ask === 'n') {

  alert('don\'t worry, you might have a look on our website');

}
else {
  alert('invaild input,please enter y,yes,n,no');

}


// eslint-disable-next-line no-inner-declarations
function question1() {
  let Q1 = prompt('is Peterson’s platform better than fast web?');
  Q1 = Q1.toLowerCase();
  //   console.log(Q1);

  if (Q1 === 'yes' || Q1 === 'y') {
    alert('good suggestion');
    score++;
  }

  else if (Q1 === 'no' || Q1 === 'n') {
    alert('maybe you are right');
  }
  else {
    alert('inavalid input');
  }
}

question1();


// eslint-disable-next-line no-inner-declarations
function question2() {
  let Q2 = prompt(' is Duct Tape Attire Scholarships the most valuable? ');


  Q2 = Q2.toLowerCase();

  //   console.log(Q2);
  if (Q2 === 'yes' || Q2 === 'y') {
    alert('Exactly');
    score++;
  }
  else if (Q2 === 'no' || Q2 === 'n') {
    alert('there are more valuable scholerships :)');
  }
  else {
    alert('inavalid input');
  }

}

question2();

// eslint-disable-next-line no-inner-declarations
function question3() {
  let Q3 = prompt(' europe is the best place to apply for scholerships? ');
  Q3 = Q3.toLowerCase();

  //   console.log(Q3);
  if (Q3 === 'yes' || Q3 === 'y') {
    alert('YEAH!');
    score++;
  }
  else if (Q3 === 'no' || Q3 === 'n') {

    alert('i will check that later ');
  }
  else {
    alert('inavalid input');

  }
}
question3();


// eslint-disable-next-line no-inner-declarations
function question4() {
  let Q4 = prompt(' Arab countries are lack of scholerships? ');
  Q4 = Q4.toLowerCase();

  //   console.log(Q4);
  if (Q4 === 'yes' || Q4 === 'y') {
    alert('i think that too');
    score++;
  }
  else if (Q4 === 'no' || Q4 === 'n') {
    alert('Really!!!');
  }
  else {
    alert('inavalid input');
  }
}
question4();

// eslint-disable-next-line no-inner-declarations
function question5() {
  let Q5 = prompt(' you\'ve been applied for a scholership before? ');
  Q5 = Q5.toLowerCase();

  //   console.log(Q5);
  if (Q5 === 'yes' || Q5 === 'y') {
    alert('cool!');
    score++;
  }
  else if (Q5 === 'no' || Q5 === 'n') {
    alert('give your self a try');
  }
  else {
    alert('inavalid input');
  }
}
question5();

function question6() {
  let guessed = false;

  for (let i = 0; i <= 3; i++) {
    let Q6 = prompt('guess a number between 0 and 25, you just have 4 attemps');
    // console.log(Q6);

    Q6 = parseInt(Q6);
    if (Q6 === 13) {
      alert('Amazing, your guess is correct!');
      score++;
      guessed = true;
      break;
    }

    else if (Q6 > 13) {

      alert('too high');
    }
    else if (Q6 < 13) {

      alert('too low');
    }

  }
  if (guessed === false) {
    alert('the correct number is 13');
  }

}
question6();

function question7() {
  let Universities = ['massachusetts', 'oxford', 'stanford', 'harvard'];
  let correct = false;

  for (let i = 0; i <= 5; i++) {
    let Q7 = prompt('guess one of the top Universities in the world ?');
    Q7 = Q7.toLowerCase();
    // console.log(Q7);


    for (let j = 0; j < Universities.length; j++) {


      if (Q7 === Universities[j]) {
        alert('Well done');

        correct = true;
        score++;

        break;

      }


    }
    if (correct) {
      break;
    }
    else {
      alert('Try again');
    }

    if (i === 5) {
      alert('the right answers are : Massachusetts, Oxford, Stanford, Harvard');
    }
  }





}
question7();

alert(`your score is ${score} out of 7`);
alert('thank you for participate, have a nice day');
