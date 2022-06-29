// create a quiz class
const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFul = document.querySelector('#progressBarFull');

//quiz questions about javascrip add answer
let currentQuestion = {}
    let acceptingAnswers = true
    let score = 0
    let questionCounter = 0
    let availableQuestin = []

    let question = [
        {
            question:'what is 2 + 2?',
            choice1: '2',
            choice1: '3',
            choice1: '32',
            choice1: '34',
            answer: 2,
        },
        {
            question:'what js',
            choice1: '2',
            choice1: '3',
            choice1: '32',
            choice1: 'js',
            answer: js,
        },
        {
            question:'what is oso',
            choice1: '2',
            choice1: '3',
            choice1: 'baby',
            choice1: '34',
            answer: baby,
        },
        {
            question:'what is 2 + 2?',
            choice1: '2',
            choice1: '3',
            choice1: '32',
            choice1: '34',
            answer: 2,
        },
        {
            question:'what is my name?',
            choice1: '2',
            choice1: '3',
            choice1: 'gen',
            choice1: '34',
            answer: gen,
        },
    ]
