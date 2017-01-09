/* 
Exercice : afficher le jour suivant (v3)
*/

// Nos jours
var jours = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche']

// Ce que l'on demande
var jour = null

// L'index par rapport à notre tableau
var indexJour = -1

// On demande en boucle tant que le nom du jour n'est pas bon
while (indexJour === -1) {
    jour = prompt('Entrez votre jour : ')
    indexJour = jours.indexOf(jour)
}

indexJour += 1
if (indexJour > (jours.length - 1)) {
    indexJour = 0
}

console.log(jours[indexJour])
