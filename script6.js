function encontrarMaxMin(lista) {

    if (lista.length === 0) {
        return "A lista está vazia.";
    }

    let maximo = lista[0];
    let minimo = lista[0];


    for (let i = 1; i < lista.length; i++) {
        if (lista[i] > maximo) {
            maximo = lista[i];
        }
        if (lista[i] < minimo) {
            minimo = lista[i];
        }
    }

    return { maximo, minimo };
}


let numeros = [5, 3, 9, 1, 7];
let resultado = encontrarMaxMin(numeros);
console.log("Valor máximo: " + resultado.maximo);
console.log("Valor mínimo: " + resultado.minimo);
