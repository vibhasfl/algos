function getLongestSuffix(str){

    let reversedStr = str.map(word => word.split("").reverse().join(""))


    reversedStr.sort()
    
    firstItem = reversedStr[0]
    lastItem = reversedStr[str.length-1]

    let suffix=""

    for(let i=0;i<firstItem.length;i++){
        if(firstItem[i]!=lastItem[i]){
            break
        }
        suffix+=firstItem[i]
    }

    return suffix.split("").reverse().join("")

}


console.log(getLongestSuffix(["walking", "talking", "running"]))