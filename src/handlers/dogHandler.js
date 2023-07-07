const {
  getAllDogs,
  getDogById,
  getDogsByName,
  createDog,
  deleteDog,
} = require('../controllers/controllersDogs');

const getAllDogsHandler = async (req, res) => {
  try {
    const allDogs = await getAllDogs();
    return res.status(200).send(allDogs);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const getDogByIdHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const dogId = await getDogById(id);
    return res.status(200).send(dogId);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const getDogsByNameHandler = async (req, res) => {
  const { name } = req.query;
  try {
    const dogs = await getDogsByName(name);
    return res.status(200).send(dogs);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const createDogHandler = async (req, res) => {
  const {
    name,
    image,
    life_span,
    height,
    weight,
    temperament,
  } = req.body;
  try {
    const dogNew = await createDog(
      name,
      image,
      life_span,
      height,
      weight,
      temperament,
    );
    return res.status(201).send(dogNew);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const deleteDogHandler = async (req, res) => {
  const { id } = req.params;
  try {
    await deleteDog(id);
    res.status(200).send("Se borro el perro con id: " + id);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = {
  getAllDogsHandler,
  getDogByIdHandler,
  getDogsByNameHandler,
  createDogHandler,
  deleteDogHandler,
};