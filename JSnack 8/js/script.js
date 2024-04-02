let numero = prompt("Inserisci un numero di 4 cifre");

if (numero.length === 4 && !isNaN(numero)) {
    let somma = 0;

    for (let i = 0; i < numero.length; i++) {

        somma += parseInt(numero[i]);

        console.log(numero);
        console.log(somma);

    }
    alert("La somma delle cifre è: " + somma);
} else {

    alert("Per favore, inserisci un numero di 4 cifre.");
}
