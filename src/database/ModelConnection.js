import sequelize, { Sequelize } from 'sequelize'
import databaseConfig from '../config/Database.js'
import Usuario from '../models/Usuario.js'

const models = [Usuario]
class ModelConnection {
    constructor() {
        this.init()
    }

    init() {
        this.connection = new Sequelize(databaseConfig)
        models
            .map(model => model.init(this.connection))
            .map(model => model.associate && model.associate(this.connection.models))
    }
}

export default new ModelConnection()
