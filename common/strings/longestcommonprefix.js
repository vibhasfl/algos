function getLongestPrefix(str){
    
    str.sort()
    
    firstItem = str[0]
    lastItem = str[str.length-1]

    let prefix=""

    for(let i=0;i<firstItem.length;i++){
        if(firstItem[i]!=lastItem[i]){
            break
        }
        prefix+=firstItem[i]
    }

    return prefix

}


console.log(getLongestPrefix(["flow","flower", "floght"]))