// 1- Callback (legacy)
// import fs from "node:fs/promises";


// await fs.mkdir("code",{recursive:true} ,(err)=>{
//     if (err) return console.log(err);
//     console.log("done ");
// })
// await fs.mkdir("code/expes",(err)=>{
//     if (err) return console.log(err);
//     console.log("done ");
// })


// 2- Promise (modern default)
// import {mkdir,readFile,writeFile} from "node:fs/promises"
// const config = JSON.parse(
//   await readFile('config.json', 'utf8')
// );

// await mkdir('expes/reports', { recursive: true });

// await writeFile(
//   'expes/reports/summary.json',
//   JSON.stringify(config, null, 2),
//   'utf8'
// );

// 3-  TOCTOU (Time-of-check-to-time-of-use) race condition
import { stat, readFile } from 'node:fs/promises';

// try {
//   await stat('configs.json'); // file exists now...
// } catch {
//   // doesn't exist, use defaults
// }
// // ...but by now it might be deleted!
// const data = await readFile('configs.json', 'utf8'); // can still fail

// ✅ RIGHT: just read and handle the error
// try {
//   const data = await readFile('configs.json', 'utf8');
//   // process data
// } catch (err) {
//   if (err.code === 'ENOENT') {
//     // file doesn't exist — handle it
//     console.log("this is the ENOENT error");
//   } else {
//     throw err;
//   }
// }
