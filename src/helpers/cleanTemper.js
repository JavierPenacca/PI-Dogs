function cleanTemper(dogs) {
  const palabrasUnicas = ["No temperament available"];
  dogs.forEach((dog) => {
    if (dog.temperament) {
      const temperaments = dog.temperament.split(",");
      temperaments.forEach((temperament) => {
        const palabra = temperament.trim();
        if (!palabrasUnicas.includes(palabra)) {
          palabrasUnicas.push(palabra);
        }
      });
    }
  });
  const temperaments = [];

  for (let i = 0; i < palabrasUnicas.length; i++) {
    const temperamentObj = {
      name: palabrasUnicas[i],
    };
    temperaments.push(temperamentObj);
  }

  return temperaments;
}

module.exports = cleanTemper;

