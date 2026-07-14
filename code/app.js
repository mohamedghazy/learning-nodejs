// Callback (legacy)
// import fs from "node:fs/promises";


// await fs.mkdir("code",{recursive:true} ,(err)=>{
//     if (err) return console.log(err);
//     console.log("done ");
// })
// await fs.mkdir("code/expes",(err)=>{
//     if (err) return console.log(err);
//     console.log("done ");
// })


// Promise (modern default)
import {mkdir,readFile,writeFile} from "node:fs/promises"
const config = JSON.parse(
  await readFile('config.json', 'utf8')
);

await mkdir('expes/reports', { recursive: true });

await writeFile(
  'expes/reports/summary.json',
  JSON.stringify(config, null, 2),
  'utf8'
);