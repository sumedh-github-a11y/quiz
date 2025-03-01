let quizData = [];

function addQuestion() {
    let question = document.getElementById("question-input").value;
    let options = [
        document.getElementById("option1").value,
        document.getElementById("option2").value,
        document.getElementById("option3").value,
        document.getElementById("option4").value
    ];
    let answer = document.getElementById("answer").value;

    if (question && options.every(opt => opt) && answer) {
        let newQuestion = { question, options, answer };
        quizData.push(newQuestion);
        saveQuestions();
        displayQuestions();
    } else {
        alert("Please fill all fields!");
    }
}

function saveQuestions() {
    localStorage.setItem("quizData", JSON.stringify(quizData));
}

function displayQuestions() {
    let questionList = document.getElementById("question-list");
    questionList.innerHTML = "";
    quizData.forEach((q, index) => {
        let li = document.createElement("li");
        li.innerHTML = `${q.question} - <button onclick="deleteQuestion(${index})">Delete</button>`;
        questionList.appendChild(li);
    });
}

function deleteQuestion(index) {
    quizData.splice(index, 1);
    saveQuestions();
    displayQuestions();
}

// Load questions from local storage on page load
window.onload = function () {
    quizData = JSON.parse(localStorage.getItem("quizData")) || [];
    displayQuestions();
};