const cleanDogs= (data) => {
return data.map((element)=>{
    return {
        id: element.id,
        name: element.name,
        image: element.image,
        life_span: element.life_span,
        height: element.height.metric,
        weight: element.weight.metric,
        temperament: element.temperament,
    }
})
};

module.exports = cleanDogs;