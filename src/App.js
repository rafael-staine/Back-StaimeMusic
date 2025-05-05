import express from 'express'
import dotenv from 'dotenv'
import homeRouter from './routers/Home.Routes.js'

dotenv.config()

class App {
    constructor() {
        this.app = express()
        this.middlewares()
        this.routes()
    }

    middlewares() {
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: true }))
    }

    routes() {
        this.app.use('/', homeRouter)
    }
}

export default new App().app
