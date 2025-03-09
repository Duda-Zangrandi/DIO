class Hero {
    constructor(nome, idade, tipo){
    this.nome = nome 
    this.idade = idade
    this.tipo = tipo
}
    atacar () {
    let ataque

    switch (this.tipo){
        case "mago":
            ataque = "usou magia"
        break
        case "guerreiro":
            ataque = "usou espada"
        break
        case "monge":
            ataque = "usou artes marcias"
        break
        case "ninja":
            ataque = "usou shuriken"
        break
        default:
            ataque = "usou um ataque desconhecido"
    } 
     console.log(`O ${this.tipo} atacou usando ${ataque}`)
}
}
    
     const heroi1 = new Hero('Arthas', 30, 'guerreiro');
        heroi1.atacar()
