let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let NewArr = [];

for (let p of pronoun) {
  for (let a of adj) {
    for (let n of noun) {
      NewArr.push(p + a + n + ".com");
    }
  }
}

console.log(NewArr);
