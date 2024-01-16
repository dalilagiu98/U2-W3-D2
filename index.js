// RECUPERIAMO I DATI DAL FORM:
const inputName = document.getElementById("inputName");
const form = document.getElementById("name-form");
const buttonDelete = document.getElementById("delete");
const textArea = document.getElementById("card-body");

// GENERO GESTORE PER GLI EVENTI DEI BOTTONI
// SALVA

form.addEventListener("submit", function (event) {
  event.preventDefault(); //per fare in modo che non si aggiorni la pagina e non faccia vedere il nome nella textarea
  const enteredName = inputName.value;
  if (enteredName) {
    localStorage.setItem("username", enteredName);
    textArea.textContent = `${enteredName}`;
  }
});

// CANCELLA
buttonDelete.addEventListener("click", function () {
  localStorage.removeItem("username");
  textArea.textContent = " ";
});
