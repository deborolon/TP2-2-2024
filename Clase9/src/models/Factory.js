import UserFsModel from "./DAO/users.model.fs.js";
import UserMemModel from "./DAO/users.model.mem.js";

class Factory{
    static get(persistence){
        switch (persistence) {
            case "MEM":
                console.log("Persistiendo en la memoria del Servidor.")
                return new UserMemModel();
            case "FS":
                //puedo tener más logica relacionada aquí
                console.log("Persistiendo en la memoria de File System.")
                return new UserFsModel();
                break;
                // break y return son cortes, para que no siga el switch
            default:
                console.log("Persistiendo en la memoria por default.")
                return new UserMemModel();
        }
    }
}

export default Factory