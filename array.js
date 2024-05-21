// Definindo o array original: Começamos com o array numeros, que contém os números de 1 a 10.
// Aqui, "pares" é o nome da variável que armazena o array com os números. 
const pares = [2, 4, 3, 1, 6, 7, 9];
console.log(`Array original ${pares}`);

// Criando a função "retornaNumerosPares": A função "retornaNumerosPares" é definida para filtrar os 
// números pares do *array*. Ela recebe um *argumento* chamado array, que representa o array original. 
// Dentro da função, usamos o método filter() para criar um novo array contendo apenas os números pares.
// array: É o parâmetro da função. Quando chamamos a função com retornaNumerosPares(numeros), o valor 
// de numeros (o array original) é passado para esse parâmetro.
// numero: É uma variável temporária dentro da função. Ela representa cada elemento do array original enquanto 
// o método filter() itera sobre eles. O operador => é usado para definir uma função anônima que verifica se o número é par. 
function retornaNumerosPares(array) {
    return array.filter(numero => numero % 2 === 0);    
}

// numerosPares: Essa variável armazena o novo array resultante após aplicarmos o filtro. O array original numeros permanece 
// inalterado.
// Portanto, embora o array original numeros seja declarado como uma constante, podemos criar novos arrays com base nele usando 
// funções como filter(). Essas funções geram novos arrays sem modificar diretamente a constante original.
const numerosPares = retornaNumerosPares(pares);
console.log(`Números pares com todas as funções ${numerosPares}`);

// De forma mais simples:
// pares é um array (ou lista) de números.
// filter é um método disponível para arrays em JavaScript. Ele cria um novo array com todos os elementos que passaram no teste 
// implementado por uma função fornecida.
// A função fornecida como argumento para o filter é chamada de callback. Ela é aplicada a cada elemento do array original.
// No caso da expressão *itens => itens % 2 === 0, estamos usando uma arrow function como callback*. Essa função verifica se o 
// elemento é par (ou seja, se o resto da divisão por 2 é igual a 0).
// Se o resultado da função callback for true, o elemento é incluído no novo array. Caso contrário, ele é ignorado.
// O novo array resultante é atribuído à variável nPares.
// Portanto, cria um novo array chamado nPares contendo apenas os elementos pares do array original pares
const nPares = pares.filter(itens => itens % 2 === 0);
console.log(`Números pares de forma reduziada ${nPares}`);
