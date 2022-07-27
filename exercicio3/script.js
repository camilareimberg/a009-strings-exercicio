//Crie a const para a frase aqui
const frase= "Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\""
console.log(frase)
//outra forma de fazer, com aspas simples
const frase1= 'Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"'
console.log(frase)

//b) Crie uma nova string a partir da primeira, trocando **verde** por **rosa**, e **azul** por **laranja**;
const novaFrase= frase.replace ("verde","rosa").replace("azul","laranja")
console.log(novaFrase)

//c) Verifique se a nova string inclui **verde**, e se inclui **laranja**.
console.log("Nova frase inclui verde? " +novaFrase.includes("verde"))
console.log(novaFrase.includes("verde"))
console.log("Nova frase incluir laranja?")
//se não colocar o console.log, não imprime se é false ou true
console.log(novaFrase.includes("laranja"))

//uppercase nesse caso substituiria a frase inteira, por isso usamos o replace pq ai substitui só a parte da vírgula que queremos
const fraseMaiuscula= frase.replace ("mas não deixe o gato sair", "MAS NÃO DEIXE O GATO SAIR")
console.log(fraseMaiuscula)

//se quisesse utilizar o uppercase para deixar o trecho maiúsculo
console.log(frase.replace ("mas não deixe o gato sair", `${"mas não deixe o gato sair".toUpperCase()}`))

console.log(`${"Teste Upper Case".toUpperCase()}`)