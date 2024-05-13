hideAllScreens();

const start = document.getElementById("start");
const game = document.getElementById("game");
const score = document.getElementById("score");

const questions = [
    {
        text: "¿Cuál de las siguientes empresas desarrolló ARKit?",
        answers: ["A) Google", "B) Microsoft", "C) Apple", "D) Facebook"],
        correct: 2 // Índice de la respuesta correcta
    },
    {
        text: "¿Cuál es el nombre del videojuego más famoso que hace uso de la realidad aumentada?",
        answers: ["A) Pokemon Go", "B) Grammer Rain", "C) Heiling Scope", "D) SmartWatch"],
        correct: 0 // Índice de la respuesta correcta
    },
    {
        text: "¿Qué tipo de realidad aumentada puede usar códigos QR para superponer elementos virtuales?",
        answers: ["A) Realidad aumentada sobre marcadores", "B) Realidad aumentada basada en reconocimiento facial", "C) Realidad aumentada geolocalizada", "D) Realidad aumentada sin marcadores"],
        correct: 0 // Índice de la respuesta correcta
    },
    {
        text: "¿Qué normativa se utiliza para garantizar la calidad del proceso de desarrollo de software enfocado en el diseño arquitectónico con realidad aumentada?",
        answers: ["A) ISO 27000", "B) ISO 9001", "C) ISO 14971", "D) ISO 13407"],
        correct: 1 // Índice de la respuesta correcta
    }
];



let index;
let rightAnswers;
let actualQuestion;

showScreen(start);

function showScreen(screen){
    screen.style.display = "flex"
}

function hideAllScreens() {
    let screens = document.querySelectorAll('.screen');
    screens.forEach(function(screen) {
      screen.style.display = 'none';
    });
}

function startGame(){
    hideAllScreens();
    index = 0;
    rightAnswers = 0;
    loadQuestion();
    showScreen(game);
}

function loadQuestion(){

    if(index >= questions.length){
        endGame();
    } else{
        game.innerHTML = "";

        actualQuestion = questions[index];

        game.innerHTML = `
        <p class="message">Pregunta ${index + 1} de ${questions.length}</p>
        <h2 class="question">${actualQuestion.text}</h2>
        <div class="option-group">
            <div class="option semi-bold" onclick=checkAnswer(0) id="0">${actualQuestion.answers[0]}</div>
            <div class="option semi-bold" onclick=checkAnswer(1) id="1">${actualQuestion.answers[1]}</div>
            <div class="option semi-bold" onclick=checkAnswer(2) id="2">${actualQuestion.answers[2]}</div>
            <div class="option semi-bold" onclick=checkAnswer(3) id="3">${actualQuestion.answers[3]}</div>
        </div>
        `
    }

}

function checkAnswer(n){
    document.querySelectorAll('.option').forEach(option => {
        option.onclick= null;
    });

    if(actualQuestion.correct == n){
        document.getElementById(`${n}`).classList.add("correct");
        rightAnswers++;
    } else{
        document.getElementById(`${n}`).classList.add("incorrect");
        document.getElementById(`${actualQuestion.correct}`).classList.add("correct");
    }
    index++;

    
    setTimeout(loadQuestion,1000);
}



function endGame(){
    hideAllScreens();

    const img = rightAnswers >= 3 ? "win.png" : "lose.png";

    document.getElementById("score-number").innerText = `${rightAnswers} de ${questions.length}`
    document.getElementById("score-img").src = `./img/${img}`;
    showScreen(score);
}