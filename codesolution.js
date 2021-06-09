const isSumEqual = (firstWord, secondWord, targetWord) => {
    let letters = new Set(['a','b','c','d','e','f','g','h','i','j']);
    
    let array = [firstWord.split(""),secondWord.split(""),targetWord.split("")];
    let newArray = [];
    
    for (let i = 0; i < array.length; i++){
        
       for (let k=0; k < array[i].length; k++){
           newArray.push([...letters].indexOf(array[i][k]))
           }
       }
    }
    console.log(array);
    
}

console.log(isSumEqual('acb','cba','cdb'));