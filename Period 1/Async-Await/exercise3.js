const fetch = require('node-fetch')
const URL = "https://swapi.co/api/people/"

async function getPlanetForFirstSpeciesInFirstMovieForPersonID(id){
    const result = await fetch(URL);
    const persondata = await result.json().then((nameData)=>nameData.results[id]);
    const film = await fetch(persondata.films[id])
    const filmdata = await film.json().then((moviedata)=>[moviedata.title, moviedata.species[0]])
    const species = await fetch(filmdata[1])
    const speciesdata = await species.json().then((speciesdata)=>[speciesdata.name, speciesdata.homeworld])
    const homeworld = await fetch(speciesdata[1])
    const homeworlddata = await homeworld.json().then((homeworlddata)=>homeworlddata.name)
    
    console.log(persondata.name)
    console.log(filmdata[0])
    console.log(speciesdata[0])
    console.log(homeworlddata)
}

getPlanetForFirstSpeciesInFirstMovieForPersonID(0).catch((err)=>{
    console.log(err)
});