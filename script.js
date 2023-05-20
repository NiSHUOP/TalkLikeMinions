var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#text-input");
var textOutput = document.querySelector("#text-output");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text) {
  return serverURL + "?text=" + text;
}

function errorHandler(error) {
    alert("Something wrong with the server, Try again later.");  // Error handling function 
  }

function clickHandler(){

  var inputText = textInput.value;  //taking input

  // calling server for processing
  fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => textOutput.innerText = json.contents.translated
    )
    .catch(errorHandler);
};

btnTranslate.addEventListener("click",clickHandler);
