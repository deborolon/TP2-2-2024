//importación de módulos
//common JS
const fs = require("fs")

console.log("Holaaaaaaaaaaa")

//Array
const miArray = [1, 2, 3, 4, 9]
const miArray2 = [6, 7, 8, 9]
console.log("Mi Array: ", miArray.length)
//añadimos el 5 al array
miArray.push(5)
console.log("Mi Array después de añadir un elemento: ", miArray.length)
console.log(miArray)
//estoy buscando la posición en el array de ese valor
console.log("IndexOF: ", miArray.indexOf(1))
console.log("IndexOF: ", miArray.indexOf(5))
//eliminamos el primer elemento del array
miArray.shift()
//añadimos un elemento al principio
miArray.unshift(199)
console.log("Mi Array modificado: ", miArray)

//Objetos
//las claves son un identificador, por lo tanto no se repite
const miObj = {a: 1, b: 2, c: 3, d: 4, a: 1999, a: 0}
const miObj2 = {g: 9888, h: 81, i: 100, j: 7854, a: 3}
//añadir claves/valor al objeto
miObj.e = 5
miObj["f"] = 6 
console.log("miObj: ", miObj)
console.log("miObj2: ", miObj2)
//me traigo solo valores del objeto
console.log("Object Values: ", Object.values(miObj))
//me traigo solo las claves
console.log("Object Keys: ", Object.keys(miObj))

//Desestructuring Object - Desestructuracion de Objetos
//Array
const desestructuringArrays = [...miArray, ...miArray2]
const desestructuringArrays2 = [miArray, ...miArray2]
const desestructuringArrays3 = [miArray, miArray2]
console.log("desestructuringArrays: ", desestructuringArrays)
console.log("desestructuringArrays2: ", desestructuringArrays2)
console.log("desestructuringArrays3: ", desestructuringArrays3)

//"..." -> spread operator para expandir los elementos, propagarlos, fusionarlos, etc

//Objetos
const desestructuringObj = {...miObj, ...miObj2}
const desestructuringObj2 = {miObj, ...miObj2}
console.log("desestructuringObj: ", desestructuringObj)
console.log("desestructuringObj2: ", desestructuringObj2)

//Array de objetos con datos
const misDatos = [
    {nombre: "Maria Luisa", nota: 10, email: "marialuisa@gmail.com"},
    {nombre: "Juan Pablo", nota: 9, email: "juanpablo@gmail.com"},
    {nombre: "Santiago", nota: 8, email: "santiago@gmail.com"}
]

const misDatosFiltrados = misDatos.filter((element) => element.nota == 10)
console.log("misDatosFiltrados: ", misDatosFiltrados)
console.log("misDatos: ", misDatos)
const misDatosMapeados = misDatos.map((elem) => elem.nota == 8)
console.log("misDatosMapeados: ", misDatosMapeados)

//Procesos sincrónicos: hay que esperar para que el hilo de ejecución continúe (bloqueante)
//Procesos asincrónicos: no hay que esperar una respuesta (no bloqueante)

//File System Sincronico
console.log("--------INICIO---------")

const file = fs.readFileSync("doc.txt", "utf-8")
console.log("File: ", file)
const writeFile = fs.writeFileSync("doc.txt", "Sobreescribir mi archivo!")
const updateFile = fs.readFileSync("doc.txt", "utf-8")
console.log("newUpdate: ", updateFile)
console.log("File después: ", file)

console.log("--------FIN---------")

function tp(a, b){
    //solucion del ejercicio
}

//invocar para ver el resultado
tp()

//funcion flecha
const miFuncion = (a, b) => {
    //solucion a mi problema
}

//invocar para ver el resultado
miFuncion()