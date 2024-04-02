// Importar funciones fileSystem
const fs = require('node:fs')
//Obtener información síncrona del archivo
const stats = fs.statSync('./archivo.txt')
console.log(
    stats.isFile(),
    stats.isDirectory(),
    stats.isSymbolicLink(),
    stats.size
)
