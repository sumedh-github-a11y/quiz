const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "Madrid", "Rome", "Berlin"],
        answer: "Paris"
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Jupiter", "Saturn", "Mars", "Earth"],
        answer: "Jupiter"
    }
];

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitButton = document.getElementById("submit");
const quiz = document.getElementById("quiz");

let currentQuestion = 0;
let score = 0;
let timer;

// Function to show the question
function showQuestion() {
    const question = quizData[currentQuestion];
    questionElement.innerText = question.question;

    optionsElement.innerHTML = "";
    question.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        optionsElement.appendChild(button);
        button.addEventListener("click", () => selectAnswer(button, option));
    });

    startTimer();
}

// Function to start the timer
function startTimer() {
    let timeLeft = 10; // 10 seconds per question
    submitButton.innerText = `Submit (${timeLeft}s)`;

    timer = setInterval(() => {
        timeLeft--;
        submitButton.innerText = `Submit (${timeLeft}s)`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            nextQuestion();
        }
    }, 1000);
}

// Function to handle answer selection
function selectAnswer(button, selectedAnswer) {
    clearInterval(timer);

    const correctAnswer = quizData[currentQuestion].answer;

    if (selectedAnswer === correctAnswer) {
        button.classList.add("correct");
        score++;
    } else {
        button.classList.add("wrong");
    }

    setTimeout(nextQuestion, 1000);
}

// Function to move to the next question
function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        showQuestion();
    } else {
        showResult();
    }
}

// Function to show the final result
function showResult() {
    quiz.innerHTML = `
        <h1>Quiz Completed!</h1>
        <p>Your score: ${score}/${quizData.length}</p>
        <button onclick="restartQuiz()">Restart Quiz</button>
    `;
}

// Function to restart the quiz
function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    quiz.innerHTML = `
        <h1>Interactive Quiz</h1>
        <div id="question"></div>
        <div id="options"></div>
        <button id="submit">Submit</button>
    `;
    document.getElementById("submit").addEventListener("click", nextQuestion);
    showQuestion();
}

// Start the quiz
document.addEventListener("DOMContentLoaded", function () {
    showQuestion();
});
