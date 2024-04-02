const fs = require('node:fs')
console.log('Lectura del primer archivo:')
fs.readFile('./archivo.txt', 'utf-8', (err, text) => {
    console.log(text)
})
console.log('Hacer otras cosas *********** ')
console.log('Lectura del segundo archivo:')
fs.readFile('./archivo2.txt', 'utf-8', (err, text) => {
    console.log(text)
})

