//Base de datos local:
//const STRC = "mongodb://127.0.0.1"
//Base de datos en la nube:
//si no se hay acceso al .env o al puerto 8080 se accede al 8081
const PORT = process.env.PORTDEV || 8081
const STRC = process.env.STRCDEV
const NAMEBASE = process.env.NAMEBASEDEV
//si la persistencia del punto env no se detecta, se utiliza la persistencia en default
const PERSISTENCE = process.env.PERSISTENCEDEV || ""

export default {
    PORT,
    STRC,
    NAMEBASE,
    PERSISTENCE
}