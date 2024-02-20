import { Router } from "express";
import { conductorController } from "../controllers/conductorController.js";

const router = Router()
router.get('/',(req, res)=>{
    res.send('conductor')
})

router.post('/add', conductorController)


export default router;