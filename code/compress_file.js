import {pipeline} from "node:stream/promises"
import {createReadStream,createWriteStream} from "node:fs"
import {createGzip} from "node:zlib"

const input=process.argv[2]
if (!input){
    console.error('There is no file added to be compressed ');
    process.exit(1)    
}
try{
await pipeline(
    createReadStream(input),
    createGzip(),
    createWriteStream(`${input}.gz`)
)
console.log(`✓ Compressed: ${input} → ${input}.gz`);

}catch(err){
console.log(`✗ Failed: ${err.message}`);
process.exit(1)
}