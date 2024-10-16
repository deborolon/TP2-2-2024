import WordsMemModel from "./DAO/words.models.mem.js"

class Factory{
    static get(persistencia){
        switch (persistencia) {
            case "MEM":
                console.warn("Persistencia en memoria del servidor.")
                return new WordsMemModel();
            default:
                console.warn("Persistencia en default.")
                return new WordsMemModel();
        }
    }
}

// class Factory{
//     static get(){
//         return new WordsMemModel();
//     }
// }

export default Factory