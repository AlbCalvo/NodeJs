const http = require('node:http')
/* Creamos un servidor que stará a la escucha - Nº de puerto fijo -  
const http = require('node:http')
// Servidor
const server = http.createServer((req, res) => {
    console.log('petición recibida.')
    res.end('Esta es la respuesta 2')
})
//Escuchor a la escucha.
server.listen(1234, () => {
    console.log('Servidor escuchando en el puerto 1234')
})
*/
// Llamada a una función que retorne el primer puerto libre.
const server = http.createServer((req, res) => {
    console.log('petición recibida.')
    res.end('Muy buenas.')
})

server.listen(0, () => {
    console.log('Servidor escuchando en el puerto ', server.address().port)
})