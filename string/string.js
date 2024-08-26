const string = "sadfgh gihjk"
console.log(string.charAt(2));
console.log(string.at(9));
console.log(string.indexOf('g'));
const vowels =string.match(/[aeiou]/gi)
console.log(vowels);
console.log(string.match(/^s/i));
