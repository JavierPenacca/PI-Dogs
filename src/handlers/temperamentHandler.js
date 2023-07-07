const { getTemperaments } = require('../controllers/controllersTemperament');

const getAllTemperamentsHandler = async (req, res) => {
    try {
        const temperaments = await getTemperaments();
        return res.status(200).send(temperaments);
    } catch (error) {
        return res.status(400).send({ error: error.message });
    }
};

module.exports = {
    getAllTemperamentsHandler,
};