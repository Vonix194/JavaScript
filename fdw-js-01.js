"use strict";


/*
Meu primeiro código JavaScript
*/

//console.log("Oi, mundo!");

// var n; // má prática!
let n;
const resp=true;
//resp=false;
n=3;
console.log("o valor de n é", n);

if (n==3){
    let m=5;
    console.log("o valor de m é", m);
}

let Nome ="Ramon", Idade=23, Aluno=true;

console.log("Nome:",Nome, "-", typeof Nome);
console.log("Idade:",Idade, "-",typeof Idade);
console.log("foi aluno?",Aluno, "-",typeof Aluno);

//let p1, p2, p3, media;
//p1= 5.5;
//p2= 6.5;
//media = (p1+2*p2)/3

//console.log("Média:",media.toFixed(2));
//console.log("Nota da P1:",p1, "-", typeof p1);
//console.log("Nota da P2:",p2, "-", typeof p2);
//console.log("Nota da P3:",p3, "-", typeof p3);
//console.log(`A média é ${media}`);

let var1 = "Santa";
let var2 = "Cecília";
let var3 = 23;
let var4 = 24;
let var5;
let var6 = true;
let var7 = false;

console.log("string + string?",var1 + var2);
console.log("string + número?",var3 + var4);
console.log("número + variável sem valor definido?",var4 + var5);
console.log("booleano + booleano?",var6 + var7);

console.log("3"==3);
console.log("3"===3);

console.log(3>5 || 4>5);

let media=2, conceito=" ", estado=true;

if (media>=5) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

if (media>=9){
    conceito="A";
} else if (media>=7) {
    conceito="B";
} else if (media>=5) {
    conceito="C";
} else if (media>=2) {
    conceito="D";
    estado=false
}else {
    conceito="E";
}

console.log(`O estudante está ${estado} com o conceito ${conceito} e a média ${media.toFixed(1)}`);






