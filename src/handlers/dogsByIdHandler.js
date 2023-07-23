const {
  getDogByIdController,
} = require("../controllers/getDogByIdController.js");

const dogsByIdHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const dog = await getDogByIdController(id);

    res.status(200).json(dog);
  } catch (error) {
    console.log(error);
    res.status(404).json("Error en dogsByIdHandler");
  }
};

module.exports = dogsByIdHandler;
