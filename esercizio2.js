// FACCIO IN  MODO CHE ALL'AVVIO DELLA PAGINA IL BROWSER RECUPERI IL VALORE DI SESSIONSTORAGE:
document.addEventListener("DOMContentLoaded", function () {
  let counterValue = sessionStorage.getItem("counter");
  // se il valore non eiste:
  if (!counterValue) {
    counterValue = 0;
  }
  updateCounter(counterValue);

  // Aggiorna il contatore ogni secondo
  setInterval(function () {
    counterValue++;
    updateCounter(counterValue);

    // Salva il nuovo valore nella sessionStorage
    sessionStorage.setItem("counter", counterValue);
  }, 1000);
});

// CREO FUNZIONE PER IL CONTATORE:

const updateCounter = function (value) {
  const counter = document.getElementById("counter");
  counter.textContent = value;
};
