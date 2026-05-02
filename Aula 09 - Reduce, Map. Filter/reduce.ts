var total = 0;
var numeros = [1, 2, 3, 4, 5, 6];

for (var i = 0; i < numeros.length; i++) {
    total += numeros[i];
}
console.log(total);

//Reduce: método que reduz um array a um único valor
//Sintaxe: array.reduce(callback(acumulador, valorAtual), valorInicial)
//acc (acumulador): valor acumulado das iterações anteriores
//num: valor atual do array sendo processado
//0: valor inicial do acumulador
const numeros2 = [10, 20, 30, 40, 50, 60]
const total2 = numeros2.reduce((acc, num) => acc + num, 0)
console.log(total2)

//Map: método que cria um novo array transformando cada elemento
//Sintaxe: array.map(callback(elemento, indice, array))
//elemento: valor atual do array sendo processado
//Retorna: novo array com os mesmos elementos transformados
const numeros3 = [1, 2, 3, 4, 5]
const dobrados = numeros3.map(num => num * 2)
console.log(dobrados)

//Filter: método que cria um novo array com elementos que atendem a uma condição
//Sintaxe: array.filter(callback(elemento, indice, array))
//elemento: valor atual do array sendo processado
//Retorna: novo array apenas com os elementos que retornam true na callback
const numeros4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const pares = numeros4.filter(num => num % 2 === 0)
console.log(pares)

