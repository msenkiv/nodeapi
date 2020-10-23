
const {getAstralMapByUserData} = require('../services/AstrologicoApiService')

// CONTROLLER VAI FAZER A LOGICA DE TRATAMENTO DE DADOS DO QUE PRECISA SER ENVIADO PARA O SERVICE
const AstralMapController = (req, res) =>{
    console.log('AQUI')

    const response = getAstralMapByUserData(req.body)
    res.json({message:"ok"})
}

module.exports ={
    AstralMapController
}