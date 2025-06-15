const mystring = "HelloWorld"

function reverseString(mystring){

    if(!str || str.length < 2 || typeof mystring !== 'string'){
        return false
    }

    let reverseString = []

    for(let i=mystring.length-1;i>=0;i--){
        reverseString.push(mystring[i])
    }

    return reverseString.join()
}


const reverseString2 = mystring => [...str].reverse().join('')

console.log(reverseString(mystring))
