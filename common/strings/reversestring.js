// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

// Time : O(n)
// Space : O(1)

function reverseString(stringArr){

    let reverse = ""

    for(let i=stringArr.length-1;i>=0;i--){
        reverse+=stringArr[i]
    }

    return reverse
}

console.log(reverseString(["h","e","l","l","o"]))