var tam, escalar;
tam = parseInt(prompt("Digite o tamanho da matriz quadrada: "));

var matriz = [];
var matriz2 = [];
var matriz3 = [];


for (j = 0; j < tam; j++) {
    matriz.push([]);
}

for (j = 0; j < tam; j++) {
    for (k = 0; k < tam; k++) {
        matriz[j][k] = parseInt(prompt("Digite os elementos da matriz: "));
    }
}

document.write("<h1 class = estilo> Esta é a matriz que você digitou. </h1>");

document.write("<table border=1>");
for (i = 0; i < matriz.length; i++) {
    var linha = '<tr>';
    for (x = 0; x < matriz[i].length; x++) {
        linha = linha + "<td>" + matriz[i][x] + "</td>";
    }
    linha = linha + "</tr>"
    document.write(linha);
}
document.write("</table>");
document.write("<br>");

escalar = parseInt(prompt("Digite o número que multiplicará: "));

for (j = 0; j < tam; j++) {
    matriz2.push([]);
}

for (j = 0; j < tam; j++) {
    for (k = 0; k < tam; k++) {
        matriz2[j][k] = matriz[j][k] * escalar;
    }
}
document.write("<br>");

document.write("<h1 class = estilo> O  número que você digitou foi " + escalar + ".</h1>");
document.write("<h1 class = estilo> Então multiplicamos todos os elementos da matriz por esse número gerando uma nova matriz. </h1>");

document.write("<table border=1>");
for (i = 0; i < matriz2.length; i++) {
    var linha = '<tr>';
    for (x = 0; x < matriz2[i].length; x++) {
        linha = linha + "<td>" + matriz2[i][x] + "</td>";
    }
    linha = linha + "</tr>"
    document.write(linha);
}
document.write("</table>");
document.write("<br>");

for (j = 0; j < tam; j++) {
    matriz3.push([]);
}

for (j = 0; j < tam; j++) {
    for (k = 0; k < tam; k++) {
        matriz3[j][k] = matriz[j][k] + matriz2[j][k];
    }
}

document.write("<h1 class = estilo> Na soma da matrizes, somamos o primeio elemento de uma matriz com o segundo elemento dessa matriz, e assim sucessivamente.</h1>");
document.write("<h1 class = estilo> Por exemplo, se somarmos as duas matrizes anteriores teriamos uma nova matriz. Veja: </h1>");

document.write("<table border=1>");
for (i = 0; i < matriz3.length; i++) {
    var linha = '<tr>';
    for (x = 0; x < matriz3[i].length; x++) {
        linha = linha + "<td>" + matriz3[i][x] + "</td>";
    }
    linha = linha + "</tr>"
    document.write(linha);
}
document.write("</table>");