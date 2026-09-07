
const nume = [
    {
        nume: "Dumitrița",
        mesaj: "Dumitrița provine si de la crizanteme numindu-se în popor „dumitrițe”."
    },

    {
        nume: "Elena",
        mesaj: "Elena este asociată cu lumina, strălucirea și căldura."
    },

    {
        nume: "Victoria",
        mesaj: "Victoria înseamnă „victorie” și inspiră curaj și ambiție."
    },

    {
        nume: "Aurora",
        mesaj: "Aurora simbolizează zorii, speranța și începuturile noi."
    },

    {
        nume: "Amelia",
        mesaj: "Amelia este asociată cu hărnicia, perseverența și determinarea."
    },

    {
        nume: "Clara",
        mesaj: "Clara înseamnă „luminoasă” sau „strălucitoare”."
    }
];


function alegeNume() {

    const numarAleatoriu =
        Math.floor(Math.random() * nume.length);

    const ales = nume[numarAleatoriu];


    document.getElementById("rezultat").innerHTML =
        "<strong>" + ales.nume + "</strong><br>" +
        ales.mesaj;
}
