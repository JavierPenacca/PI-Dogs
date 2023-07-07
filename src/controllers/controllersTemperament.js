const axios = require('axios');
const { Temperament } = require('../db');

const getTemperaments = async () => {
  // Hacer la solicitud a la API para obtener los temperamentos
  const response = await axios.get('https://api.thedogapi.com/v1/breeds/');

  response.data.forEach((dog) => {
    if (dog.temperament) {
      let temperaments = dog.temperament.split(", ");
      temperaments.forEach((dogTemp) => {
        Temperament.findOrCreate({
          where: { name: dogTemp },
        });
      });
    }
  });
  const tempsFound = await Temperament.findAll();
  return tempsFound;
};

module.exports = getTemperaments