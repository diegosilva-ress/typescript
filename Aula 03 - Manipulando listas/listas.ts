let numeros: number[] = [1, 2, 3, 4, 5];
console.log(numeros);
console.log(numeros.indexOf(3)); // Retorna o indice do numero 3
console.log(numeros.length); // Retorna o tamanho da lista
numeros.pop(); // Remove o ultimo elemento da lista, remove do topo igual uma pilha
console.log(numeros);
numeros.push(6); // Adiciona um elemento no final da lista, adiciona no topo igual uma pilha
console.log(numeros);
numeros.shift(); // Remove o primeiro elemento da lista, remove do inicio igual uma fila
console.log(numeros);
numeros.unshift(0); // Adiciona um elemento no inicio da lista, adiciona no inicio igual uma fila
console.log(numeros);
numeros.splice(2, 1); // Remove o elemento do indice 2
console.log(numeros);
numeros.splice(2, 0, 10); // Adiciona o numero 10 no indice 2
console.log(numeros);


//Tupla em TypeScript é um array com tamanho e tipos definidos em posições específicas.
let pessoa: [string, number] = ["Diego", 25];
console.log(pessoa);
console.log(pessoa[0]); // Acessa o primeiro elemento da tupla
console.log(pessoa[1]); // Acessa o segundo elemento da tupla
