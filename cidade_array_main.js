const readlineSync = require('readline-sync')
const Cidade = require('./cidade_class')

console.log('---------------------------------------------')
console.log('    Dados da cidade e População     ')
console.log('---------------------------------------------')

let nome = readlineSync.question('Digite seu nome: ')
let estado = readlineSync.question('Digite o nome do seu estado: ')
let numPopulacao = readlineSync.question('Digite o numero de habitantes: ')
let numHomens = readlineSync.question('Digite o numero de homens na cidade: ')
let numMulheres = readlineSync.question('Digite o numero de Mulheres da cidade: ')

const cidade1 = new Cidade(nome,estado,numPopulacao,numHomens,numMulheres)

let homensPercentual = cidade1.percetualHomens()
let mulheresPercentual = cidade1.percentualMulheres()

console.log('---------------------------------------------')
console.log('    Resultado sobredados da Cidade    ')
console.log('---------------------------------------------')
console.log(`O percentual de homens é ${mulheresPercentual} de ${numPopulacao} habitantes`)
console.log(`O percentual de homens é ${homensPercentual} de ${numPopulacao} habitantes`)
console.log('---------------------------------------------')