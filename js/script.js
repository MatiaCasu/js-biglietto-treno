// comandi Prova
var kmUtente = prompt("Ciao! Quanti Km vuoi percorrere?");
// var eta = prompt("Bene! Ora digita la tua età!");
// var kmUtente = 20;
// var eta = 16;
// /comandi Prova

// Prova prezzo intero
var prezzoBase = 0.21 * kmUtente;

document.getElementById("prezzo_base").innerHTML = prezzoBase;
// /Prova prezzo intero

// PREZZO SCONTATO Under18
var sconto18 = prezzoBase * 20 / 100;
var prezzoUnder18 = prezzoBase - sconto18;

document.getElementById("prezzo_under18").innerHTML = prezzoUnder18;
// /PREZZO SCONTATO Under18

var sconto65 = prezzoBase * 40 / 100;
var prezzoOver65 = prezzoBase - sconto65;

document.getElementById("prezzo_over65").innerHTML = prezzoOver65;
// /PREZZO SCONTATO Under18
