var isSumEqual = function(firstWord, secondWord, targetWord) {
  let letters = new Set(['a','b','c','d','e','f','g','h','i','j']);
  let num1 = [];
  let num2 = [];
  let target = [];
  
  for(let a = 0; a < firstWord.length; a++){
      num1.push([...letters].indexOf(firstWord[a]))
  }
  
  for(let b = 0; b < secondWord.length; b++){
  num2.push([...letters].indexOf(secondWord[b]))
  }
  
  for(let c = 0; c < targetWord.length; c++){
  target.push([...letters].indexOf(targetWord[c]))
  }
  
if (parseInt(num1.join("")) + parseInt(num2.join("")) === parseInt(target.join(""))){
    return true
} else {return false}
  
};

console.log(isSumEqual('acb','cba','cdb'));