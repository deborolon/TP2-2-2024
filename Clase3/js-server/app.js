
function saludar() {
    console.log("Este es el inicio de mi servidor Node.js!!!")
}

function despedir() {
    console.log("Este es el final de mi servidor Node.js!!!")
}

//"type": "commonjs" -> como método de exportación configurado en el package.json

// module.exports = {
//     saludar, despedir
// }

//"type": "module" -> como método de exportación configurado en el package.json
export default {
    saludar, despedir
}