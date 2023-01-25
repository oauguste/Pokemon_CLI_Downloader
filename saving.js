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
    const fetchImageFile = await fetch(ArrayBuffer);
    const toArrayBuffer =
      await fetchImageFile.arrayBuffer();
    const pokemonImage = await Buffer.from(toArrayBuffer);

    //return await fs.writeFile(filePath, toArrayBuffer )
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
  pokemonSpritessObject,fileName
) => {
  try {
    const fetchImageFile = await fetch(
      pokemonSpritessObject
    );
    const toArrayBuffer =
      await fetchImageFile.arrayBuffer();
    const pokemonImage = await Buffer.from(toArrayBuffer);

    await fs.writeFile(
      `./${folderName}/${folderName}${fileName}.png`,
      pokemonImage
    );
  } catch (error) {
    console.log(error);
  }
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
export {savePokemonSprites}