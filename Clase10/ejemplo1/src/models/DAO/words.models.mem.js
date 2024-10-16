class WordsMemModel{
    constructor(){
        this.words = [
            { id: 1, palabra: "Hola" },
            { id: 2, palabra: "que" },
            { id: 3, palabra: "tal" }
        ]    
    }

    getWords = async () => {
        //Ejemplo 1
        let str = ""
        const res = this.words.reduce((acumulador, proxElemento) => acumulador + proxElemento.palabra + " ", str)
        //Ejemplo 2
        // let str = ""
        // this.words.forEach((word) => str += word.palabra + " ")
        //Ejemplo 3
        // const words = this.words.map((e) => { return e.palabra })
        // const result = words.join(" ")
        return res
      };
    
    postWords = async (data) => {
        data.id = this.words[this.words.length -1].id +1
        this.words.push(data)
        return data
    };

    //modificación parcial
    patchWords = async (id, data) => {
        try {
            const index = this.words.findIndex((e) => e.id == id)
            if(index == -1) throw new Error("El índice no existe.")
            //console.log("el indice del elemento en this.words: ", this.words[index])
            const obj = {...this.words[index], ...data}
            this.words.splice(index, 1, obj)
            return obj
        } catch (error) {
            console.error("Ha ocurrido un error en la operación.")
        }
    }

}

export default WordsMemModel