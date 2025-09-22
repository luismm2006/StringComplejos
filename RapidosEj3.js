function isPalindromo(string){
    let stringClear = string.toLocaleLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    let stringClearReverse = "";
    for (let i = stringClear.length-1; i >= 0; i--) {
        stringClearReverse += stringClear.charAt(i);
    }
    return stringClear===stringClearReverse;
}
console.log(isPalindromo("Dabale arroz a la zorra el abad"));