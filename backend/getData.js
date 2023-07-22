
import { dirname } from 'path'
import { mkdir, writeFile } from "fs";
import { fileURLToPath } from "url"

import fetch from "node-fetch";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename)

let data = await fetch("https://randomuser.me/api/?results=50").then(res => res.json());

let results = data.results;

mkdir(__dirname + "/data", (err) => { if (err) console.log(err) })

writeFile(__dirname + "/data/database.json", JSON.stringify(results), (err) => { if (err) console.log(err) })

