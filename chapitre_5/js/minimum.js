/* 
Exercice : fonction minimum
*/

// Renvoie le minimum de 2 nombres
function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

console.log(min(4.5, 5)); // Doit afficher 4.5
console.log(min(19, 9)); // Doit afficher 9
console.log(min(1, 1)); // Doit afficher 1
