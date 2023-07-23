const { Dog, Temperament } = require("../db");

const postDogController = async (
  name,
  image,
  height,
  weight,
  lifeSpan,
  temperament,
  res
) => {
  try {
    if (!name || !image || !height || !weight || !lifeSpan || !temperament) {
      return res.status(400).json({ error: "Falta informacion obligatoria" });
    }
    const [createdDog, created] = await Dog.findOrCreate({
      where: { name },
      defaults: {
        name,
        image,
        height,
        weight,
        lifeSpan,
      },
    });
    if (!created) {
      return res.status(400).json({ error: "El perro ya existe en nuestra base de datos." });
    }
    const temperamentPromises = temperament.map(async (temp) => {
      const findTemperament = await Temperament.findOne({
        where: {
          name: temp,
        },
      });

      return createdDog.addTemperament(findTemperament);
    });

    await Promise.all(temperamentPromises);
  } catch (error) {
    console.log(error);
    throw new Error("Error al postear el perro");
  }
};
module.exports = { postDogController };
