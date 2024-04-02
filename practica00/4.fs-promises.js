const fs = require('node:fs/promises')

console.log('Lectura del primer archivo:')

fs.readFile('./archivo.txt', 'utf-8')
    .then(text => {
        console.log('Primer texto: ', text)
    })

console.log('Hacer otras cosas *********** ')

console.log('Lectura del segundo archivo:')

fs.readFile('./archivo2.txt', 'utf-8')
    .then(text => {
        console.log('Segundo texto: ', text)
    })
