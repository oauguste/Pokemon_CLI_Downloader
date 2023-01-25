import inquirer from "inquirer";
//import { ParseOptions } from "./saving.js";
const fetchPokemon = async (pokemonName) => {
  const pokemonFetched = await fetch(
    "https://pokeapi.co/api/v2/pokemon/" + pokemonName
  );
  const pokemonJson = await pokemonFetched.json();
  return pokemonJson;
};

const folderCreatedMessage = async (string) => {
  console.log(`Creating ${string} folder`);
  console.log(`${string} folder created`);
};
const promptForPokemon = async () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "pokemonName",
        message: "Please enter the name of a Pokemon?",
        validate: async (answer) => {
          try {
            if (answer === "") {
              return "Please enter a Pokemon Name";
            } else if (
              (await fetchPokemon(answer.toLowerCase())) ===
              false
            ) {
              return "Please enter a correct Pokemon Name";
            } else {
              return true;
            }
          } catch (error) {
            console.log(" isn't a pokemon");
          }
        },
      },
    ])
    .then(async (answer) => {
      await folderCreatedMessage(
        answer.pokemonName.toLowerCase()
      );
      console.log(answer.pokemonName.toLowerCase());
      //createFolder(answer.pokemonName)
    });
};

const promptForDownloadInfo = async () => {
  return inquirer
    .prompt([
      {
        type: "checkbox",
        name: "downloadChoice",
        message: "What files would you like to download",
        choices: ["stats", "sprites", "artwork"],
        default: "stats",
      },
    ])
    .then(async (answers) => {
      const userPick = await answers.downloadChoice;
      //
      if (userPick.includes("stats")) {
        console.log("stats selected, performing action 1");
        //savePokemonStats()
      } else {
        console.log("Stats isnt selected");
      }
      if (userPick.includes("sprites")) {
        console.log(
          "sprites selected, performing action 2"
        );
        //savePokemonSprites()
      } else {
        console.log("sprites isnt selected");
      }
      if (userPick.includes("artwork")) {
        console.log(
          "artwork selected, performing action 3"
        );
        //savePokemonArtwork()
      } else {
        console.log("artwork isnt selected");
      }
    });
};

const promptToContinue = async () => {
  return inquirer
    .prompt([
      {
        type: "confirm",
        name: "playAgain",
        message: "Nice Work, would you like to try again?",
        default: false
      },
    ])
    .then(async (answer) => {
      if (answer.playAgain) {
        console.log("Make another selection")
        // await promptUser();
      } else {
        console.log("Game Over")
        // return;
      }
    });
};

const promptUser = async () =>{};

export { promptUser };

// fetchPokemon("starmie").then((url)=>{
//     return (url.json())
// }).then((object)=>{
//     console.log(object.sprites)
// })

await promptForPokemon();
await promptForDownloadInfo();
await promptToContinue()
