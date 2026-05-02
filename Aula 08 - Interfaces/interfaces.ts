/*
 * INTERFACES EM TYPESCRIPT
 * 
 * Interface: Define um contrato que descreve a estrutura de um objeto
 * Type: Define um tipo de dado (pode ser primitivo, união, interseção, etc.)
 */

// === EXEMPLO BÁSICO DE INTERFACE ===
interface Usuario {
    nome: string;
    idade: number;
    email: string;
}

const usuario: Usuario = {
    nome: "João",
    idade: 30,
    email: "joao@email.com"
};

console.log(usuario);

// === INTERFACE COM MÉTODOS ===
interface Animal {
    nome: string;
    idade: number;
    fazerSom(): void; // Método sem retorno
    comer(alimento: string): string; // Método com retorno
}

class Cachorro implements Animal {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    fazerSom(): void {
        console.log(`${this.nome} late: Au Au!`);
    }

    comer(alimento: string): string {
        return `${this.nome} está comendo ${alimento}`;
    }
}

const cachorro = new Cachorro("Rex", 3);
cachorro.fazerSom();
console.log(cachorro.comer("ração"));

// === INTERFACE COM PROPRIEDADES OPCIONAIS ===
interface Produto {
    id: number;
    nome: string;
    preco: number;
    descricao?: string; // Propriedade opcional
    desconto?: number; // Propriedade opcional
}

const produto1: Produto = {
    id: 1,
    nome: "Notebook",
    preco: 3500
};

const produto2: Produto = {
    id: 2,
    nome: "Mouse",
    preco: 150,
    descricao: "Mouse sem fio",
    desconto: 10
};

console.log(produto1);
console.log(produto2);

// === INTERFACE COM PROPRIEDADES DE LEITURA ===
interface ContaBancaria {
    readonly numero: string; // Apenas leitura
    titular: string;
    saldo: number;
}

const conta: ContaBancaria = {
    numero: "12345-6",
    titular: "Maria",
    saldo: 1000
};

// conta.numero = "54321-0"; // Erro! Não pode modificar readonly
conta.saldo = 1500; // OK! Pode modificar

// === HERANÇA DE INTERFACES ===
interface Veiculo {
    marca: string;
    modelo: string;
    ano: number;
}

interface Carro extends Veiculo {
    portas: number;
    arCondicionado: boolean;
}

const meuCarro: Carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022,
    portas: 4,
    arCondicionado: true
};

console.log(meuCarro);

// ======== DIFERENÇAS ENTRE INTERFACE E TYPE ========

/*
 * INTERFACE:
 * - Usada principalmente para definir a forma de objetos
 * - Suporta herança (extends)
 * - Pode ser extendida/adicionada posteriormente (declaration merging)
 * - Mais adequada para contratos de classes (implements)
 * - Não pode representar tipos primitivos diretamente
 * 
 * TYPE:
 * - Mais flexível, pode representar qualquer tipo de dado
 * - Suporta uniões (|) e interseções (&)
 * - Não suporta herança, mas usa interseção para similar
 * - Não pode ser extendida após declaração
 * - Pode representar tipos primitivos, unions, tuples, etc.
 */

// === EXEMPLOS DE TYPE (COISAS QUE INTERFACE NÃO FAZ) ===

// Type com união (interface não faz isso)
type Status = "ativo" | "inativo" | "pendente";

// Type com tipos primitivos
type ID = string | number;

// Type com tupla
type Coordenadas = [number, number];

// Type complexo com uniões
type RespostaAPI = 
    | { sucesso: true; dados: any }
    | { sucesso: false; erro: string };

const status: Status = "ativo";
const id: ID = "12345";
const coords: Coordenadas = [10, 20];

const respostaSucesso: RespostaAPI = {
    sucesso: true,
    dados: { nome: "Produto X" }
};

const respostaErro: RespostaAPI = {
    sucesso: false,
    erro: "Erro de conexão"
};

console.log("Diferenças demonstradas com sucesso!");