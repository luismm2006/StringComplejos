function cuentaVocales(texto){
    let vocales = "aeiou";
    texto = texto.toLowerCase();
    let cantidadVocales = 0;
    for (let i = 0; i < texto.length; i++) {
        if(vocales.includes(texto[i])){
            cantidadVocales++;
        }
        
    }
    return cantidadVocales;
}
console.log(cuentaVocales("luis"))