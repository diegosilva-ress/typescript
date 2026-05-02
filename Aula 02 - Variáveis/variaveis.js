"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
let isActive = true;
let hasPermission = false; // TypeScript infere o tipo booleano a partir do valor atribuído
let decimal = 6;
let hex = 0xf00d;
let binary = 0b1010;
let octal = 0o744;
let float = 3.14;
let color = "blue";
let fullName = `John Doe`;
let age = 30;
let sentence = `My name is ${fullName} and I am ${age} years old.`;
let numeros = [1, 2, 3, 4, 5];
let frutas = ["apple", "banana", "orange"];
let anything = ["texto", 10, true, { nome: "Diego" }];
/*
  Diferenca entre var, let e const:

  - var: forma antiga de declarar variaveis. Tem escopo de funcao e pode ser redeclarada.
  - let: forma moderna para variaveis que podem mudar de valor. Tem escopo de bloco.
  - const: forma moderna para valores que nao serao reatribuidos. Tem escopo de bloco.
*/
var oldName = "Diego";
oldName = "Joao";
let currentAge = 25;
currentAge = 26;
const country = "Brasil";
// country = "Argentina"; // Erro: uma constante nao pode receber outro valor
//# sourceMappingURL=variaveis.js.map