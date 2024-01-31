/** Takes an array of lower case words, returns an object with a key pair of the alphabet letter and the respective string is a value in an array.
 * @param {string[]}} inputArray
 * @returns {object} An object with key value pairs of alphabet letters and an array of respective strings e.g. {a: ["apple", "avocado"]}
 */
// //Pseudocode - RESULT_OBJ = make an  empty object
// for each WORD of INPUT_WORDS
// FIRST_LETTER = first letter of WORD
// if FIRST_LETTER is a key in RESULT_OBJ
//     push WORD to array in result_obj at key FIRST_LETTER
// else
//     create key value pair in RESULT_OBJ:
//     key: FIRST_LETTER, value: [WORD]

function collectByLetter(inputArray) {
  let resultObj = {};
  for (let word of inputArray) {
    let splitWord = word.split("");
    let firstLetter = splitWord[0];
    if (firstLetter in resultObj) {
      resultObj[firstLetter].push(word);
    } else {
      resultObj[firstLetter] = [word];
    }
  }
  return resultObj;
}

export { collectByLetter };
