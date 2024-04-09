// Al llegar al await se detiene la ejecución 
// del hilo hasta leerse todo el fichero

const { readFile } = require('node:fs/promises');
(
    async () => {
        console.log('Leyendo el primer archivo')
        const text = await readFile('./archivo.txt', 'utf-8')
        console.log('primer archivo', text)

        console.log('Leyendo el segundo archivo')
        const secondText = await readFile('./archivo2.txt', 'utf-8')
        console.log('segundo archivo', secondText)
    }
)()