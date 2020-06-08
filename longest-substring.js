// Longest Substring Without Repeating Characters

// Given a string, find the length of the longest substring without repeating characters.

// Example 1:
// Input: "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:
// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:
// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

// The approach:

// 1. split the input string
// 2. use an array to store used characters and a number to store the longest count. mutable
// 3. iterate over input array
// 4. check if character of current iteration exists in used array
// 5. if so, update longest count with the max of either the current longest count or usedCharacter.length.
// reset used characters array
// 6. push current character to array.
// 7. return longestCount

const getLongestSubstringLength = input => {
  const stringArray = input.split('');

  let usedCharacters = [];
  let longestCount = 0;

  for (let character of stringArray) {
    if (usedCharacters.includes(character)) {
      longestCount = Math.max(longestCount, usedCharacters.length);
      usedCharacters = [];
    }

    usedCharacters.push(character);
  }

  return longestCount;
};

getLongestSubstringLength('pwwkew')