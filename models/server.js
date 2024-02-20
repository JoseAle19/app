import {  dbConnection} from "../config/database.js";
import express from "express";
import cors from "cors";

export class Server {
    constructor() {
        this.app = express();
        this.connectToDb();
        this.middleWarws()
    }

middleWarws(){
    this.app.use(cors())
}
    async connectToDb() {
        return dbConnection()
    }

    listen() {
        this.app.listen(4000, ()=>{
            console.log('Listen in port 4000')
        })
    }

}


