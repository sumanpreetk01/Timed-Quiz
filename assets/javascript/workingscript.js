//var timeLeft is a global variable
// var to know what question we are at
var currentIndex;
var score;
var timeLeft;

var startButton = document.querySelector("#start-btn")
console.log(startButton)
startButton.addEventListener("click", quizStart() {
    console.log("Starting quiz")
    currentIndex = 0;
    timeLeft = 60;
    //timerStart()

    displayQuestion()
})
// we get a strat button in our html that we can add a click listener to, when they click it what should happen, quizStart()
// timerStart(){
//     update the html element with the time left, deduct one from your time Remaining,
//     if(time Remaining < 0){
//         stop the timer
//         endQuiz()
//     }
// }

function displayQuestion(){
    console.log("Showing questions!")
    var myCurrentQuestion = myQuestions[currentIndex]
    console.log(myCurrentQuestion)
    // we need to know where our prompt goes (make elemnt in html to hold it)
    // we know where we want the questionHTML, target element and set it to our question
    // we know where we want the answerChoices, target the Element where they belong and append them
    // to these answer choices, addListener to Them,  validateChoice()
} 

//validateChoice(event){
//event is important to me in this function so I'm aware of which button pressed it
//console.log(event.target)
//console.dir(event.target)
// look through the object to see what could help you know if the current answer selected is the correct one
// myCurrentAnswer = myQuestions[currentIndex].correctAnswer
//if it's correct alert it's correct
//if it's incorrect alers it's wrong and subtract time from the clock
//check if we have more questions somehow, if we do, move to the next question currentIndex++ and call displayQuestion()
//else if we are at the end, then endQuiz()
//}

//timerStart should start the timer { every second decrement and show it on the screen}

//gameOver{
    //removing the quiz from the screen
    //get user initials and save them
//}

const myQuestions = [
//     {
//     prompt: "What is my first name?",
//     choices: [{value: "Preet",
// isCorrect: true}, {
//     value: "Mike",
//     isCorrect: false
// }]
// },
{
    prompt: "What is my first name?",
    choices: ["Preet", "Mike", "Sam", "Kate"],
    correctAnswer: "Preet"
}

]



