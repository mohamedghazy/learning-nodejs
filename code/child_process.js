import {exec,spawn} from "node:child_process"
import {promisify} from "node:util"
import readline from "readline/promises"

// 1 => the exec method

// const asyncExec=promisify(exec)
// try {
//     const {stdout,stderr}=await asyncExec("git log")
//     console.log(stdout)
//     if(stderr) console.log("error",stderr);
// }catch (err){
//     console.log("command Failed",err.message);
//     console.log("Exit code",err.code);
// }


// 2 => the spawn method

// const child=spawn("find",[".","_name","*.js"])
// child.stdout.on("data",(data)=>{
//     console.log(`stdout: ${data}`)
// })
// child.stderr.on("data",(data)=>console.log("errors",data.toString()))
// child.on("close",(code)=>console.log(`child process exited with code ${code}`))

// $$$$ how to make the user delete a file or dircotry from the terminal 

// const  rl=readline.createInterface({input:process.stdin, output:process.stdout})
// const answer= await rl.question("which folder you want to delete? ")
// exec(`rm -rf ${answer}`)
// console.log(answer)
// rl.close()