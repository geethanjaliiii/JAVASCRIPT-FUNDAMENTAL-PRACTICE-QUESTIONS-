//----------------------find sum of odd numbers------------

const haha = [{ a: 1, b: 2 }, { a: 6, b: 9 }, { a: 1, b: 7 }, { a: 3, b: 4 }]


const bla = haha.flatMap((ITEM) => (Object.values(ITEM))).reduce((sum, curr) => (curr % 2 !== 0 ? sum + curr : sum), 0)
// const bla = haha.map(item=>Object.values(item)).flat()
console.log(bla);
// const lala =bla.filter((curr)=>(curr%2===1)).reduce((a,b)=>(a+b),0)

//--------------------------find word with max letters-----------------------------------
const sent = "geethajali is beautiful"
const lword = sent.split(" ").reduce((maxW, word) => word.length > maxW.length ? word : maxW, sent[0])

//or    const lword= sent.split(" ").reduce((maxW,word)=>word.length>maxW.length?word:maxW,"")
lword


//-------------------find the second largest odd number of objects--------------------


const objj = { a: 11, b: 8, c: 15, d: 7, e: 19, f: 2, g: 21 };
const secl = Object.values(objj).filter((o) => o % 2 !== 0).reduce((sec, curr) => {
    if (curr > sec.large) {
        return { large: curr, seclarg: sec.large };
    } else if (curr > sec.seclarg && curr < sec.large) {
        return { large: sec.large, seclarg: curr }
    } else {
        return sec
    }
}, { large: -Infinity, seclarg: -Infinity })
secl
console.log(secl.seclarg);

//----------------------print vowels from the string---------------------------------

const str = "welcome to javascript";

const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]

const vovel = str.split("").filter((char) => vowels.includes(char))

//const vovel= str.split("").filter((letter)=>{for(let i of vowels){if(letter === i){return letter}}})

vovel

const unique = vovel.reduce((acc, curr) => { if (!acc[curr]) { return acc[curr] = curr } }, {})

unique

//--------print duplicate elements in an array-----------------
let arr= [1,2,3,2,3,,5,6,7,8,8,6,6];
//arr.reduce((acc,curr)=>,{})

let x=3;
let y=8

x=x+y;
y=x-y;
x=x-y
console.log(y);
console.log(x);
