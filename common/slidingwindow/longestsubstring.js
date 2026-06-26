// Given a string s, find the length of the longest substring without duplicate characters.

// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

function getLongestSubstring(mystr) {
  let myMap = new Map()
  let start = 0
  let maxStringLength = 0

  for (let i = 0; i < mystr.length; i++) {
    let element = mystr[i]

    if (myMap.has(element)) {
      let index = myMap.get(element)
      myMap.set(element, i)

      if (start <= index) {
        start = index + 1
      }
    } else {
      myMap.set(element, i)
    }
    maxStringLength = Math.max(maxStringLength, i - start + 1)
  }

  return maxStringLength
}

console.log(getLongestSubstring("aaaaaaaaa")) // 1
console.log(getLongestSubstring("abba")) // 2
console.log(getLongestSubstring("dvdf")) // 3
console.log(getLongestSubstring("abcabcbb")) // 3
console.log(getLongestSubstring("cadbzabcd")) // 5
