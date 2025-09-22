/**
 * 
 * @param {string} text 
 */
function compressRepetitions(text){
    let car = "";
    let count = 1;
    let newString = "";
    for (let i = 0; i < text.length; i++) {
        car = text.charAt(i);
        if(car === text.charAt(i+1)){
            count++
        }else{
            newString += car+count;
            count=1;
        }
        
    }
    return newString;
}
console.log(compressRepetitions("wwwwaaadexxxxxx"));