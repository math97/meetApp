import express from 'express'
import routes from './routes'

class App{
    constructor(){
        const server = express();
        this.routes()
    }
    routes(){
        this.server.use(routes)
    }
    middlewares(){
        this.server.use(express.json())
    }

}

export default new App().server