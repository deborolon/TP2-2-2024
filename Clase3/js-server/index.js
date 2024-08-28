// const saludos = require("./app.js")
import saludos from "./app.js"

console.log('Esto es index.js')

const saludo = "Hola!"
const nombre = "Pepe"

console.log(`${saludo} ${nombre}`)

//Diferencia entre módulos de importación:
//"type": "commonjs" -> como método de exportación configurado en el package.json
// console.log(`TEST: `, saludos.saludar())
// console.log(`TEST: `, saludos.despedir())

//"type": "module" -> como método de exportación configurado en el package.json
console.log(`TEST: `, saludos.saludar())
console.log(`TEST: `, saludos.despedir())