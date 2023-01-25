import inquirer from "inquirer";
import path from "path"
import fs from "fs/promises"
import { createFolder } from "./saving.js";
import {
  savePokemonSprites,
  savePokemonStats,
} from "./saving.js";

promptUser();