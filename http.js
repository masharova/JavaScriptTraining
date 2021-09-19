function people(peopleIds) {
    let peoplePromises = [];

    for (let i = 0; i < peopleIds.length; i++) {
        peoplePromises.push(swapiModule.getPerson(peopleIds[i]))
    }

    return peoplePromises;
}

let peoplePromises = people([1, 2, 3, 4]);

Promise.all(peoplePromises).then(humans => {
    let filmsArray = new Set(humans[0].films);

    for (let i = 1; i < humans.length; i++) {
        for (let j = 0; j < humans[i].films.length; j++) {
            filmsArray.add(humans[i].films[j]);
        }
    }

    let filmPromises = [];
    let uniqueFilms = Array.from(filmsArray);

    for (let i = 0; i < uniqueFilms.length; i++) {
        filmPromises.push(fetch(uniqueFilms[i]));
    }

    Promise.all(filmPromises).then(films => {
        for (let i = 0; i < films.length; i++) {
            films[i].json().then(f => console.log(f));
        }
    })
})


