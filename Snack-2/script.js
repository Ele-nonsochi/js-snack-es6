/*
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

const teams = [
    {
        name: "Celestini",
        point: 0,
        foul: 0,
    },
    {
        name: " Whoville",
        point: 0,
        foul: 0,
    },
    {
        name: "Sakura",
        point: 0,
        foul: 0,
    },
]

console.log(teams)

function numeriRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//

for (let i = 0; i < teams.length; i++) {

    teams[i].point = numeriRandom(1, 20);
    teams[i].foul = numeriRandom(5, 20);
}
console.log(teams);
