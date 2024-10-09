class UserMemModel {
    constructor(){
        //Inicializar instancias de clase
        this.users = [
            {id: 1, nombre: "Pablo"},
            {id: 2, nombre: "Juan"},
            {id: 3, nombre: "Melisa"},
            {id: 4, nombre: "Daiana"},
            {id: 5, nombre: "Micaela"}
        ]
    }
    //Métodos de la clase
    getAllUsers = async () => {
        return await this.users
    } 
}

export default UserMemModel