// "{[()]}"

// Return true.

// "{[(])}"

// Return false.

// Follow-up:

// Why stack?
// Time complexity?

function checkParenthesis(myStr){

    const pmap = {
        "{":"}",
        "(":")",
        "[":"]"
    }

    let holder = []
    const strchars = myStr.split("")
    

    for(let i=0;i<strchars.length;i++){

        let holderlength = holder.length - 1
       
        if(i>0 && pmap[holder[holderlength]]==strchars[i]){
       
            
            holder.pop()
        }
        else{
            holder.push(strchars[i])
        }
        
    }

    return holder.length==0
}

console.log("output : ",checkParenthesis("({[]})"))
console.log("output : ",checkParenthesis("(){}[]"))
console.log("output : ",checkParenthesis("()"))
console.log("output : ",checkParenthesis("(())"))