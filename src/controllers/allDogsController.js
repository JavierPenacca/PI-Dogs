const axios = require("axios");
const cleanDogs = require("../helpers/cleanDogs");
const { Dog, Temperament } = require("../db");
// const { API_KEY } = process.env;

const allDogsController = async () => {
  try {
    const dogsInDB = await Dog.findAll({
      include: Temperament,
    });

    const { data } = await axios.get(`https://api.thedogapi.com/v1/breeds`);
    const dogsInApi = cleanDogs(data);

    const dogsInDBWithTemperament = dogsInDB.map((dog) => ({
      ...dog.toJSON(),
      temperament: dog.temperaments.map((t) => t.name).join(", "),
    }));

    return [...dogsInDBWithTemperament, ...dogsInApi];
  } catch (error) {
    console.log(error);
    throw new Error("Error en allDogsController");
  }
};

module.exports = { allDogsController };
