import BarModel from "../models/barcode.js";

export const conductorController = async (req, res) => {
    const { code } = req.body;

    // Existe el codigo de barras
    const existCode = await BarModel.findOne({ code });
    if (existCode) {
        return res.status(400).json({
            status: false,
            message: 'Ya existe el codigo de barras'
        })

    }

    if (!code) {
        return res.status(400).json({
            status: false,
            message: 'Codigo de barras es necesario'
        })
    }
    else {
        const newbarCode = new BarModel({ code, description: 'des' })
        newbarCode.save()


        //status code 201 = creado
        return res.status(200).json({
            status: true,
            message: 'Codigo de barras guardado'

        })
    }
}