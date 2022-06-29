// create a quiz class
class Quiz {
    constructor(questions) {
        this.score = 0;
        this.questions = questions;
        this.questionsIndex = 0;
    }
getQuestionIndex() {
    return this.questions[this.questionsIndex];
}
guess(answer) {
    if (this.getQuestionIndex().isCorrectAnswer(answer)) {
       this.score++;
    }
    this.questionsIndex++;
}

isEnded() {
    return this.questionsIndex === this.questionsIndex.length;
    }
}

// question class

class Question {
    constructor(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }
    isCorrectAnswer(choice) {
        return this.answer === choice;
    }
}
// display question

function displayQuestion() {
    if (quiz.isEnded()) {
        showScore();
} else {


    // show question
    let questionElement =document.getElementById("question");
    questionElement.innierHTML = quiz.getQuestionIndex().text;
    //show options
    let choices = quiz.getQuestionIndex().choices;
    for (let i = 0; i < choices.length; i++) {
        let choiceElement = document.getElementById("choice" 
        + i);
        choiceElement.innerHTML = choices[i];
        guess("btn" + i, choices[i]);
    }
       showProgress();
}
};
//guess function
function guess(id, guess) {
    let button = document.getElementById(id);
    button.onclick = function() {
        quiz.quess(guess);
        displayQuestion();
    }
}


//quiz progress
function showProgress() {
    let currentQuestionNumber = quiz.questionsIndex + 1;
    let progressElement = document.getElementById("progress");
    progressElement.innerHTML =
    `Question ${currentQuestionNumber} of ${quiz.question.length}
    `;
}

//show score
function showScore() {
    let quizEndHTML =
    `
     <h1>Quiz Completed</h1>
    <h2 id="score">You scored: ${quiz.score} of ${quiz.
        question.length}</h2>
        <div class="quiz-repeat">
            <a href="index.html">Take Quiz Again</a>
        </div>
        `;
        let quizElement = document.getElementById("quiz");
        quizElement.innerHTML = quizEndHTML;


}

//quiz questions about javascrip add answer
let question = [    
    new Question(
        "Hyper Text this is one markup?", ["abc", "hello", "qwer", "thiss"], "qwer"
    ),

    new Question(
        "Hyper Text this is two markup?", ["abc", "hello", "qwer", "thiss"], "abc"
    ),

    new Question(
        "Hyper Text mvfd   arkup?", ["abc", "hello", "qwer", "thiss"], "hello"
    ),

    new Question(
        "Hyper Text vfvfvfarkup?", ["abc", "hello", "qwer", "thiss"], "qwer"
    ) 
]
    
 

let quiz = new Quiz(question);
// display question
displayQuestion();

//need to add countdown 

let time = 1;
let queTimeInMinutes = time * 60 * 60
quizTime = quizTimeInMinutes / 60;

let counting = document.getElementById("count-down");

function startCoundown() {
    let quizTimer = setInterval(function() {
        if (quizTime <= 0) {
            clearInterval(quizTimer);
            showScores();

        } else {
            quizTime--;
            let sec = Math.floor(quizTime % 60);
            let min = Math.floor(quizTime / 60) % 60;
            counting.innnerHTML = `Time: ${min} ${sec}`;
        }
    })
            }
    
startCoundown();