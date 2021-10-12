let: peso = 110

if (peso >99) {
    console.log ("A peça possui um peso adequado, pode ser  cadastrada")
    
}else {
    console.log ("A peça possui peso inadequado, não pode ser cadastrada")
}
let lista_de_peças = ["Volante","Bateria","Lanterna","Cambio","Amortecedor","Vela","Embreagem","Pneus","Disco de freio","Buzina" ]

if (lista_de_peças.length <10) {
    console.log ("A lista tem espaço disponível")
    
} else {
    console.log ("A lista não tem espaço disponível")
}

let Nome_da_peça = "vela" // entre aspas é uma string

if (Nome_da_peça.length >3) {
    console.log ("Nome válido")
    
} else {
    console.log ("Nome inválido, é necessário que possua mais de 3 caracteres")
}