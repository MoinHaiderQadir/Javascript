// function my(){
//     console.log("m");
//     console.log("o");
//     console.log("i");
//     console.log("n");
//     console.log("q");

// }
// my()
// function mg(n ="sam", m="oi"){
//     console.log(n,m);

// }
// console.log(mg())

// function getUserInput() {
//     let name = prompt("Please enter your name:");
//     if (name != null && name != "") {
//         alert("Hello, " + name + "!");
//     } else {
//         alert("You didn't enter a name.");
//     }
// }

// console.log(getUserInput);
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getUserInput() {
    rl.question('Please enter your name: ', (name) => {
        if (name != null && name != "") {
            console.log("Hello, " + name + "!");
        } else {
            console.log("You didn't enter a name.");
        }
        rl.close();
    });
}

getUserInput();
