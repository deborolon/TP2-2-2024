console.log("Hola, esto es un ejemplo!")

async function consultaDePalabras() {
    const data = await fetch("https://texto.deno.dev/palabras?cantidad=10")
    console.log("Datos con async/await: ", data)
}

consultaDePalabras()

function consultaDePalabrasSinAsync() {
    const data = fetch("https://texto.deno.dev/palabras?cantidad=10")
                    .then((res) => console.log("Respuesta dentro del bloque then: ", res))
    console.log("Datos sin async/await: ", data)
}

consultaDePalabrasSinAsync()