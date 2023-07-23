const { dogByNameController } = require("../controllers/dogByNameController");
const { allDogsController } = require("../controllers/allDogsController");

const dogsHandler = async (req, res) => {
  const { name } = req.query;

  try {
    const dogs = name
      ? await dogByNameController(name)
      : await allDogsController();
    res.status(200).json(dogs);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

module.exports = dogsHandler;
