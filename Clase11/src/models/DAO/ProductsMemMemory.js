class ProdMemModel{
    constructor(){
        this.prod = [
            { id: 1, name: "Escritorio", price: 120000 },
            { id: 2, name: "Mesa", price: 90000 },
            { id: 3, name: "Velador", price: 15000 }
        ]    
    }

    getProd = async () => {
        return this.prod
    }
    
    postProd = async (data) => {
        data.id = this.prod[this.prod.length -1].id +1
        this.prod.push(data)
        return data
    }

    patchProd = async (id, data) => {
        try {
            const index = this.prod.findIndex((e) => e.id == id)
            if(index == -1) throw new Error("El índice no existe.")
            const updateProd = {...this.prod[index], ...data}
            this.prod.splice(index, 1, updateProd)
            return updateProd
        } catch (error) {
            console.error("La actualización parcial de productos no se pudo completar.")
        }
    }

    putProd = async (id, data) => {
        try {
            const index = this.prod.findIndex((e) => e.id == id)
            if(index == -1) throw new Error("El índice no existe.")
            const updateProd = {...this.prod[index], ...data}
            this.prod.splice(index, 1, updateProd)
            return updateProd
        } catch (error) {
            console.error("La actualización total de productos no se pudo completar.")
        }
    }

    deleteProd = async (id) => {
        const index = this.prod.findIndex((e) => e.id == id)
        if(index == -1){
            throw new Error("El índice no existe.")
        } else{
            this.prod.splice(index, 1)
            return "El producto se eliminó correctamente."
        }
    }

}

export default ProdMemModel