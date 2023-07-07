const { Dog, Temperament } = require('../db');
const { Op } = require("sequelize");
const axios = require('axios');
require('dotenv').config();
const { cleanDogs } = require("../helpers/cleanDogs")
const {
    DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;

const getAllDogs = async () => {
    const dogsFromDB = await Dog.findAll();
    const { data } = await axios.get('https://api.thedogapi.com/v1/breeds/');
    console.log(data);
    const dogsFromAPI = cleanDogs(data);
    console.log(data);

    // Combinar resultados de la API y la base de datos
    return [...dogsFromDB, ...dogsFromAPI];
};

const getDogById = async (id) => {
    //traemos un perro por ID diferenciando si es de la api o la db
    if (isNaN(id)) {
        const dogID = await Dog.findByPk(id);
        return dogID;
    }
    const dogID = (
        await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${id}`)
    ).data;

    return dogID;
};

const getDogsByName = async (name) => {
    if (name) {
        const dogName = await Dog.findAll({
            limit: 4,
            where: {
                name: { [Op.iLike]: "%" + name + "%" },
            },
        });
        return dogName;
    };
};

const createDog = async (
    name,
    image,
    life_span,
    height,
    weight,
    temperament,
) => {
    // const {
    //     name,
    //     image,
    //     life_span,
    //     height,
    //     weight,
    //     temperament,
    // } = req.body;
    // Crear la raza de perro en la base de datos
    const dogNew = await Dog.create({
        name,
        image,
        life_span,
        height,
        weight,
        temperament,
    });
    return dogNew;
};

// // Relacionar la raza de perro con los temperamentos indicados
// if (temperaments && temperaments.length > 0) {
//     const temperaments = await Temperament.findAll({
//         where: {
//             id: temperaments,
//         },
//     });

//     await dogNew.setTemperaments(temperaments);
// }
const deleteDog = async (id) => {
    await Dog.destroy({
        where: { id },
    });
};

module.exports = {
    getAllDogs,
    getDogById,
    getDogsByName,
    createDog,
    deleteDog,
};