/*Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal*/

//Array delle bici
const bikes = [
    {
        name: "Downhill",
        weight: 18,
    },

    {
        name: "Tandem",
        weight: 11,
    },

    {
        name: "BMX",
        weight: 16,
    },

    {
        name: "Bici da corsa",
        weight: 20,
    },

    {
        name: "Bici da città",
        weight: 8,
    }
]

console.log(bikes)

//Creo una funzione che scansiona gl'elementi e cicla i valori 
function getLightest() {
    let lightBike = bikes[0];

    for (let i = 0; i < bikes.length; i++) {

        if (lightBike.weight > bikes[i].weight) {
            lightBike = bikes[i];
        }

    }

    const { name, weight } = lightBike;
    console.log(lightBike)

    const showResult = document.getElementById("showResult");
    showResult.innerHTML = `Nome bicicletta: ${name} <br> Peso Bicicletta: ${weight}`;

}

getLightest();



