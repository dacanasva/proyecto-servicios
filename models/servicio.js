const {Schema, model } = require('mongoose')

const ServicioSchema = ({
    nombre:{
        type: String,
        unique:true,
        required:[true, 'El nombre de servicio es requirido']
    },

    categoria:{
        type:String,
        required:[true, 'El rol es requerido'],
        enum:['educacion', 'apoyo economico'],
    },

    fecha: {
        type:String,
        required:[true, 'La fecha del servicio es requerida'],
    },
    informacion:{
        type: String,
        
        required:[true, 'El informacion de servicio es requirido']
    },
    requisitos:{
        type: String,
        
        required:[true, 'El requisitos de servicio es requirido']
    },

    estado: {
        type:Boolean,
        default:true
    },
    preciodolar:{
        type:Number,
        required:[true, 'El precio del dolar es requirido']
    }

})

module.exports = model('Servicio', ServicioSchema)
