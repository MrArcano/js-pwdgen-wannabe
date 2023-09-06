// chiedo i dati, elimino gli spazi, e li carico nelle variabili
const userName = prompt("Nome: ").replace(/ /g,"");
const userLastName = prompt("Cognome: ").replace(/ /g,"");
const userColor = prompt("Colore preferito: ").replace(/ /g,"");

// Randomize number 1 to 100
const nRandom = Math.floor(Math.random() * 100) + 1;

// Compongo la password
const userPassword = userName + userLastName + userColor + nRandom

// Scrivo nella pagina la password

// creo una variabile collegata al tag in cui voglio scrivere
const idPassword = document.getElementById("password");

// scrivo dentro il tag
idPassword.innerHTML = userPassword;
