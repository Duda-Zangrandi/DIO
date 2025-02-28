let vitorias = 200
let derrotas = 7
let nivel 
let saldoDeVitorias = saldo(vitorias, derrotas)

function saldo(vitorias, derrotas){
    return vitorias - derrotas
}

if (vitorias <= 10){
    nivel = "ferro"
} else if (vitorias <= 20){
    nivel = "bronze"
} else if (vitorias <= 50){
    nivel = "Prata"
} else if (vitorias <= 80){
    nivel = "Ouro"
} else if (vitorias <= 90){
    nivel = "Diamante"
} else if (vitorias <= 100){
    nivel = "Lendario"
} else {
    nivel = "Imortal"
}
 console.log("O herói tem de saldo de " + saldoDeVitorias + " e está no nível de " + nivel )
