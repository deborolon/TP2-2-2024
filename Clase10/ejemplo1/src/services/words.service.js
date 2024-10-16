import Factory from "../models/Factory.js"

class WordsService{

    constructor(){
        this.model = Factory.get("")
    }

    getWords = async () => {
        const words = await this.model.getWords()
        return words
      };
    
    postWords = async (data) => {
        const newWord = await this.model.postWords(data)
        return newWord
    };

    patchWords = async (id, data) => {
        const update = await this.model.patchWords(id, data)
        return update
    };
}

export default WordsService