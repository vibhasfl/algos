// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false

function checkAnagram(str1,str2){

    str1 = str1.split("").sort()
    str2 = str2.split("").sort()

    if(str1.length != str2.length){
        return false
    }

    for(let i=0;i<str1.length;i++){
        if(str1[i]!=str2[i]){
            return false
        }
    }

    return true
}

console.log(checkAnagram("rat","art"))

