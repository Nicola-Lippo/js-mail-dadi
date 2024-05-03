'use strict'
//creo un numero per il giocatore
const numeroUser = Math.ceil(Math.random() * 6)
console.log(numeroUser)
//creo un numero per il pc
const numeroPc = Math.ceil(Math.random() * 6)
console.log(numeroPc)
//confronto i 2 numeri il più alto vince
if (numeroUser === numeroPc) {
    console.log(`avete pareggiato col numero ${numeroUser}`);
} else if (numeroUser < numeroPc) {
    console.log(`Il giocatore perde col numero ${numeroUser}, il pc vince col numero ${numeroPc}`);
} else {
    console.log(`Il giocatore vince col numero ${numeroUser}, il pc perde col numero ${numeroPc}`);
}