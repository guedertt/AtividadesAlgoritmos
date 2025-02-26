let peso1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
let peso2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
let cnpjdoze = [7,8,9,2,7,4,4,3,0,0,0,1,1,0];
let somaD1 = 0;
let somaD2 = 0;
let resultado;

for (let i = 0; i <= 11; i++) {
    somaD1 += cnpjdoze[i] * peso1[i];
}
resultado = somaD1 % 11;
let d1;
if (resultado <= 2) {
    d1 = 0;
} else {
    d1 = 11 - resultado;
}

console.log("D1 Calculado:", d1);

if (d1 !== cnpjdoze[12]) {
    console.log("Erro no primeiro dígito D1");
} else {
    console.log("D1 está correto");
}


somaD2 = 0; 
for (let i = 0; i <= 12; i++) { 
    somaD2 += cnpjdoze[i] * peso2[i];
}
resultado = somaD2 % 11;
let d2;
if (resultado < 2) {
    d2 = 0;
} else {
    d2 = 11 - resultado;
}

console.log("D2 Calculado:", d2);

if (d2 !== cnpjdoze[13]) {
    console.log("Erro no segundo dígito D2");
} else {
    console.log("D2 está correto");
}
