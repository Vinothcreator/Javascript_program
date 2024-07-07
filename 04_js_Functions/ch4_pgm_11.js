var quizQuestion1, quizQuestion2, quizQuestion3, quiz, showQuizQuestion;

quizQuestion1 = {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Lisbon"],
    correctAnswer: "Paris"
};

quizQuestion2 = {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Mars"
};

quizQuestion3 = {
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: ["Harper Lee", "Mark Twain", "Ernest Hemingway", "F. Scott Fitzgerald"],
    correctAnswer: "Harper Lee"
};

showQuizQuestion = function () {
    console.log("Question: " + quiz.question);
    console.log("Options:");
    for (var i = 0; i < quiz.options.length; i++) {
        console.log((i + 1) + ": " + quiz.options[i]);
    }
    console.log("Correct Answer: " + quiz.correctAnswer);
    console.log("------------------------------");
};

quiz = quizQuestion1;
showQuizQuestion();

quiz = quizQuestion2;
showQuizQuestion();

quiz = quizQuestion3;
showQuizQuestion();
