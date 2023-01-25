import inquirer from "inquirer";
import { createFolder } from "./saving.js";
import {
  savePokemonSprites,
  savePokemonStats,
} from "./saving.js";
//import { ParseOptions } from "./saving.js";
let globalPokemonName;
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
      await createFolder(answer.pokemonName);
      globalPokemonName = await answer.pokemonName;
      return globalPokemonName;
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
      const chosenPokemon = await fetchPokemon(
        globalPokemonName
      );
      //
      if (userPick.includes("stats")) {
        // const statsSheet = await chosenPokemon.stats
        savePokemonStats(
          globalPokemonName,
          chosenPokemon.stats,
          "Stats"
        );
        //console.log(typeof(chosenPokemon.stats));

        console.log(
          `stats downloaded to ${globalPokemonName} folder`
        );
        //savePokemonStats()
      } else {
        console.log("Stats isnt selected");
      }
      if (userPick.includes("sprites")) {
        const frontDefault = await chosenPokemon.sprites
          .front_default;
        const backDefault = await chosenPokemon.sprites
          .back_default;
        await savePokemonSprites(
          globalPokemonName,
          frontDefault,
          "Front"
        );
        await savePokemonSprites(
          globalPokemonName,
          backDefault,
          "Back"
        );
        const frontShinyDefault = await chosenPokemon
          .sprites.front_shiny;
        const backShinyDefault = await chosenPokemon.sprites
          .back_shiny;
        await savePokemonSprites(
          globalPokemonName,
          frontShinyDefault,
          "Front-Shiny"
        );
        await savePokemonSprites(
          globalPokemonName,
          backShinyDefault,
          "Back-Shiny"
        );

        // console.log(chosenPokemon.sprites.front_default);
        console.log(
          `Sprites downloaded to ${globalPokemonName} folder`
        );
        //savePokemonSprites()
      } else {
        console.log("sprites isnt selected");
      }
      if (userPick.includes("artwork")) {
        const frontArtwork = await chosenPokemon.sprites
          .other["official-artwork"].front_default;
        await savePokemonSprites(
          globalPokemonName,
          frontArtwork,
          "Artwork"
        );
        const frontShinyArtwork = await chosenPokemon
          .sprites.other["official-artwork"].front_shiny;
        await savePokemonSprites(
          globalPokemonName,
          frontShinyArtwork,
          "Shiny-Artwork"
        );
        console.log(
          `artwork downloaded to ${globalPokemonName} folder`
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
        default: false,
      },
    ])
    .then(async (answer) => {
      if (answer.playAgain) {
        console.log("Make another selection");
        await promptUser();
      } else {
        console.log("Game Over");
        // return;
      }
    });
};

const promptUser = async () => {
  await promptForPokemon();
  await promptForDownloadInfo();
  await promptToContinue();
};

export { promptUser };

// fetchPokemon("starmie").then((url)=>{
//     return (url.json())
// }).then((object)=>{
//     console.log(object.sprites)
// })

//await promptToContinue()

//await promptUser()


