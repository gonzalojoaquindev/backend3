import { usuariosModelo } from "./models/usersModel.js";

export class UsersMongoDAO {
    static async getBy(filtro = {}) {
        console.log(filtro)
        return await usuariosModelo.findOne(filtro).lean()
    }

    static async create(usuario) {
        console.log("ejecutando DAO de usuarios", usuario)
        return await usuariosModelo.create(usuario)
    }
}