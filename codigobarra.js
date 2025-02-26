let CodigoDeBarras = "7890000000000";
let arraycodigodebarras = CodigoDeBarras.split("").map(Number);
let soma = 0;

for (let i = 0; i < 12; i++) { 
    if (i % 2 == 0) {
        soma += arraycodigodebarras[i] * 1;
    } else {
        soma += arraycodigodebarras[i] * 3;
    }
}

let digitoVerificadorCorreto = (10 - (soma % 10)) % 10;
let verificadorCorreto = digitoVerificadorCorreto === arraycodigodebarras[12];

// Extração de informações do código de barras
let pais = CodigoDeBarras.substring(0, 3);
let fabricante = CodigoDeBarras.substring(3, 7);
let produto = CodigoDeBarras.substring(7, 12);

// Base de dados simulada
let baseDeDados = {
    "789": "Brasil",
    "880": "Coreia do Sul",
    "000": "EUA / Canadá",
    "690": "China"
};

let nomePais = baseDeDados[pais] || "Desconhecido";

console.log(`Código de Barras: ${CodigoDeBarras}`);
console.log(`País de Origem: ${nomePais} (${pais})`);
console.log(`Código do Fabricante: ${fabricante}`);
console.log(`Código do Produto: ${produto}`);

if (verificadorCorreto) {
    console.log("O verificador está correto.");
} else {
    console.log("O verificador está incorreto.");
}
