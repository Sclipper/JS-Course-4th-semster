const fetch = require('node-fetch');
var url = 'https://swapi.co/api/people/';

function getPlanetForFirstSpeciesInFirstMovieForPersonID(id) {

    let res = {};

    fetch(url + id)
        .then(res => res.json())
        .then(data => {
            let next = data.films[0]
            res.personName = data.name;
            return fetch(next).then(res => res.json())
        })
        .then(data => {

            let next = data.species[0];
            res.title = data.title;

            return fetch(next).then(res => res.json())
                .then(data => {

                    let next = data.homeworld;
                    res.speciesName = data.name;

                    return fetch(next).then(res => res.json())
                        .then(data => {

                            res.homeworld = data.name;
                            console.log(res)


                        })
                })

        })
        .catch(error => console.log(error))

}

getPlanetForFirstSpeciesInFirstMovieForPersonID(1)