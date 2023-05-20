var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#text-input");
var textOutput = document.querySelector("#text-output");

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text) {
  return serverURL + "?" + "text" + text
}

// querySelector use for select that particular id
// addEventListener is use for adding task that we performed by the id

// btnTranslate.addEventListener("click",function clickEventHandler() {
//   console.log("clicked!")
// })
function clickHandler(){
  // console.log("clicked!");
  // console.log("input",textInput.value);
  // textOutput.innerText=textInput.value;

  var inputText = textInput.value;  //taking input

  // calling server for processing
  fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
      textOutput.innerText = json.contents.translated;
    })
};

btnTranslate.addEventListener("click",clickHandler)
// textOutput.innerText="Nishu";