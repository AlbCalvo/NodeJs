import { arch, cpus, freemem, platform, release, totalmem, uptime } from 'node:os'

console.log('Información del sistema operativo:')
console.log('----------------------------------')
console.log('Nombre del SO: ', platform())
console.log('Versión del so: ', release())
console.log('Arquitectura: ', arch())
console.log('CPUs: ', cpus())   //Nº de procesadores de nuestro ordenador.
console.log('Memoria libre', freemem() / 1024 / 1024)
console.log('Memoria total', totalmem() / 1024 / 1024)
//Cuántos días lleva el pc encendido
console.log('uptime', uptime() / 60 / 60) //Cuantos días lleva el ordenador encendido en horas.
