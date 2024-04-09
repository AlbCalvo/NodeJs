// Lectura de ambos ficheros en paralelo.

const { readFile } = require('node:fs/promises');
const { text } = require('stream/consumers');

Promise.all([
    readFile('./archivo.txt', 'utf-8'),
    readFile('./archivo2.txt', 'utf-8')
]).then(([text, secondText]) => {
    console.log('Primer archivo', text)
    console.log('Segundo archivo', secondText)
})
