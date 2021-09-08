var parolaU = prompt("Inserisci una parola :");

while (!isNaN(parolaU)) {
    parolaU = prompt("Questo è un numero riprova :");
};

function frase(parola) {
    var contrarioP = "";
    for (var i = parola.length - 1; i >= 0; i--) {
        contrarioP += parola[i];
    }
   return contrarioP
};
 
var contrarioP = frase("ciao");

console.log(contrarioP)

