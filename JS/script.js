// chiedo e carico i dati
const userName = prompt("Nome: ");
const userLastName = prompt("Cognome: ");
const userColor = prompt("Colore preferito: ");

// Compongo la password
const userPassword = userName + userLastName + userColor + "23"

// Scrivo nella pagina la password

// creo una variabile collegata al tag in cui voglio scrivere
const idPassword = document.getElementById("password");

// scrivo dentro il tag
idPassword.innerHTML = userPassword;
