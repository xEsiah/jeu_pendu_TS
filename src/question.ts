import readline from "node:readline";

export async function askLetter() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) => {
    rl.question(`Deviner une lettre du mot : `, (input) => {
      resolve(input);
      rl.close();
    });
  });
}
