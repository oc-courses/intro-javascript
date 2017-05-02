/*
Exercice : périmètre et aire d'un cercle
*/

var r;
prompt("La valeur du rayon r");
console.log(r);

function carre(r) {
	return r * r;
}

function perimetre(r) {
	return 2 * Math.PI * r;
}

function aire(r) {
	return Math.PI * carre(r);
}
console.log(perimetre(2, "*", Math.PI, "*", r));
console.log(aire(Math.PI, "*", carre(r)));
