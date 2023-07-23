const axios = require("axios");
const cleanSingleDog = require("../helpers/cleanSingleDog");
const { API_KEY } = process.env;
const { Dog, Temperament } = require("../db");
const cleanDogFromDB = require("../helpers/cleanDogFromDB");

const getDogByIdController = async (id) => {
  const idNumber = Number(id);

  try {
    if (id.includes("-")) {
      const dogInDB = await Dog.findOne({
        where: { id: id },
        include: Temperament,
      });

      if (!dogInDB) {
        throw new Error("Perro no encontrado en la base de datos");
      }

      const dogWithTemperaments = cleanDogFromDB(dogInDB);
      return dogWithTemperaments;
    } else {
      const { data } = await axios.get(
        `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
      );

      const dogInApi = data.find((element) => element.id === idNumber);
      if (dogInApi) {
        const cleanedDog = cleanSingleDog(dogInApi);
        return cleanedDog;
      }
    }
  } catch (error) {
    console.log(error);
    throw new Error("Error en getDogByIdController");
  }
};

module.exports = { getDogByIdController };
