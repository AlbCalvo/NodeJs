const fs = require('node:fs')

/*
console.log('Lectura fichero: ')
fs.readFile('./archivo.txt', 'utf-8', (err, text) => {
    console.log(text)
})
*/
/*---------------------------
     Leer todo el archivo
---------------------------*/
// Con una instrucción.
//const leerFile = fs.readFileSync('./archivo2.txt', 'utf-8')
//console.log(leerFile)

// Utilizando una función.
function leeTodoArchivo(ficheroALeer) {
    return fs.readFileSync(ficheroALeer, 'utf-8')
}

module.exports = {
    leeTodoArchivo
}
