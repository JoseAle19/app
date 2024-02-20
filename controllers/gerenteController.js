import Barcode from "../models/barcode.js"



export const gerenteControllerList = async (req, res) => {
    const listCodes = await Barcode.find()

    res.status(200).json({
        status:true,
        message:'Codigo de barras',
        data: listCodes
    })
 }