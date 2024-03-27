const os = require('node:os')



console.log('Información del sistema operativo:')
console.log('----------------------------------')
console.log('Nombre del SO: ', os.platform())
console.log('Versión del so: ', os.release())
console.log('Arquitectura: ', os.arch())
console.log('CPUs: ', os.cpus())
console.log('Memoria libre', os.freemem() / 1024 / 1024)
console.log('Memoria total', os.totalmem() / 1024 / 1024)
//Cuántos días lleva el pc encendido
console.log('uptime', os.uptime() / 60 / 60)
