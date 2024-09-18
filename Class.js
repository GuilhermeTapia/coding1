var prompt = require('prompt-sync')();

let nome = prompt("Qual o seu nome?")
let turma = prompt("Qual a sua turma?")
let idade = prompt("Qual a sua idade?")
let horario = prompt("Qual o seu horário de aula?")

console.log(`Bem vindo a faculdade Senac, ${nome}!`);
console.log(`Sua turma é ${turma}.`);
console.log(`Você tem ${idade} anos.`);
console.log(`Sua aula inicia às ${horario} horas.`);