var isSumEqual = function(firstWord, secondWord, targetWord) {
    let letters = new Set(['a','b','c','d','e','f','g','h','i','j']);
    
    let twoDArray= [[],[],[]];
    
    for (let i = 0; i < twoDArray.length; i++){
        if (twoDArray.indexOf(twoDArray[i]) === 0){
            for(let a = 0; a < firstWord.length; a++){
                twoDArray[i].push([...letters].indexOf(firstWord[a]))
            }
            
        } else if (twoDArray.indexOf(twoDArray[i]) === 1) {            
            for(let b = 0; b < secondWord.length; b++){
                twoDArray[i].push([...letters].indexOf(secondWord[b]))
                }  
                
        } else if (twoDArray.indexOf(twoDArray[i]) === 2) {
            
            for(let c = 0; c < targetWord.length; c++){
                twoDArray[i].push([...letters].indexOf(targetWord[c]))
                }
        }; // end of if statement

    }; //  end of for loop
    
    if (parseInt(twoDArray[0].join("")) + parseInt(twoDArray[1].join("")) === parseInt(twoDArray[2].join(""))) {
        return true
    } else { return false};

    
}; // end of function

console.log(isSumEqual('acb','cba','cdb'));

// Runtime: 80 ms, faster than 77.53% of JavaScript online submissions for Check if Word Equals Summation of Two Words.
// Memory Usage: 38.8 MB, less than 14.10% of JavaScript online submissions for Check if Word Equals Summation of Two Words.