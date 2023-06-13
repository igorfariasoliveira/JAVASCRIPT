let num = [5,8,2,9,3]
num[5] = 4
num.push(7)

/*console.log(`Nosso vetor tem ${num.length} elementos`)
console.log(`${num}`)
console.log(num[3])*/

/*for(let pos = 0; pos < num.length; pos ++){
    console.log(`A posição ${pos} tem valor ${num[pos]}`)
}*/

/*for ( let pos in num){
    console.log(`A posição ${pos} tem valor ${num[pos]}`)
}*/

let pos = num.indexOf(8)

console.log(` O valor 8 está na posição ${pos}`)
