// chiedo i dati, elimino gli spazi, e li carico nelle variabili
const userName = prompt("Nome: ").replace(/ /g,"");
const userLastName = prompt("Cognome: ").replace(/ /g,"");
const userColor = prompt("Colore preferito: ").replace(/ /g,"");

// Randomize number min to max
const min = 10;
const max = 99;
const nRandom = Math.floor(Math.random() * (max - min + 1)) + min;

// Compongo la password
const userPassword = userName + userLastName + userColor + nRandom

// Scrivo nella pagina la password

// creo una variabile collegata al tag in cui voglio scrivere
const idPassword = document.getElementById("password");

// scrivo dentro il tag
idPassword.innerHTML = userPassword;
