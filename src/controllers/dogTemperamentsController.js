const axios = require("axios");
const { Temperament } = require("../db");
const cleanTemper = require("../helpers/cleanTemper");
// const { API_KEY } = process.env;

const dogTemperamentsController = async (req, res) => {
  try {
    const temperInDB = await Temperament.findAll();
    if (temperInDB.length > 0) return temperInDB;

    const { data } = await axios.get(`https://api.thedogapi.com/v1/breeds`);

    const temperFromApi = await cleanTemper(data);
    await Temperament.bulkCreate(temperFromApi);
    return temperFromApi;
  } catch (error) {
    console.log(error);
    throw new Error("Error de dogTemperamentsController");
  }
};

module.exports = { dogTemperamentsController };
