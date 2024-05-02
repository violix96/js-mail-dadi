// reset js
'use strict';


console.log("Ciao mondo dadi!");

// chiedo al giocatore, tramite un prompt, di scegliere un numero da 1 a 6
const numeroGiocatore = Number(prompt("Scegli un numero da 1 a 6:"));

// verifico se l'input dell'utente è valido 

if(isNaN(numeroGiocatore) || numeroGiocatore < 1 || numeroGiocatore > 6){
    console.log("Il numero inserito non è valido");
}else{
    console.log("Il numero che hai scelto è: " + numeroGiocatore);
}