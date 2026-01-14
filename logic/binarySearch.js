/**
 * Realiza una búsqueda binaria en un array ordenado para encontrar el índice de un elemento objetivo.
 *
 * @template T - El tipo de los elementos en el array (debe ser comparable, ej. number o string).
 * @param {T[]} arr - El array ordenado en el que se va a buscar.
 * @param {T} target - El valor que se busca.
 * @returns {number} - El índice del elemento si se encuentra; de lo contrario, retorna -1.
 */
function busquedaBinaria(arr, target) {
    var inicio = 0;
    var fin = arr.length - 1;
    while (inicio <= fin) {
        // Calculamos el punto medio.
        // Usamos Math.floor para asegurar un índice entero.
        var medio = Math.floor((inicio + fin) / 2);
        var valorMedio = arr[medio];
        if (valorMedio === target) {
            // ¡Elemento encontrado! Retornamos el índice.
            return medio;
        }
        if (valorMedio < target) {
            // Si el valor medio es menor que el objetivo,
            // buscamos en la mitad superior del array.
            inicio = medio + 1;
        }
        else {
            // Si el valor medio es mayor que el objetivo,
            // buscamos en la mitad inferior del array.
            fin = medio - 1;
        }
    }
    // Si el bucle termina sin encontrar el elemento, retornamos -1.
    return -1;
}
// --- Ejemplos de uso ---
// Ejemplo 1: Array de números (¡Debe estar ordenado!)
var numerosOrdenados = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
var objetivoNum = 23;
var indiceNum = busquedaBinaria(numerosOrdenados, objetivoNum);
if (indiceNum !== -1) {
    console.log("N\u00FAmero ".concat(objetivoNum, " encontrado en el \u00EDndice: ").concat(indiceNum)); // Salida: índice 5
}
else {
    console.log("N\u00FAmero ".concat(objetivoNum, " no encontrado."));
}
// Ejemplo 2: Array de strings (¡Debe estar ordenado alfabéticamente!)
var frutasOrdenadas = ["banana", "cereza", "kiwi", "mango", "pera", "uva"];
var objetivoFruta = "mango";
var indiceFruta = busquedaBinaria(frutasOrdenadas, objetivoFruta);
if (indiceFruta !== -1) {
    console.log("Fruta '".concat(objetivoFruta, "' encontrada en el \u00EDndice: ").concat(indiceFruta)); // Salida: índice 3
}
else {
    console.log("Fruta '".concat(objetivoFruta, "' no encontrada."));
}
// Ejemplo 3: Elemento que no existe
var indiceNoExiste = busquedaBinaria(numerosOrdenados, 999);
console.log("Buscando 999: ".concat(indiceNoExiste)); // Salida: -1
