let nome = "Naruto"
let nivel = 10000000
let categoria 
if (nivel <= 1000){
categoria = "ferro"
} else if (nivel <= 2000){
        categoria = "bronze"
} else if  (nivel <= 5000){
        categoria = "prata"
} else if (nivel <= 7000){
        categoria = "ouro"
} else if (nivel <= 8000){
        categoria = "platina"
} else if (nivel <= 9000){
        categoria = "ascendente"
} else if (nivel <= 10000){
        categoria = "imortal"
} else {
   categoria = "radiante" 
}


switch (categoria){
        case "ferro":
        console.log("O nome do herói é " + nome + " e seu nível é ferro")
        break
        case "bronze":
        console.log("O nome do herói é " + nome + " e seu nível é bronze")
        break
        case "prata":
        console.log("O nome do herói é " + nome + " e seu nível é prata")
        break
        case "prata":
        console.log("O nome do herói é " + nome + " e seu nível é prata")
        break
        case "ouro":
        console.log("O nome do herói é " + nome + " e seu nível é ouro")
        break
        case "platina":
        console.log("O nome do herói é " + nome + " e seu nível é platina")
        break
        case "ascendente":
        console.log("O nome do herói é " + nome + " e seu nível é ascendente")
        break
        case "imortal":
        console.log("O nome do herói é " + nome + " e seu nível é imortal")
        break
        default: console.log("O nome do herói é " + nome + " e seu nível é radiante")
    
}
