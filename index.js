function isOpenBracket(c){
    return (c==='[' || c==='(' || c==='{');
} 

function findBlocksToValidate(text){
    var result = [];
    var length = text.length,count=0, startIndex=0,endIndex=0;

    while(count < length){
        let currentChar = text[count];
        if(isOpenBracket(currentChar)){
            endIndex+=1;
            count+=1;
        }else{
            //a block will always have a length of its openBrackets characters multiplied by two
            // the other half must be the corresponding closing brackets
            let blockLength = (endIndex-startIndex) * 2; 
            let blockToValidate = text.slice(startIndex, startIndex+blockLength);
            result.push(blockToValidate);

            //reposition the count in order to start at the first character of the next block
            count+= endIndex-startIndex;
            startIndex = endIndex = count;
        }
    }

    return result;
}

function isBlockValid(textBlock){
    var simblingMap = {
        '[':']',
        ']':'[',
        '{':'}',
        '}':'{',
        '(':')',
        ')':'('
    };
    var length = textBlock.length;

    if(length % 2 !== 0 || length ===0 ) return false;

    let openBrackets = textBlock.slice(0, length/2);
    return openBrackets.split("").every((c, index) => {
        return simblingMap[c] === textBlock[length - index -1];
    });
}


function areValidBrackets(text){
    var length = text.length, count=0, blockToValidate;
    //basic condition assesment
    if(length % 2 !== 0 || length ===0) return false;
    
    let blocksToValidate = findBlocksToValidate(text);
    return blocksToValidate.every(isBlockValid);
}

exports.areValidBrackets = areValidBrackets;

