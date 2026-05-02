/*
 * TIPOS DE FUNÇÕES EM TYPESCRIPT
 * 
 * - Funções tradicionais: declaração padrão com nome e parâmetros tipados
 * - Parâmetros opcionais: definidos com ? após o nome
 * - Parâmetros com valor padrão: atribuídos diretamente na declaração
 * - Funções anônimas: sem nome, atribuídas a variáveis
 * - Arrow functions: sintaxe simplificada com =>
 * - Rest parameters: capturam múltiplos argumentos em um array (...parametros)
 */

function printHello(): void {
    console.log("Hello, World!");
}

function sum(a: number, b: number): number {
    return a + b;
}

function add(a: number, b: number, c?: number) { // O parâmetro 'c' é opcional
  return a + b + (c || 0); // Se 'c' não for fornecido, ele será tratado como 0
}

function pow(value: number, exponent: number = 10) { // O parâmetro 'exponent' tem um valor padrão de 10
  return value ** exponent;
}

let multiply = function (a: number, b: number): number { // Função anônima atribuída a uma variável
    return a * b;
}
multiply(2, 3); // Retorna 6

let addNumbers = (a: number, b: number): number => a + b; // Função de seta (arrow function)
addNumbers(5, 7); // Retorna 12

function x (...numeros: number[]) { // Rest paramenter
    console.log(numeros)
}
x(1,2)
x(1,2,3,4,5,7,8,9,10)