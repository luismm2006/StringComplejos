function rotateRight(string, n){
    let rotatedString = "";
    if (n>string.length) {
        n = n%string.length;
    }
    rotatedString = string.substring(string.length, string.length-n) + string.substring(0, string.length - n);
    return rotatedString;
}
console.log(rotateRight("Luis", 2));