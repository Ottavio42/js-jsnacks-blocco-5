var zucchine = [
    {
        "varieta": "zucchina nera",
        "peso" : 60,
        "lunghezza" : 20
    },
    {
        "varieta": "zucchina romanesca",
        "peso" : 45,
        "lunghezza" : 35
    },
    {
        "varieta": "zucchina ortolana di Faenza",
        "peso" : 55,
        "lunghezza" : 25
    },
    {
        "varieta": "zucchina lunga Fiorentina",
        "peso" : 65,
        "lunghezza" : 70
    },
    {
        "varieta": "zucchina siciliana",
        "peso" : 30,
        "lunghezza" : 45
    },
    {
        "varieta": "zucchina striata di napoli",
        "peso" : 75,
        "lunghezza" : 25
    },
    {
        "varieta": "zucchina bianca triestina",
        "peso" : 15,
        "lunghezza" : 50
    },
    {
        "varieta": "zucchina rigata pugliese",
        "peso" : 80,
        "lunghezza" : 35
    },
    {
        "varieta": "zucchina tonda di piacenza",
        "peso" : 50,
        "lunghezza" : 5
    },
    {
        "varieta": "zucchina tonda di nizza",
        "peso" : 30,
        "lunghezza" : 3
    },
];
var somma = 0;
for ( var i = 0; i < zucchine.length; i++) {
    var pesoTot = parseInt((zucchine[i].peso));
    somma += pesoTot;
}
alert("il peso totale delle zucchine è : " + somma + " grammi") 