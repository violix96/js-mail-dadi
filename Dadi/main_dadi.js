// reset js
'use strict';


console.log("Ciao mondo dadi!");

// il computer deve generare un numero casuale da 1 a 6 per l'utente

const numeroGiocatore = Math.floor(Math.random() * 6 + 1);
console.log("Il numero del Giocatore è: " + numeroGiocatore);

// il computer deve generare un numero casuale da 1 a 6 per il computer 

const numeroComputer = Math.floor(Math.random() * 6 + 1);
console.log("Il numero del computer è: " + numeroComputer);

// confronta i punteggi per verificare chi ha vinto 

if (numeroGiocatore > numeroComputer) {
    console.log("Il giocatore ha vinto");
}else if (numeroComputer > numeroGiocatore){
    console.log("Il computer ha vinto");
}else {
    console.log("Pareggio")
}