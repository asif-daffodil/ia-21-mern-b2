const { error } = require('console');
const readLine = require('readline');
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

/* 
    var x = 15;
    var x = 16; 
*/
let x = 15;
x = 16;
const y = 20;
// console.log(x);

/* 
function sadat () {
    return 'Hello Sadat';
} 

const sadat = function () {
    return 'Hello Sadat';
}

const sadat = () => {
    return 'Hello Sadat';
}
*/

const sadat = () => 'Hello Sadat';
// console.log(sadat());

const sadatPromise = new Promise((resolve, reject) => {
    rl.question('Does sadat family agree with the relation?', (ans) => {
        const sadatErFamily = ans;
        try{
            if(sadatErFamily == 'yes') {
                resolve('Sadat can marry');
            }else{
                throw new Error('Sadat can not marry');
            }
        }catch(err){
            reject(err.message);
        }finally{
            rl.close();
        }
    });
});

sadatPromise.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});

