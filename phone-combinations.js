// Given a string containing digits from 2 - 9 inclusive, return all possible letter combinations that the
// number could represent.A mapping of digit to letters(just like on the telephone buttons)
// is given below.Note that 1 does not map to any letters.

// Example
// Input: "23"
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
// can be in any order

const charMap = {
  '2': ['a', 'b', 'c'],
  '3': ['d', 'e', 'f'],
  '4': ['g', 'h', 'i'],
  '5': ['j', 'k', 'l'],
  '6': ['m', 'n', 'o'],
  '7': ['p', 'q', 'r', 's'],
  '8': ['t', 'u', 'v'],
  '9': ['w', 'x', 'y', 'z']
}

const getLetterCombinations = input => {
  let output = [];

  const getCombo = (combo, iteration) => {
    if (combo.length === [...input].length) {
      return output.push(combo);
    }

    [...charMap[input[iteration]]].map(letter => {
      getCombo(combo + letter, iteration + 1);
    });
  };

  getCombo('', 0);

  return output;
};

getLetterCombinations('234')
