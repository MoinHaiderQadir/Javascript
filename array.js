const Myarr=[1,2,3,4,5]
// console.log(Myarr);
// console.log(Myarr[3])

// Methods in Array
const Myarr2=new Array(6,7,8,9,10)
// console.log("Original Array");
// console.log(Myarr2);
// Myarr2.push(11)
// Myarr2.push(12)
// console.log(Myarr2);
// Myarr2.pop();
// console.log(Myarr2);
// Myarr2.unshift(5);
// console.log(Myarr2);
// Myarr2.shift()
// console.log(Myarr2);
// console.log(Myarr2.includes(7));
// console.log(Myarr2.includes(4));
// console.log(Myarr2.indexOf(6));
// console.log(Myarr2.indexOf(5));

const newarr=Myarr.join();
// console.log(newarr);
// console.log(typeof newarr);
//  Method slice and splice
// newarr.slice(1,3);
// console.log(Myarr.slice(1,3));
// console.log(Myarr.slice(1,3));
// console.log(Myarr);
// console.log(Myarr.splice(1,3));
// console.log(Myarr);

const mh=["moin","Farhan","Shabbir"]
const fd=["Akash","Ikram","Umair"]
// mh.push(fd);
// console.log(mh[2]);
// console.log(mh[3]);
// console.log(mh[3][2]);
// zh=mh.concat(fd)
// console.log(zh)

// Standered way to write

// const all=[...mh,...fd]
// console.log(all);

const Number=[1,2,3,[4,5,6],8,9,[45,68,3],1,3]
const Numbers=Number.flat(Infinity)
console.log(Numbers);



// Nb

console.log(Array.isArray("Moin"))
console.log(Array.from("Moin"));

let score1=100;
let score2=200;
let score3=300;
console.log((Array.of(score1,score2,score3)));