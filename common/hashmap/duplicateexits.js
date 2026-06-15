// Given event IDs:

// [101,203,304,101]

// Return true if duplicate exists.

// Follow-up:

// O(n²)?
// O(n) with HashSet?

function checkDuplicates(intArr){

    let existing = new Set()
    let hasDuplicate= false

    for(let i=0;i<intArr.length;i++){
        if(existing.has(intArr[i])){
            hasDuplicate = true
            break
        }
        existing.add(intArr[i])
    }
    return hasDuplicate
}

console.log(checkDuplicates([101,101,304,102]))