// Prompt
var kmUtente = prompt("Ciao! Quanti Km vuoi percorrere?");
var eta = prompt("Bene! Ora digita la tua età!");
// /Prompt

// Prezzi
// Prezzo intero
var prezzoBase = 0.21 * kmUtente;

// Prezzo Under18
var sconto18 = prezzoBase * 20 / 100;
var prezzoUnder18 = prezzoBase - sconto18;

// Prezzo Over65
var sconto65 = prezzoBase * 40 / 100;
var prezzoOver65 = prezzoBase - sconto65;
// Prezzi

// Prezzo UTENTE
if (eta < 18) {
  var prezzoUtente = prezzoUnder18;
}
else if(eta > 65){
  prezzoUtente = prezzoOver65;
}
else{
  prezzoUtente = prezzoBase;
}

document.getElementById("prezzo").innerHTML = prezzoUtente;
// /Prezzo UTENTE
