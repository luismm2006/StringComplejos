function wordcounter(text) {
    let count = 0;
    let inWord = false; 
    for (let i = 0; i < text.length; i++) {
        if (text[i] !== ' ' && !inWord) {
            inWord = true;
            count++;
        } else if (text[i] === ' ') {
            inWord = false;
        }
    }

    return count;
}

console.log(wordcounter(" esto es   una prueba ")); // 4
console.log(wordcounter("hola")); // 1
console.log(wordcounter("   ")); // 0