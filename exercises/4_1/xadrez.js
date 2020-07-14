let peça = "Peão"

if (peça.toLowerCase() === "peão") {
    console.log("Pẽao->Move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas.");
} else if (peça.toLowerCase() === "rei") {
    console.log("Rei->Pode mover-se em qualquer direção, porém apenas uma casa por vez.");
} else if (peça.toLowerCase() === "dama") {
    console.log("Dama->Pode mover-se em qualquer direção (vertical, horizontal e diagonal), porém quantas casas quiser, desde que estejam livres.");
} else if (peça.toLowerCase() === "torre") {
    console.log("Torre->Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser.");
} else if (peça.toLowerCase() === "bispo") {
    console.log("Bispo->Move-se na diagonal, quantas casas quiser.");
} else if (peça.toLowerCase() ==="cavalo") {
    console.log("Cavalo->O movimento executado pelo Cavalo é conhecido por “um-dois” ou “em L”. Ele pode andar duas casas na horizontal e uma na vertical, ou duas na vertical e uma na horizontal, uma na horizontal e duas na vertical, e assim por diante.");
} else {
    console.log("Peça inválida!")
}