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

//*question class

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
    if (Quiz.isEnded()) {
        showScore();
} else {


    // show question
    let question = document.getElementById("question");
    questionElement.innierHTML = quiz.getQuestionIndex().text;
    //show option
    let choices = quiz.getQuestionIndex().choices;
    for (let i = 0; i < choices.length; i++) {
        let choiceElement = document.getElementById("choice" +
        i);
        choiceElement.innerHTML = choices[i];
        guess("btn" + i, choices [i]);
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

//quiz questions
let question = [
    new question(
        "Hyper Text markup?", ["abc", "hello", "qwer", "thiss"], "thiss"
    ),

    new question(
        "Hyper Text markup?", ["abc", "hello", "qwer", "thiss"], "qwer"
    ),

    new question(
        "Hyper Text markup?", ["abc", "hello", "qwer", "thiss"], "abc"
    ),

    new question(
        "Hyper Text markup?", ["abc", "hello", "qwer", "thiss"], "hello"
    ),

    
 
];
let quiz = new quiz (question);
// display question
displayQuestion();
