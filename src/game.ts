import { askLetter } from "./question";

async function game() {
  const letter = await askLetter();
  console.log("Lettre choisie : ", letter);
}

game();
