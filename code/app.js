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
import { stat, readFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';

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
// console.log({direName:import.meta.dirname,fileName:import.meta.filename , cwd:process.cwd()});
//  List Directory Contents: readdir
const names= await readdir("expes")
console.log({names});

const entries= await readdir("expes" ,{withFileTypes:true})
for (const entri of entries){
    const fullPath=join("expes",entri.name)
    if(entri.isFile()){
        console.log("File", fullPath);      
    }else if
    (entri.isDirectory()){
        console.log("Directory", fullPath);

    }
}
// Recursive: list all files in entire tree (Node 18.17+)

const allFils=await readdir("expes",{recursive:true})

console.log({allFils});
