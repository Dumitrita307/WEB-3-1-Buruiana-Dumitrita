
function calculateSum(a, b) {
    return a + b;
}

let rezultat1 = calculateSum(9, 37);
let rezultat2 = calculateSum(14, 52);

console.log("EXERCIȚIUL 1");
console.log(rezultat1);
console.log(rezultat2);

let student = {
    name: "Dumitrița",
    age: 18,
    grade: 8,

    introduce: function() {
        console.log(
            "Sunt " + this.name +
            " și am " + this.age + " ani."
        );
    }
};

console.log("EXERCIȚIUL 2");

student.introduce();

student.grade = 10;

console.log("Noua notă este: " + student.grade);


let choices = ["piatra", "hartia", "foarfeca"];

let gameScore = {
    player: 0,
    computer: 0,
    draws: 0,

    displayScore: function() {
        alert(
            "Scor:\n" +
            "Tu: " + this.player + "\n" +
            "Calculator: " + this.computer + "\n" +
            "Egalități: " + this.draws
        );
    }
};


function getComputerChoice() {

    let randomIndex =
        Math.floor(Math.random() * choices.length);

    return choices[randomIndex];
}


function determineWinner(player, computer) {

    if (player === computer) {
        gameScore.draws++;
        return "Egalitate!";
    }

    if (
        (player === "piatra" && computer === "foarfeca") ||
        (player === "foarfeca" && computer === "hartia") ||
        (player === "hartia" && computer === "piatra")
    ) {
        gameScore.player++;
        return "Ai câștigat!";
    }

    gameScore.computer++;

    return "Calculatorul a câștigat!";
}


function playGame(playerChoice) {

    let computer = getComputerChoice();

    let result =
        determineWinner(playerChoice, computer);

    document.getElementById("playerChoice").textContent =
        "Alegerea ta: " + playerChoice;

    document.getElementById("computerChoice").textContent =
        "Alegerea calculatorului: " + computer;

    document.getElementById("result").textContent =
        result;

    document.getElementById("playerScore").textContent =
        gameScore.player;

    document.getElementById("computerScore").textContent =
        gameScore.computer;

    document.getElementById("draws").textContent =
        gameScore.draws;

    gameScore.displayScore();
}


document.getElementById("rock")
    .addEventListener("click", function() {
        playGame("piatra");
    });


document.getElementById("paper")
    .addEventListener("click", function() {
        playGame("hartia");
    });


document.getElementById("scissors")
    .addEventListener("click", function() {
        playGame("foarfeca");
    });

document.getElementById("newGame")
    .addEventListener("click", function() {

        gameScore.player = 0;
        gameScore.computer = 0;
        gameScore.draws = 0;

        document.getElementById("playerScore").textContent = 0;
        document.getElementById("computerScore").textContent = 0;
        document.getElementById("draws").textContent = 0;

        document.getElementById("playerChoice").textContent =
            "Alegerea ta: -";

        document.getElementById("computerChoice").textContent =
            "Alegerea calculatorului: -";

        document.getElementById("result").textContent =
            "Alege o variantă!";

        alert("Jocul a fost resetat!");
    });