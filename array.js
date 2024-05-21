// Definindo o array original: Começamos com o array numeros, que contém os números de 1 a 10.
// Aqui, "pares" é o nome da variável que armazena o array com os números. 
const pares = [2, 4, 3, 1, 6, 7, 9];

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

console.log(numerosPares);
console.log(pares);

