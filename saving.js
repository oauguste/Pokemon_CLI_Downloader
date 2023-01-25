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
  pokemonStatsObject,
  fileName
) => {
  try {
    let statsArray = [];
    // const fetchText = await fetch(pokemonStatsObject);
    //const statsText = await fetchText.text()
    for await (const item of pokemonStatsObject) {
      await statsArray.push(`
        ${item.stat.name}: ${item.base_stat} \n` 
        
      );
    }
    await fs.writeFile(
      `./${folderName}/${folderName}${fileName}.txt`,
      statsArray,
      "utf-8",
      (err) => {
        if (err) throw err;
      }
    );
  } catch (err) {
    console.log(err);
  }
};

const savePokemonSprites = async (
  folderName,
  pokemonSpritessObject,
  fileName
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
export { savePokemonSprites, savePokemonStats };
