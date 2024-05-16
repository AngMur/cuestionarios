hideAllScreens();

const start = document.getElementById("start");
const game = document.getElementById("game");
const score = document.getElementById("score");

const mainTitle = document.getElementById("main-title");

let questions = getQuestions();
console.log(questions);

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

    const img = rightAnswers >= questions.length - 3 ? "win.png" : "lose.png";

    document.getElementById("score-number").innerText = `${rightAnswers} de ${questions.length}`
    document.getElementById("score-img").src = `./img/${img}`;
    showScreen(score);
}

function getQuestions(){
    let questions = []
    if(mainTitle.innerText === "Realidad Aumentada"){
        questions = [
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
    } else if (mainTitle.innerText == "Internet of Things") {
        questions = [
            {
              text: "¿Quién acuñó el término 'Internet de las Cosas' (IoT) y en qué año?",
              answers: [
                "A) Kevin Ashton en 1999",
                "B) Bill Gates en 2005",
                "C) Tim Berners-Lee en 1990",
                "D) Steve Jobs en 2007"
              ],
              correct: 0 // Respuesta correcta: A) Kevin Ashton en 1999
            },
            {
              text: "¿Qué tecnologías permiten la interconexión de dispositivos en el IoT?",
              answers: [
                "A) Bluetooth y Wi-Fi",
                "B) GPS y NFC",
                "C) RFID y sensores",
                "D) Todas las anteriores"
              ],
              correct: 3 // Respuesta correcta: D) Todas las anteriores
            },
            {
              text: "Menciona al menos tres ejemplos de aplicaciones del IoT en la vida cotidiana.",
              answers: [
                "A) Hogares inteligentes, dispositivos de salud portátiles, vehículos conectados",
                "B) Redes sociales, comercio electrónico, juegos en línea",
                "C) Películas en streaming, música en línea, videoconferencias",
                "D) Ninguna de las anteriores"
              ],
              correct: 0 // Respuesta correcta: A) Hogares inteligentes, dispositivos de salud portátiles, vehículos conectados
            },
            {
              text: "¿Qué aplicación tiene el IoT en el ámbito de la salud y el bienestar?",
              answers: [
                "A) Controlar el tráfico urbano",
                "B) Monitorizar la actividad física y la salud de las personas",
                "C) Mejorar la calidad del aire",
                "D) Ninguna de las anteriores"
              ],
              correct: 1 // Respuesta correcta: B) Monitorizar la actividad física y la salud de las personas
            },
            {
              text: "¿Cuál es el impacto del IoT en la industria manufacturera y la gestión de la cadena de suministro?",
              answers: [
                "A) Reducción de la seguridad",
                "B) Incremento de la eficiencia y la visibilidad en la cadena de suministro",
                "C) Aumento de los costos de producción",
                "D) Ninguna de las anteriores"
              ],
              correct: 1 // Respuesta correcta: B) Incremento de la eficiencia y la visibilidad en la cadena de suministro
            },
            {
              text: "Menciona al menos tres normas ISO relevantes para la regulación y creación del IoT.",
              answers: [
                "A) ISO/IEC 27001, ISO/IEC 30141, ISO/IEC 27701",
                "B) ISO/IEC 27002, ISO/IEC 30141, ISO 9241-303",
                "C) ISO/IEC 20000, ISO 9241-303, ISO/IEC 27701",
                "D) Ninguna de las anteriores"
              ],
              correct: 0 // Respuesta correcta: A) ISO/IEC 27001, ISO/IEC 30141, ISO/IEC 27701
            },
            {
              text: "¿Qué son los 'wearables' y cómo se relacionan con el IoT?",
              answers: [
                "A) Dispositivos electrónicos que se llevan puestos y están conectados a internet, relacionados con el IoT",
                "B) Ropa de moda creada por Wearble Ferman, proveniente de Francia",
                "C) Maquillaje marca 'Wather' pero comúnmente conocida por ese nombre",
                "D) Ninguna de las anteriores"
              ],
              correct: 0 // Respuesta correcta: A) Dispositivos electrónicos que se llevan puestos y están conectados a internet, relacionados con el IoT
            },
            {
              text: "¿Cuál es el papel de la conectividad inalámbrica en el funcionamiento de los dispositivos de IoT?",
              answers: [
                "A) No tiene ningún papel",
                "B) Facilitar la comunicación entre dispositivos y la transmisión de datos",
                "C) Reducir la eficiencia de los dispositivos IoT",
                "D) Ninguna de las anteriores"
              ],
              correct: 1 // Respuesta correcta: B) Facilitar la comunicación entre dispositivos y la transmisión de datos
            },
            {
              text: "¿Cuál de las siguientes aplicaciones pertenece al ámbito de las Smart Cities?",
              answers: [
                "A) Monitorización de la actividad física",
                "B) Gestión del tráfico urbano",
                "C) Control del entretenimiento doméstico",
                "D) Ninguna de las anteriores"
              ],
              correct: 1 // Respuesta correcta: B) Gestión del tráfico urbano
            },
            {
              text: "¿Cuál de las siguientes tecnologías es utilizada en las casas inteligentes para controlar dispositivos mediante comandos de voz?",
              answers: [
                "A) Wi-Fi",
                "B) Zigbee",
                "C) Bluetooth",
                "D) Asistente de voz"
              ],
              correct: 3 // Respuesta correcta: D) Asistente de voz
            }
          ];
          
        
    }

    return questions;
}