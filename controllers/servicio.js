const { response } = require('express');

const Servicio = require('../models/servicio');

const getServicio = async (req, res) => {
    try {
        const servicios = await Servicio.find(); // Corrected method name
        res.json({
            msg: servicios
        });
    } catch (error) {
        res.status(500).json({
            msg: 'Internal Server Error',
            error: error.message
        });
    }
};

const postServicio = async (req, res) => {
    const datos = req.body; // Capturar datos de la url-postman
    let mensaje = 'Inserción exitosa';
    try {
        const servicio = new Servicio(datos); // Instanciar el objeto
        await servicio.save(); // Guardar en la base de datos
        console.log(servicio);
    } catch (error) {
        mensaje = error;
        console.log(error);
    }
    res.json({
        msg: mensaje
    });
};

const putServicio = async (req, res) => {
    const { nombre, categoria, fecha, informacion, requisitos, estado, preciodolar } = req.body; // Desestructurar
    let mensaje = '';
    try {
        const servicio = await Servicio.findOneAndUpdate(
            { nombre: nombre },
            { categoria: categoria, fecha: fecha, informacion: informacion, requisitos: requisitos, estado: estado, preciodolar:preciodolar }
        );
        mensaje = 'Actualización exitosa';
    } catch (error) {
        mensaje = error;
    }
    res.json({
        msg: mensaje
    });
};

const deleteServicio = async (req, res) => {
    const { nombre } = req.body; // Desestructurar
    let mensaje = '';
    try {
        const servicio = await Servicio.findOneAndDelete({ nombre: nombre });
        mensaje = 'Eliminación exitosa';
    } catch (error) {
        mensaje = error;
    }
    res.json({
        msg: mensaje
    });
};

module.exports = {
    getServicio,
    postServicio,
    putServicio,
    deleteServicio
};
