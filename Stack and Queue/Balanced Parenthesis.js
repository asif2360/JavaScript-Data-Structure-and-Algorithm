

function isBalanced(x)
{
    //your code here
    let stackItem = [];
    let openBrackets = ['(', '{', '['];
    let closedBrackets = [')', '}', ']'];
    
    for(let i=0; i< x.length; i++){
        
        if(openBrackets.includes(x[i])){
            stackItem.push(x[i]);
        } else {
            let item = stackItem.pop();
            if(openBrackets.indexOf(item) != closedBrackets.indexOf(x[i])){
                return false;
            }
        }
    }
    
    if(stackItem.length > 0)
        return false;
    
    return true;
}


console.log(isBalanced('()'));