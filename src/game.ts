// importation
import { askLetter } from "./question";
import mots from "./mots.json";

// variables globales
let MotADeviner = Array.from(mots[Math.floor(Math.random() * mots.length)]);
let Compteur = Math.round(MotADeviner.length / 2);

console.log(Compteur);
console.log(MotADeviner);

function AfficherLeMotDevinable(
  MotADeviner: string[],
  MappingLettresTrouvees: {
    [key: string]: boolean;
  }
) {
  return MotADeviner.map((letter) => {
    if (MappingLettresTrouvees[letter] === true) {
      return letter;
    } else {
      return "_";
    }
  }).join(" ");
}

console.log(
  AfficherLeMotDevinable(["c", "h", "a", "t"], {
    c: true,
    h: false,
    a: false,
    t: true,
  })
);

// programme
async function game() {
  for (let i = 0; i < MotADeviner.length; i++) {
    const letter = await askLetter();
    console.log("Lettre choisie : ", letter);
    if (MotADeviner.includes(letter)) {
      console.log(letter, "est dans le mot\n");
    } else {
      Compteur -= 1;
      console.log(letter, "n'est pas dans le mot\n");
      console.log("Il ne vous reste que", Compteur, "essai(s)\n\n");
      if (Compteur === 0) {
        break;
      }
    }
  }
}

game();
