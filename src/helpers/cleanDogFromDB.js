const cleanDogFromDB = (dog) => {
  const { temperaments, ...cleanedDog } = dog.toJSON();
  const temperament = temperaments
    .map((temperament) => temperament.name)
    .join(", ");
  return {
    ...cleanedDog,
    temperament,
  };
};

module.exports = cleanDogFromDB;
