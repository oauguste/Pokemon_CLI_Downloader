import path from "path";
import fs from "fs/promises";

const createFolder = async (folderName) => {
  try {
    return await fs.mkdir(
      `${process.cwd()}/` + folderName,
      {
        recursive: true,
      }
    );
  } catch (err) {
    console.error(err);
  }
};

const saveImageFile = async (filePath, ArrayBuffer) => {
  try {
    const fetchImageFile = await fetch(link)
    const toArrayBuffer = await Buffer.from(fetchImageFile.arrayBuffer())
     
    return await fs.writeFile(`${pokemonName}.png`, )
  } catch (error) {
    console.log(error);
  }
};

const savePokemonStats = async (
  folderName,
  pokemonStatsObject
) => {};

const savePokemonSprites = async (
  folderName,
  pokemonSpritessObject
) => {
  //eg. back_shiny.png
  //eg. front_shiny.png
};

const savePokemonArtwork = async (
  folderName,
  pokemonSpritesObject
) => {};

const parseOptions = async (
  pokemonObject,
  optionsObject
) => {};

export { parseOptions };
export { createFolder };
