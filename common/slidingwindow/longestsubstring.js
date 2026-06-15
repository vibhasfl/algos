// Given a string s, find the length of the longest substring without duplicate characters.

// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

function getLongestSubstring(mystr){

    let substringLength = 0
    let maxLength = 0
    let str = ""

    for(let i=0;i<mystr.length;i++){
        if(str.includes(mystr[i])){
         maxLength = Math.max(substringLength,maxLength)  
         console.log("maxLength",maxLength)
         substringLength=1 
         str=""
        }
        else
        {
            substringLength++
           
        }

         str+=mystr[i]
        console.log("str",str)
    }

    return Math.max(maxLength,substringLength)
}

console.log(getLongestSubstring("aaaaaaaaa"))