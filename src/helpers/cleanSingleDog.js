const cleanSingleDog = (dog) => {
  return {
    id: dog.id,
    name: dog.name,
    image: dog.image.url,
    height: dog.height.metric,
    weight: dog.weight.metric,
    lifeSpan: dog.life_span,
    temperament: dog.temperament ?? "No temperament available",
    createdInDb: false,
  };
};
module.exports = cleanSingleDog;
