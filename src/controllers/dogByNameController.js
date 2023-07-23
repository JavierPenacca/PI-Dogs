const axios = require("axios");
const cleanSingleDog = require("../helpers/cleanSingleDog");
const { Dog, Temperament } = require("../db");
const { Op } = require("sequelize");
// const { API_KEY } = process.env;
const cleanDogFromDB = require("../helpers/cleanDogFromDB");

const dogByNameController = async (name) => {
  const filteredName = name.replace(/-/g, " ");
  try {
    const dogInDB = await Dog.findAll({
      where: {
        name: { [Op.iLike]: `%${filteredName}%` },
      },
      include: Temperament,
    });

    if (dogInDB.length !== 0) {
      const cleanedDogs = dogInDB.map((dog) => cleanDogFromDB(dog));
      return cleanedDogs;
    }

    const { data } = await axios.get(`https://api.thedogapi.com/v1/breeds`);

    const dogInApi = data.find((element) => {
      return element.name.toLowerCase().includes(filteredName.toLowerCase());
    });

    if (dogInApi !== undefined) {
      const cleanedDog = cleanSingleDog(dogInApi);
      return [cleanedDog];
    }

    throw new Error("No se encontro ninguna raza con ese nombre");
  } catch (error) {
    console.log(error);
    throw new Error("Error en dogByNameController/ perro no encontrado");
  }
};

module.exports = { dogByNameController };
