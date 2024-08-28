alert("Bienvenidos!")

function saludar() {
    console.log("Bienvenidos a TP2!")
}

saludar()

const a = "0"
const b = 0

//IGUALDAD: comparacion del valor
// console.log(a == b)
//IGUALDAD ESTRICTA: comparacion de valor y tipo de dato
// console.log(a === b)

//Objetos
//clave(propiedades)-valor
const estudiante = {
  nombre: "Juan Pablo",
  nota: 10,
  email: "juanpablolopez@gmail.com",
  telefono: 112000259698633
}
console.log('Nombre: ', estudiante.nombre)
console.log('Nota: ', estudiante.nota)
console.log("Propiedades estudiante antes: ", estudiante)

// function asignarTurno() {
//     estudiante.turno = "Noche"
//     console.log("Propiedades estudiante después: ", estudiante)
// }
// asignarTurno()

//Set Interval y Set Timeout
//Settimeout(delay) ejemplo
setTimeout(() => {
    console.log('Settimeout: ')
    estudiante.turno = "Noche"
    console.log("Propiedades estudiante después: ", estudiante)
}, 3000);

//Template Strings
//Comillas invertidas
//ALT + 96
//Ctrl +  Alt + }
//``
console.log(`Hola ${estudiante.nombre}! Tu nota es: ${estudiante.nota}`)
