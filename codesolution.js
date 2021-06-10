var isSumEqual = function(firstWord, secondWord, targetWord) {
    let letters = new Set(['a','b','c','d','e','f','g','h','i','j']);
    let num1 = [];
    let num2 = [];
    let targetWordIndex = [];
    
    for(let a = 0; a < firstWord.length; a++){
        num1.push([...letters].indexOf(firstWord[a]))
    }
    
    for(let b = 0; b < secondWord.length; b++){
    num2.push([...letters].indexOf(secondWord[b]))
    }
    
  console.log(parseInt(num1.join("")) + parseInt(num2.join("")))
    
};

console.log(isSumEqual('acb','cba','cdb'));