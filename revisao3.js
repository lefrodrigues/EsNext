//ES:8 Object.values/Object.entries
const obj = {a: 1, b:2, c: 3}
console.log(Object.values(obj))
console.log(Object.entries(obj))

//Melhorias na Notacao literal
const nome = 'Carla'
const pessoa = {
    nome,
    ola() {
        return 'oi gente!'
    }
}

console.log(pessoa.nome, pessoa.ola())

//Class
class Animal{}
class Cachorro extends Animal{
    falar() {
        return 'au, au!'
    }
}

console.log(new Cachorro().falar())