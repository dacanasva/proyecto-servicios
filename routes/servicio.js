const {Router} = require('express')

const route = Router()

//Listar todos los datos
const {getServicio, postServicio, putServicio, deleteServicio} = require('../controllers/servicio') //Importando el controlador

route.get('/', getServicio)

route.post('/', postServicio)

route.put('/', putServicio)

route.delete('/', deleteServicio)

module.exports = route