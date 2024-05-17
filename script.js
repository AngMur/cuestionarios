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
            },
            {
              text: "¿Qué tipo de tecnología desarrolla la empresa Mojo Vision?",
              answers: ["A) Gafas de realidad aumentada", "B) Hologramas de realidad aumentada", "C) Aplicaciones con realidad aumentada", "D) Lentes de contacto con realidad aumentada"],
              correct: 3 // Índice de la respuesta correcta
          },
          {
              text: "¿Cómo se crean los hologramas?",
              answers: ["A) Mediante la utilización de la luz", "B) Por medio de rayos láser", "C) Con múltiples espejos", "D) Mediante múltiples pantallas LED"],
              correct: 0 // Índice de la respuesta correcta
          },
          {
              text: "¿Cómo se pueden manejar los lentes de contacto AR?",
              answers: ["A) Mediante gestos con las manos", "B) Mediante movimientos con los ojos", "C) Por comandos de voz", "D) A través del celular"],
              correct: 1 // Índice de la respuesta correcta
          },
          {
              text: "¿Quién fue el creador del primer objeto relacionado con la AR (el sensorama)?",
              answers: ["A) Desarrollado por la universidad de Harvard", "B) Morton Heiling", "C) Ivan Sutherland", "D) Morton Leigh"],
              correct: 1 // Índice de la respuesta correcta
          },
          {
              text: "¿En qué consiste el HMD?",
              answers: ["A) El primer simulador de aviación", "B) Un sistema de identificación", "C) Proyectaba imágenes en 3D, con una serie de sonidos, hacía vibrar el asiento del usuario y lanzaba aire", "D) Consistía en un casco que se colocaba en la cabeza del usuario con una pantalla montada a la altura de los ojos"],
              correct: 3 // Índice de la respuesta correcta
          },
          {
              text: "¿En qué aspecto el OIS (Sistema de identificación de objetos) sentó las bases para la AR?",
              answers: ["A) Aplicando la superposición de gráficos en el mundo real", "B) Haciendo que la experiencia del simulador de aviación sea más realista", "C) Dando experiencias sensoriales al usuario mediante el movimiento del asiento, sonidos e imágenes", "D) Ninguna de las anteriores"],
              correct: 0 // Índice de la respuesta correcta
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
          
        
    } else if(mainTitle.innerText == "Red 5G"){
      questions = [
        {
            text: "¿Cuántos Gb/s puede alcanzar el ancho de banda de la tecnología 5G?",
            answers: ["A) 10 Gb/s", "B) 6 Gb/s", "C) 12 Gb/s", "D) 9 Gb/s"],
            correct: 0 // Índice de la respuesta correcta
        },
        {
            text: "¿Cuál fue el año en que se utilizó por primera vez la radio de dos vías portátil?",
            answers: ["A) 1922", "B) 1925", "C) 1923", "D) 1929"],
            correct: 2 // Índice de la respuesta correcta
        },
        {
            text: "¿Cómo se llama el equipo militar que Motorola creó en la Segunda Guerra Mundial?",
            answers: ["A) Handie Talkie H19-45", "B) Handie Talkie H12-16", "C) Walkie Talkie H12-16", "D) Walkie Talkie H19-45"],
            correct: 1 // Índice de la respuesta correcta
        },
        {
            text: "¿Qué fue lo que caracterizó a la tecnología 1G?",
            answers: ["A) Hacer que los teléfonos móviles tengan acceso a internet.", "B) Que tuviera un sistema totalmente digital.", "C) Un menor tiempo de latencia.", "D) Ser analógica y estrictamente para voz."],
            correct: 3 // Índice de la respuesta correcta
        },
        {
            text: "¿Cuál fue el primer protocolo de codificación que se utilizó para los teléfonos móviles de la 2G?",
            answers: ["A) GSM (Global System For Mobile Communication)", "B) CDMA (Code Division Multiplex Access)", "C) GPRS (General Packet Radio Service)", "D) TDMA (Time Division Multiplex Access)"],
            correct: 0 // Índice de la respuesta correcta
        },
        {
            text: "¿Cuál fue el año en que tuvo su aparición la tecnología 3G?",
            answers: ["A) 2002", "B) 2003", "C) 2001", "D) 2000"],
            correct: 2 // Índice de la respuesta correcta
        },
        {
            text: "¿Cuál es la característica principal de la tecnología 4G?",
            answers: ["A) Que puede lograr una velocidad de hasta 300 Mb/s.", "B) Que dispone de una mayor resistencia a interferencias.", "C) Su altísima tasa de transmisión.", "D) El paso de dispositivos analógicos a un sistema totalmente digital."],
            correct: 2 // Índice de la respuesta correcta
        },
        {
            text: "¿Cuál es la norma ISO que establece un conjunto de indicadores que permiten medir y evaluar el desempeño de las ciudades en términos de sostenibilidad?",
            answers: ["A) ISO 20000", "B) ISO 9001", "C) ISO 27033", "D) ISO 37120"],
            correct: 3 // Índice de la respuesta correcta
        },
        {
            text: "¿Cómo se llama la empresa que trabaja con servicios de ambulancias a través de telesalud para ayudar a los servicios de emergencia a proporcionar cuidados más completos a quienes acaban de sufrir ictus graves?",
            answers: ["A) Visionable", "B) MiuMiu", "C) LG", "D) Samsung"],
            correct: 0 // Índice de la respuesta correcta
        },
        {
            text: "¿Cuál es el año en que Corea del Sur hará los primeros proyectos piloto de 6G?",
            answers: ["A) 2028", "B) 2026", "C) 2025", "D) 2027"],
            correct: 1 // Índice de la respuesta correcta
        }
    ];
    
    }

    return questions;
}
