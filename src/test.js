import { collectByLetter } from "./startingletters.js";

// jest docs for expect "matchers"
// https://jestjs.io/docs/expect

test("creates an object with a key value pair of the alphabet letter and an array of respective strings", () => {
  let expectedOutput = {
    a: ["apple", "apricot"],
    b: ["banana"],
    c: ["carrot"],
    w: ["watermelon"],
  };
  expect(
    collectByLetter(["apple", "banana", "carrot", "watermelon", "apricot"])
  ).toEqual(expectedOutput);
});

/////////////////////////////////////////////////////////////////////////////////

test("creates an object with a key value pair of the alphabet letter and an array of respective strings", () => {
  let expectedOutput = {
    s: ["shall", "summer's"],
    c: ["compare"],
    t: ["thee", "to"],
    i: ["i"],
    a: ["a"],
  };
  expect(
    collectByLetter(["shall", "i", "compare", "thee", "to", "a", "summer's"])
  ).toEqual(expectedOutput);
});
