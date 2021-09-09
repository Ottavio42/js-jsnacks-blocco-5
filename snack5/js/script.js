var array=[1,2,3,4,5];
var a = 1;
var b = 3;

function NewArray(array, a, b) {
    let NuovoArray = [];
    for(let a = 1; a < b; a++) {
        NuovoArray.push(array[a]);
    }
    return NuovoArray;
}
