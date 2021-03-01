// Prompt
var kmUtente = parseInt( prompt("Ciao! Quanti Km vuoi percorrere?") );

if( isNaN(kmUtente) ){
  kmUtente = parseInt( prompt("Non hai digitato dei Numeri!"));
}

var eta = parseInt( prompt("Ora digita la tua età!"));

if( isNaN(eta) ){
  eta = parseInt( prompt("Inserisci dei Numeri!"));
}
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
var prezzoUtente = prezzoBase;

if (eta < 18) {
  prezzoUtente = prezzoUnder18;
}
else if(eta >= 65) {
  prezzoUtente = prezzoOver65;
}

if(isNaN(kmUtente) || isNaN(eta)){
  alert("Non hai inserito dei numeri!!");
  document.getElementById("prezzo").innerHTML = ("Ricarica la pagina!");
}
else{
  document.getElementById("prezzo").innerHTML = prezzoUtente.toFixed(2) + "€";
}
// /Prezzo UTENTE
