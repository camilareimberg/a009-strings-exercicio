const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
console.log("Caracteres antes de remover o espaço:", minhaString.length)
//Se fizesse ${minhaString.trim().length} também daria certo, pois está tudo na mesma linha

console.log(`A frase sem espaços desnecessários tem ${minhaString.trim().length} caracteres.`);

//a) Remova o excesso de espaços no final da string;
//precisa usar outra variável para receber o trim, se não, não funciona


const minhaString2=minhaString.trim()
console.log("Caracteres depois de remover o espaço:", minhaString2.length)

//c) Substitua os traços `________` por “sticioso”.
const novaFrase= minhaString.replaceAll ("________","sticioso")
console.log(novaFrase)