//1

let numbers = [1,2,3,4,5,6,7,8,9,10];

let soma = numbers.reduce((a,b)=> a+b);

console.log(soma);

let matrix = numbers.map(a => a / soma );

console.log(matrix);

//2

let prog = ['Python', 'JavaScript', 'Java', 'C++', 4];

let maior = prog.filter(a => a.length > 4);

console.log(maior);

//3

let alunos = [
    {
        nome: 'Pedroca',
        nota: 0
    },

    {
        nome: 'Alvar',
        nota: 4
    },

    {
        nome: 'Alberto',
        nota: 8
    },   

    {
        nome: 'Wilbert',
        nota: 10
    }, 
];

let nomes = alunos.map( a => a.nome);

let ordAlfa = nomes.sort();
console.log(ordAlfa);

let notas = alunos.map( a => a.nota);

let ordNum = notas.sort((a,b)=> a-b);

console.log(ordNum);

