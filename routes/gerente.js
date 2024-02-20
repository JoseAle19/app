import { Router } from "express";
import { gerenteControllerList } from "../controllers/gerenteController.js";

const router = Router()
router.get('/',(req, res)=>{
    res.send('gerente')
})

router.get('/list', gerenteControllerList)


export default router;