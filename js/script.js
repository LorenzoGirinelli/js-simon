// NUMERI CASUALI
const firstcomputerNumber = Math.floor(Math.random() * 100) + 1;
alert(firstcomputerNumber);
const secondcomputerNumber = Math.floor(Math.random() * 100) + 1;
alert(secondcomputerNumber);
const thirdcomputerNumber = Math.floor(Math.random() * 100) + 1;
alert(thirdcomputerNumber);
const fourcomputerNumber = Math.floor(Math.random() * 100) + 1;
alert(fourcomputerNumber);
const fivecomputerNumber = Math.floor(Math.random() * 100) + 1;
alert(fivecomputerNumber);
// TIMER 30 SECONDI
setTimeout(myFunction, 5000);
// NUMERI CHE L' UTENTE DEVE INSERIRE
function  myFunction() {
    const userNumber = parseInt(prompt(`Inserisci i numeri visti in precendenza`));
console.log(userNumber);
}
// VEDERE QUANTI NUMERI SONO STATI INDOVINATI