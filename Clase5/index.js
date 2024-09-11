import fs from "fs";

//File System Sincronico
console.log("--------INICIO BLOQUE UNO---------");
function readFileSync() {
  const file = fs.readFileSync("doc-a.txt", "utf-8");
  console.log("File: ", file);
  const writeFile = fs.writeFileSync("doc-a.txt", "Sobreescribiendo Doc A...");
  const updateFile = fs.readFileSync("doc-a.txt", "utf-8");
  console.log("readFileSync con actualizaciones: ", updateFile);
  console.log("readFileSync sin actualizaciones: ", file);
}
readFileSync();
console.log("--------FIN BLOQUE UNO---------");

//Callbacks
//funcion que se pasa como parametro a otra para que sea invocada
function suma(a, b, cb) {
  //es una reservada que nos sirve para retornar algo, fuerza una respuesta
  return cb(a, b);
}
const operation = (a, b) => a + b;
console.log(suma(10, 20, operation));

//File System Asincrónico con Callbacks
//Callback Hell (anidación de callbacks) NOO!!!!
console.log("--------INICIO BLOQUE DOS---------");
function readFileCallback() {
  fs.readFile("doc-b.txt", "utf-8", (error, data) => {
    console.log("Ha ocurrido un error: ", error);
    console.log("Archivo B: ", data);

    fs.writeFile("doc-b.txt", "Sobreescribiendo Doc B...", (err) => {
      console.log("Error: ", err);

      fs.readFile("doc-b.txt", "utf-8", (err, data) => {
        console.log("Data doc B modificado: ", data);
        console.log("Error: ", err);

        fs.readFile("doc-b.txt", "utf-8", (err, data) => {
          console.log("Data doc B modificado: ", data);
          console.log("Error: ", err);

          fs.readFile("doc-b.txt", "utf-8", (err, data) => {
            console.log("Data doc B modificado: ", data);
            console.log("Error: ", err);

            fs.readFile("doc-b.txt", "utf-8", (err, data) => {
              console.log("Data doc B modificado: ", data);
              console.log("Error: ", err);

              fs.readFile("doc-b.txt", "utf-8", (err, data) => {
                console.log("Data doc B modificado: ", data);
                console.log("Error: ", err);
              });
            });
          });
        });
      });
    });
  });
}
readFileCallback();
console.log("--------FIN BLOQUE DOS---------");

//File System Asincrónico con Promesas
function myPromise(sucess) {
  return new Promise((resolve, reject) => {
    if (sucess) {
      resolve("Promesa resuelta!");
    } else {
      reject("La promesa no se pudo cumplir.");
    }
  });
}
//then, finally y catch siempre después de la invocación de la función que nos devuelve una promesa
myPromise(true)
  .then((result) => console.log("Caso de éxito de myPromise: ", result))
  .finally(() => console.log("Esto se retorna de todas formas."))
  .catch((err) => console.log("Caso de error en myPromise: ", err));

console.log("--------INICIO BLOQUE TRES---------");
function readFilePromises() {
  fs.promises
    .readFile("doc-c.txt", "utf-8")
    .then((res) => console.log("Resultado Bloque 3: ", res))
    .then(() => {
      //Fetch: para consumir datos de una API
      //podemos tener distintas operaciones dentro del .then
      const data = fetch("https://swapi.dev/api/people/1").then((res) =>
        console.log("RESPUESTA FETCH", res)
      );

      console.log("TYPEOF: ", typeof data);
      console.log("Data Bloque 3: ", data);

      function sarasa(data) {
        data.then((res) => console.log("Respuesta en función sarasa: ", res));
      }
      sarasa(data);

      return fs.promises.writeFile(
        "doc-c.txt",
        "Sobreescribiendo Doc C..."
      );
    })
    .catch((err) => console.log(err));
}
readFilePromises();
console.log("--------FIN BLOQUE TRES---------");

//File System Asincrónico con Async/Await
console.log("--------INICIO BLOQUE CUATRO---------");
async function readFileAsync() {
  //bloque try-catch nos permite manejar casos de éxito y error
  try {
    const file = await fs.promises.readFile("doc-d.txt", "utf-8");
    console.log("File doc D: ", file);
    const updateFile = await fs.promises.writeFile("doc-d.txt", "Sobreescribiendo Doc D...");
  } catch (error) {
    console.error("Error en el catch. ", error);
  }
}
readFileAsync();
console.log("--------FIN BLOQUE CUATRO---------");
