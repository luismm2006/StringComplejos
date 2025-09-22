function vowelReplaceAsterisk(text){
    let vocal = "aeiou";
    for (let i = 0; i < text.length; i++) {
        if (vocal.includes(text.charAt(i))) {
            text = text.replace(text[i], "*");
        }
        
    }
    return text;
}
console.log(vowelReplaceAsterisk("Carrera"));