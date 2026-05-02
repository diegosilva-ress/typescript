//Generics: permitem criar funções/classes que trabalham com múltiplos tipos
//Sintaxe: <T> onde T é um tipo genérico (pode ser qualquer letra, mas T é comum)

//Função genérica que retorna o mesmo tipo recebido
function identity<T>(arg: T): T {
    return arg;
}

//Uso com diferentes tipos
const numero = identity<number>(42);
const texto = identity<string>("Olá TypeScript");
const booleano = identity<boolean>(true);

console.log(numero, texto, booleano);

//Array genérico
function primeiroElemento<T>(array: T[]): T | undefined {
    return array[0];
}

const nums = [1, 2, 3];
const frutas = ["maçã", "banana"];

console.log(primeiroElemento(nums));     // 1
console.log(primeiroElemento(frutas));   // "maçã"