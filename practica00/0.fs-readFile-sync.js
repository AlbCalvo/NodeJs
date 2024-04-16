const fs = require('node:fs')

console.log('leyendo archivo 1')
const text = fs.readFileSync('./archivo.txt', 'utf-8')
console.log('Datos del primer fichero: ', text)

console.log('--> Hacer otras cosas')

console.log('leyendo archivo 2')
const text2 = fs.readFileSync('./archivo2.txt', 'utf-8')
