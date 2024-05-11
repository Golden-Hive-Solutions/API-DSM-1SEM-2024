const userResponses = {}; //Initializes an empty object that will store the boolean values of the user responses with their correlated ID's.

let slice; //Declares a variable outside of any function so it can be called by either of them when needed

const questionResponses = {}; //Initializes an empty object that will store the boolean values of the randomized questions with their correlated ID's.

let sum; //Variable that will be used to check if the user has passed the test or not

/*This is responsible for creating the whole page, it checks if the user is logged in, and if it is, it'll fetch the questions in a .json format
those questions are then randomized with another function and listed in a format where they can be answered with radio*/
function listarQuestao() {
  if (!usuarioLogado) {
    document.getElementById("botao-logout").style.display = "none";
    document.getElementById("saida").innerHTML =
      "<p>O usuário não está logado. Clique para efetuar o <a href='./login.html'>login</a>.</p>";
  } else {
    const url = `${urlbase}/questao`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          alert("Erro na requisição");
        }
        return response.json();
      })
      .then((data) => {
        let questoes = "";
        const shuffled = shuffle(data);
        slice = shuffled.slice(0, 20);

        for (let i = 0; i < slice.length; i++) {
          questoes += `<div class='questao'>
            <div class='linha-enunciado'>${data[i].enunciado}</div>
            <div class='linha-alternativa'>
              <div class='item-alternativa'>
                <input type="radio" value="true" name="questao-opcao-${data[i].idquestao}" id="verdadeiro${i}" onclick="recordResponse(${i}, true)">
                <label for="verdadeiro${i}">Verdadeiro</label>
              </div>
              <div class='item-alternativa'>
                <input type="radio" value="false" name="questao-opcao-${data[i].idquestao}" id="falso${i}" onclick="recordResponse(${i}, false)">
                <label for="falso${i}">Falso</label>
              </div>
            </div>
          </div>`;
          questionResponses[data[i].idquestao] = data[i].resposta;
        }

        document.getElementById("saida").innerHTML = questoes;
      })
      .catch((error) => {
        console.error("Erro:", error);
      });
  }
  console.log(questionResponses)
}

//This is the function that shuffles the 50 questions randomly
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

/*This one basically gets the userResponses array defined globally before, and then it matches it with the slice.length
as if there is still any null value on userResponses, it'll comeback with a different alert*/
function checkResponses() {
  const totalQuestions = slice.length;
  const answeredQuestions = Object.keys(userResponses).length;
  if (answeredQuestions === totalQuestions) {
    alert("Todas as questões foram respondidas.");
  } else {
    alert("Por favor, responda todas as questões.");
  }
}

//This is the function that collects the answers from the user and pushes it into the object, that associates the ID to the boolean value
function recordResponse(index, response) {
  const questionId = slice[index].idquestao;
  const responseObj = {
    id: questionId,
    response: response
  };
  userResponses[questionId] = responseObj;
  console.log("Recording response for question", questionId);
  console.log("Response:", response);
  console.log("Current userResponses object:", userResponses);
}

//This one corrects the test, comparing each of the objects with their corresponding answers, and pass a call that if the user got <70% of the test correct, they fail.
function correctingResponses() {
  sum = 0;
  for (const questionId in questionResponses) {
    if (userResponses[questionId] && userResponses[questionId].response === questionResponses[questionId])
      sum++;
  }
  if (sum >= 14)
    alert("YIPEEEEEEEEE!!!")
  else
    alert("kys stupid")
  console.log("Total correct answers:", sum);
  
}