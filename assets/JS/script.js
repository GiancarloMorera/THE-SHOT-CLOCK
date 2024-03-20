
var questions = [
    {
        question: "Who wore #6 on the Miami Heat in 2013?",
        options: ["D.WADE", "C.BOSH", "R.ALLEN", "LeBron JAMES"],
        answer: "LeBron JAMES"
    },
    {
        question: "Who made a three-pointer in the NBA Finals while wearing one shoe?",
        options: ["JORDAN", "MAGIC", "BIRD", "MILLER"],
        answer: "MILLER"
    },
   
];

var questionIndex = 0; 
var score = 0; 
var timeLeft = 60;
var timerInterval; 

function displayQuestion() {
    var currentQuestion = questions[questionIndex];
    document.getElementById("question").textContent = currentQuestion.question;
    
    var options = currentQuestion.options;
    var buttons = document.querySelectorAll(".Bucket");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].textContent = options[i];
    }
}

function checkAnswer(selectedAnswer) {
    var currentQuestion = questions[questionIndex];
    if (selectedAnswer === currentQuestion.answer) {
        alert("Correct!");
        score++; 
    } else {
        alert("Incorrect!");
        timeLeft -= 5; 
    }

    questionIndex++;

    if (questionIndex < questions.length) {
        displayQuestion();
    } else {
        clearInterval(timerInterval); 
        alert("End of the quiz! Your score: " + score);
    }
}

function updateTimer() {
    document.getElementById("time").textContent = timeLeft;

    
    if (timeLeft <= 0) {
        clearInterval(timerInterval); 
        alert("Time's up! Your score: " + score);
    } else {
        timeLeft--;
    }
}

timerInterval = setInterval(updateTimer, 1000);

var buttons = document.querySelectorAll(".Bucket");
buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        checkAnswer(this.textContent);
    });
});

displayQuestion();
