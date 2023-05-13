const questions = [{
        question: "What is question 1?",
        option1: "option 1",
        option2: "option 2",
        option3: "option 3",
        correctAnswer:'option 1'
      },
      {
        question: "What is question 2?",
        option1: "option 1",
        option2: "option 2",
        option3: "option 3",
        correctAnswer:'option 1'
      },
      {
        question: "What is question 3?",
        option1: "option 1",
        option2: "option 2",
        option3: "option 3",
        correctAnswer:'option 1'
      }
];

var score =0;
var isCorrect;

var quizContainerEL = document.querySelector('#quiz-container');
var questionEL = document.querySelector('#question');
var option1EL = document.querySelector('#option1');
var option2EL = document.querySelector('#option2');
var option3EL = document.querySelector('#option3');
var questionCount = document.querySelector('#question-count')
var questionForm = document.querySelector('#question-form')
var endContainerEL = document.querySelector('#end-container')
var startContainerEL = document.querySelector('#start-container')
var displayScore = document.querySelector('#score')
var submitInitial = document.querySelector('#submit-initial')
var buttonEL = document.querySelector("#start-btn");
var initialInput = document.querySelector('#initial-input')
var scoreContainerEL = document.querySelector('#score-container')
var backBtn = document.querySelector('#go-back')
var clearScoreBtn = document.querySelector('#clear-button')
var viewHighScore = document.querySelector('#highScore')
var listOfHighScores = document.querySelector('#listOfHighScores')

let currentIndex = questions.length;

buttonEL.addEventListener("click", startQuiz);

option1EL.addEventListener('click', compareAnswer);
option2EL.addEventListener('click', compareAnswer);
option3EL.addEventListener('click', compareAnswer);

function compareAnswer(event){
  var userAnswer = event.target.textContent; 
  var correctAnswer = questions[currentIndex].correctAnswer;
  console.log(userAnswer);
  console.log(correctAnswer);
  if (userAnswer==correctAnswer) {
    score += 1
  }else{
    timer -= 5
  }
  currentIndex++;
  if(currentIndex>=questions.length){
    endQuiz()
  }else{
  displayQuestion()}
}

function startQuiz(){
    currentIndex = 0
    timer = 60
    endContainerEL.style.display = 'none'
    scoreContainerEL.style.display = 'none'
    quizContainerEL.style.display = 'block'
    displayQuestion();
  
}


function displayQuestion(index){
  startContainerEL.style.display = 'none'
    questionEL.textContent = questions[currentIndex].question;
    option1EL.textContent = questions[currentIndex].option1;
    option2EL.textContent = questions[currentIndex].option2;
    option3EL.textContent = questions[currentIndex].option3
}

function endQuiz(){
  quizContainerEL.style.display = 'none'
  endContainerEL.style.display = 'block'
  scoreContainerEL.style.display = 'none'
  displayScore.textContent = `Score: ${score}`
}



function storeHighScores(event) {
  event.preventDefault();
  if(initialInput.value === ""){
    alert('Please enter your initials!');
    return
  }
  var savedHighScores = localStorage.getItem('high scores');
  var scoresArray;
    if(savedHighScores === null){
      scoresArray=[]
    }else{
      scoresArray = JSON.parse(savedHighScores)
    }
    var userScore = {
      initials: initialInput.value,
      score: displayScore.textContent
    };
    console.log(userScore);
    scoresArray.push(userScore);

    var scoresArrayString = JSON.stringify(scoresArray);
    window.localStorage.setItem('high scores', scoresArrayString)
    showHighScores()
}

function showHighScores(){
  quizContainerEL.style.display = 'none'
  endContainerEL.style.display = 'none'
  scoreContainerEL.style.display = 'block'

  var savedHighScores = localStorage.getItem('high scores');
  if(savedHighScores === null){
    return;
  }
  console.log(savedHighScores)
  var storedHighScores = JSON.parse(savedHighScores);
  for (let index = 0; index < storedHighScores.length; index++) {
    var eachNewHighScore = document.createElement('p');
    eachNewHighScore.innerHTML = storedHighScores[index].initials + ':' + storedHighScores[index].score;
    listOfHighScores.appendChild(eachNewHighScore);
    
  }
  console.log(viewHighScore);
  console.log(storedHighScores);
}
submitInitial.addEventListener("click", function (event){storeHighScores(event);
});