alert('Hoy es 20/08/2024')
console.log('Hola a todos!')

//------------------------------//
//----------ECMAScript----------//
//------------------------------//
//anterior
//var DEPRECADO!!!
var x = 10 //number
x = 18
x = '20/08/2024' //string
x = [] //array
x = {} //object
x = null
x = 100

//ES6(2015)
//let puede cambiar su valor
let y = 10
y = 30
//error: let no admite redeclaraciones
// let y = 35
//si le podemos cambiar el valor
y = 35
//const es de valor inmutable
//const no se le puede reasignar el valor
const a = 25
// a = 90
const b = 35

//------------------------------//
//----Programación funcional----//
//------------------------------//
//arrow function (función flecha)
function sumar () {
    const suma = a + b
    console.log('SUMA: ', suma)
}

//invocar la función
sumar()

const z = () => {
    const sumaZ = a + b
    console.log('SUMA: ', sumaZ)
}
z()

//parámetros a una función flecha
const nombre = "Juan Pablo!"
//template string -> comillas invertidas para poder pasar variables directamente
const xyz = (a) => console.log(`Tu nombre es: ${a}`)
//invocar una función flecha
xyz(nombre)

//scope -> rango de aplicación/alcance de un valor
//ej: var x toma el valor que esté dentro de la función por más que también esté declarada fuera del bloque
function restar () {
    var x = 60
    let y = 40
    const resta = x - y
    console.log('X: ', x)
    console.log('Y: ', y)
    console.log('RESTA: ', resta)
}

restar(

)

//redeclaración de la variable x, por lo que toma el último valor que es 101
var x = 101

console.log('B es igual a: ', b)
console.log('Y es igual a: ', y)
console.log('X es igual a: ', x)

//tipos de datos(dentro de comillas el tipo de dato que queremos comparar)
console.log(typeof(a))
console.log(typeof(b))
//acá esta comparando un bloque completo de código, por lo cual da "boolean" como tipo de dato
console.log(typeof(a === "number"))

// IGUALDAD ESTRICTA "===" -> estamos comparando tipo de dato y valor
// IGUALDAD "==" -> estamos comparando solo el valor

//------------------------------//
//---------Condicionales--------//
//------------------------------//
if(typeof(a) === "number" && typeof(b) === "number"){
    console.log("Se da la condición!")
} else{
    console.log("No se cumple la condición")
}

//una vez que la condición se cumple sale del condicional
if(typeof(a) === "numbr"){
    console.log("A")
} else if( typeof(b) === "numbe"){
    console.log("B")
}else if( typeof(y) === "nmber"){
    console.log("Y")
} else {
    console.log("No se cumple ninguna condición")
}

const estudiantes = {
    nombre: "Maria Gimenez",
    edad: 28,
    nota: 10
}
console.log('estudiantes: ', estudiantes)