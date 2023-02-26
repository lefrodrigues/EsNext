//operador ...Rest(juntar)/Spred (espalhar)
//usar rest como parametro de funcao

//usar spread com objeto
const funcionario = { nome:'Maria', salario: 12340.99}
const clone = {ativo: true, ...funcionario}
console.log(clone)

// usar spread com array
const grupoA = ['Joao', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal)