// reset js
'use strict';

console.log("Ciao mondo mail!")

// lista delle mail autorizzate 
const mailAutorizzate =  ["mailvincenzoviola1@prova.it", "mailvincenzoviola2@prova.it", "mailvincenzoviola3@prova.it", "mailvincenzoviola@prova.it", "mailvincenzoviola4@prova.it"]

// chiedo all'utente di inserire la sua mail in un prompt

const emailUser = prompt("Inserisci la tua email:");

// variabile che traccia lo stato di autorizzazione dell'email utente
let autorizzato = false;

// controllo se la mail inserita è presente nella lista delle mail autorizzate 

for (let i = 0; i < mailAutorizzate.length; i++){

if (emailUser === mailAutorizzate[i]){
    autorizzato = true;
}

}

// stampa in console del risultato sul controllo delle mail 

if (autorizzato){
    console.log("accesso consentito");
}else{
    console.log("accesso negato");
}


