/*
  Tipos de variaveis no TypeScript:

  - boolean: verdadeiro ou falso.
  - number: numeros inteiros, decimais, hexadecimais, binarios e octais.
  - string: textos com aspas simples, duplas ou template strings.
  - array: lista de valores do mesmo tipo, como number[] ou string[].
  - tuple: lista com tamanho e tipos definidos, como [string, number].
  - enum: conjunto de constantes nomeadas.
  - union: permite mais de um tipo, como string | number.
  - any: aceita qualquer tipo, mas perde a seguranca do TypeScript.
  - unknown: aceita qualquer valor, mas exige verificacao antes de usar.
  - void: usado quando uma funcao nao retorna valor.
  - null e undefined: ausencia de valor ou valor nao definido.
  - object: valores nao primitivos, como objetos e arrays.

  O TypeScript tambem consegue inferir tipos automaticamente
  quando uma variavel recebe um valor inicial.
*/

let isActive: boolean = true;
let hasPermission = false // TypeScript infere o tipo booleano a partir do valor atribuído

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let float: number = 3.14;

let color: string = "blue";
let fullName: string = `John Doe`;
let age: number = 30;
let sentence: string = `My name is ${fullName} and I am ${age} years old.`;

let numeros: number[] = [1, 2, 3, 4, 5];
let frutas: Array<string> = ["apple", "banana", "orange"];
let anything: any[] = ["texto", 10, true, { nome: "Diego" }];


/*
  Diferenca entre var, let e const:

  - var: forma antiga de declarar variaveis. Tem escopo de funcao e pode ser redeclarada.
  - let: forma moderna para variaveis que podem mudar de valor. Tem escopo de bloco.
  - const: forma moderna para valores que nao serao reatribuidos. Tem escopo de bloco.
*/

var oldName: string = "Diego";
oldName = "Joao";

let currentAge: number = 25;
currentAge = 26;

const country: string = "Brasil";
// country = "Argentina"; // Erro: uma constante nao pode receber outro valor

// Exemplo de variavel com tipo union, que pode ser number ou boolean
let x: number | boolean;
x = 10; // x pode ser um numero
x = true; // x pode ser um booleano

let numero: number = 1;
let texto: string = "1";

// @ts-ignore
console.log(numero == texto); // true, porque o operador == faz conversao de tipos antes de comparar os valores
// @ts-ignore
console.log(numero === texto); // false, porque numero é do tipo number e texto é do tipo string