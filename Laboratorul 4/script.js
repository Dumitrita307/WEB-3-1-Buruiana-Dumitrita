
function exercitiul1() {

    let fructe = [
        "Cireșe",
        "Căpșună",
        "Banana",
        "Măr",
        "Prună",
        "Piersică",
        "Harbuz"
    ];

    console.log("Lista de fructe:", fructe);

    console.log("Primul element:", fructe[0]);

    console.log(
        "Ultimul element:",
        fructe[fructe.length - 1]
    );

    console.log(
        "Numărul de elemente:",
        fructe.length
    );

}


function exercitiul2() {

    let orase = [
        "Chișinău",
        "Bălți",
        "Cahul"
    ];

    orase.push("Orhei");

    orase.unshift("Soroca");

    orase.pop();

    orase.shift();


    console.log("Lista finală:", orase);

}



let produse = [
    "Pâine",
    "Lapte",
    "Ouă",
    "Ciocolată"
];


function afiseazaProduse() {

    let lista =
        document.getElementById("listaProduse");


    lista.innerHTML = "";


    // Dacă lista este goală

    if (produse.length === 0) {

        lista.innerHTML =
            "<p><strong>Lista este goală!</strong></p>";

        return;
    }


    produse.forEach(function(produs, index) {

        let element = document.createElement("p");

        element.textContent =
            (index + 1) + ". " + produs;

        lista.appendChild(element);

    });

}


function adaugaLaSfarsit() {

    let input =
        document.getElementById("produsInput");

    let produs =
        input.value.trim();


    if (produs === "") {

        alert("Introduceți un produs!");

        return;
    }


    produse.push(produs);


    input.value = "";


    afiseazaProduse();

}


function adaugaLaInceput() {

    let input =
        document.getElementById("produsInput");

    let produs =
        input.value.trim();


    if (produs === "") {

        alert("Introduceți un produs!");

        return;
    }


    produse.unshift(produs);


    input.value = "";


    afiseazaProduse();

}


function stergePrimul() {


    produse.shift();


    afiseazaProduse();

}


function stergeUltimul() {


    produse.pop();


    afiseazaProduse();

}



let elevi = [

    {
        nume: "Cazacu Olga",
        varsta: 17,
        nota: 9
    },

    {
        nume: "Rusu Vladimir",
        varsta: 18,
        nota: 8
    },

    {
        nume: "Popa Lavinia",
        varsta: 17,
        nota: 10
    },

    {
        nume: "Onică Florin",
        varsta: 16,
        nota: 7
    }

];



function afiseazaElevi() {

    let catalog =
        document.getElementById("catalog");


    catalog.innerHTML = "";


    elevi.forEach(function(elev, index) {

        let div =
            document.createElement("div");


        div.className = "elev";


        let titlu = document.createElement("h3");
        titlu.textContent = (index + 1) + ". " + elev.nume;

        let varsta = document.createElement("p");
        varsta.innerHTML = "<strong>Vârsta:</strong> " + elev.varsta;

        let nota = document.createElement("p");
        nota.innerHTML = "<strong>Nota:</strong> " + elev.nota;

        div.appendChild(titlu);
        div.appendChild(varsta);
        div.appendChild(nota);

        catalog.appendChild(div);

    });


    document.getElementById(
        "numarElevi"
    ).textContent =
        "Număr de elevi: " + elevi.length;


    if (elevi.length === 0) {

        catalog.innerHTML =
            "<p>Nu există elevi în catalog.</p>";

    }

}

function adaugaElev() {

    let nume =
        document.getElementById("nume").value.trim();


    let varsta =
        Number(
            document.getElementById("varsta").value
        );


    let nota =
        Number(
            document.getElementById("nota").value
        );



    if (
        nume === "" ||
        varsta <= 0 ||
        nota < 1 ||
        nota > 10
    ) {

        alert(
            "Introduceți date valide!"
        );

        return;
    }


    let elevNou = {

        nume: nume,

        varsta: varsta,

        nota: nota

    };


    elevi.push(elevNou);


    document.getElementById("nume").value = "";

    document.getElementById("varsta").value = "";

    document.getElementById("nota").value = "";


    afiseazaElevi();

}


function stergeElev() {

    let numeCautat =
        document
            .getElementById("numeStergere")
            .value
            .trim();


    if (numeCautat === "") {

        alert(
            "Introduceți numele elevului!"
        );

        return;
    }


    let index =
        elevi.findIndex(function(elev) {

            return elev.nume.toLowerCase() ===
                numeCautat.toLowerCase();

        });


    if (index !== -1) {


        elevi.splice(index, 1);


        alert(
            "Elevul a fost șters!"
        );


        document.getElementById(
            "numeStergere"
        ).value = "";


        afiseazaElevi();

    }

    else {

        alert(
            "Elevul nu a fost găsit!"
        );

    }

}


function cautaElev() {

    let numeCautat =
        document
            .getElementById("numeCautare")
            .value
            .trim();


    let rezultat =
        document.getElementById(
            "rezultatCautare"
        );


    if (numeCautat === "") {

        rezultat.innerHTML =
            "<strong>Introduceți numele elevului!</strong>";

        return;
    }


    let elevGasit =
        elevi.find(function(elev) {

            return elev.nume.toLowerCase() ===
                numeCautat.toLowerCase();

        });


if (elevGasit) {

    let div = document.createElement("div");

    let titlu = document.createElement("h3");
    titlu.textContent = "Elev găsit!";

    let nume = document.createElement("p");
    nume.innerHTML = "<strong>Nume:</strong> " + elevGasit.nume;

    let varsta = document.createElement("p");
    varsta.innerHTML = "<strong>Vârsta:</strong> " + elevGasit.varsta;

    let nota = document.createElement("p");
    nota.innerHTML = "<strong>Nota:</strong> " + elevGasit.nota;

    div.appendChild(titlu);
    div.appendChild(nume);
    div.appendChild(varsta);
    div.appendChild(nota);

    rezultat.innerHTML = "";
    rezultat.appendChild(div);

}
else {

    rezultat.textContent = "Elevul nu a fost găsit!";

}

}

afiseazaProduse();


afiseazaElevi();

