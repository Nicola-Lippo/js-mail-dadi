'use strict'
//lista persone che possono accedere
const lista = ['primo', 'secondo', 'terzo'];
let canAccess = false
//chiedo all' utente la sua mail
const user = prompt("inserisci il tuo user per la verifica").toLowerCase();
//verifico se la mail dell'utente e presente nella lista accesso consentito
for (let i = 0; i < lista.length; i++) {
    if (lista[i] === user) {
        canAccess = true;
    }
}
//stampo il risultato della verifica del controllo in console
if (canAccess === true) {
    console.log('puoi entrare');
} else {
    console.log('non puoi entrare');
}