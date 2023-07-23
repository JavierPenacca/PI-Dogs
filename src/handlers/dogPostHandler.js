const { postDogController } = require("../controllers/postDogController");

const dogPostHandler = async (req, res) => {
  const { name, image, height, weight, lifeSpan, temperament } = req.body;
  try {
    const dog = await postDogController(
      name,
      image,
      height,
      weight,
      lifeSpan,
      temperament,
      res
    );
    res.status(200).json("Perro creado con exito!");
  } catch (error) {
    console.log(error);
    res.status(400).json("Error en dogPostHandler");
  }
};

module.exports = dogPostHandler;
