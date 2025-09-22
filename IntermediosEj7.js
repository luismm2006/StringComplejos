function firstMayus(string){
    string = string.trim();
    let newString = string.charAt(0).toLocaleUpperCase();

    for (let i = 1; i < string.length; i++) {
        if(string.charAt(i)=== " "){
            if(string.charAt(i+1)!=" "){
                newString += " " + string.charAt(i+1).toLocaleUpperCase();
                i++;
            }
        }else{
                newString += string.charAt(i);
        }
        
    }
    return newString;
}
console.log(firstMayus("hola  a todos"));