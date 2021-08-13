// comece a criar a sua função add na linha abaixo
function add (add1,add2){
    return add1+add2
}


// descomente a linha seguinte para testar sua função
 console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


// comece a criar a sua função multiply na linha abaixo
function multiply (multi1, multi2){
    let retorno = 0
    for (let i =1 ; i <= multi2 ; i++){
     retorno += add(multi1, 0)
     
     
    }
        return retorno
    
    
}


 //descomente a linha seguinte para testar sua função
console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo
function power (power1, power2){
    let retorno = 1
    for (let i =1 ; i <= power2 ; i++){
     retorno *= multiply(power1, 1)
     
     
    }
        return retorno
    
    
}
//console.log(power(5,7))

// descomente a linha seguinte para testar sua função
 console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo
function factorial (facto){
    let retorno = 1
    for (let i =1 ; i <= facto ; i++){
     retorno *= multiply(i , 1)
     
     
    }
        return retorno
    
    
}
//console.log(factorial(4))
// descomente a linha seguinte para testar sua função
 console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci


// descomente a linha seguinte para testar sua função
// console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');
