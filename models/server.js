import {  dbConnection} from "../config/database.js";
import express from "express";
import cors from "cors";

import conductorRoute from "../routes/conductor.js";
import gerenteRoute from "../routes/gerente.js";
export class Server {
    constructor() {
        this.app = express();
        this.middleWares();
        this.connectToDb();
        this.routes();
    }

middleWares(){
    this.app.use(express.json())
    this.app.use(cors())
}
    async connectToDb() {
        return dbConnection()
    }

    routes(){
        this.app.use('/conductor', conductorRoute)
        this.app.use('/gerente', gerenteRoute)
    }

    listen() {
        this.app.listen(4000, ()=>{
            console.log('Listen in port 4000')
        })
    }

}


