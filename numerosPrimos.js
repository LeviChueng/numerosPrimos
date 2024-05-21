//NOME : LEVI CHUENG  
//TURMA : 123N
//MATRICULA:2024100950




// Função para verificar se um número é primo
function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

// Função para encontrar números primos até um número dado
function findPrimes(limit) {
    const primes = [];
    for (let i = 2; i <= limit; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}

// Função para interação com o usuário
function main() {
    const limit = parseInt(prompt("Digite o limite máximo para encontrar números primos:"));
    if (isNaN(limit)) {
        console.log("Por favor, insira um número válido.");
        return;
    }
    const primeNumbers = findPrimes(limit);
    console.log(`Números primos até ${limit}:`, primeNumbers);
}

// Chamando a função principal
main();