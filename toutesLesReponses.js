// Chapitre 1
// Présentation

console.log('Baptiste');
console.log(41);
// Calculatrice

console.log(6 + 3); // 9
console.log(6 - 3); // 3
console.log(6 * 3); // 18
console.log(6 / 3); // 2
// Prédiction de résultat

console.log(4 + 5); // 9
console.log('4 + 5'); // '4 + 5'
console.log('4' + '5'); // '45'

// Chapitre 2
// Prédiction de valeurs

let a = 2;
a -= 1;
a++;
let b = 8;
b += 2;
const c = a + b * b;
const d = a * b + b;
const e = a * (b + b);
const f = a * b / a;
const g = b / a * a;

console.log(a, b, c, d, e, f, g); // 2 10 102 30 40 10 10
// Celsius - Fahrenheit

const tempCel = 37.1;

const tempFar = tempCel * 9 / 5 + 32;
console.log(`${tempCel}°C = ${tempFar}°F`);
// Permutation de variables

let nombre1 = 5;
let nombre2 = 3;

// Solution classique utilisant une variable temporaire
const temp = nombre1;
nombre1 = nombre2;
nombre2 = temp;

// Solution alternative valable uniquement pour des nombres
/* nombre1 += nombre2;
nombre2 = nombre1 - nombre2;
nombre1 -= nombre2; */

console.log(nombre1); // 3
console.log(nombre2); // 5

// Chapitre 3
// Jour suivant

const jourActuel = 'lundi';
let jourSuivant = '';

// Solution avec un if
if (jourActuel === 'lundi') {
  jourSuivant = 'mardi';
} else if (jourActuel === 'mardi') {
  jourSuivant = "mercredi";
} else if (jourActuel === 'mercredi') {
  jourSuivant = 'jeudi';
} else if (jourActuel === 'jeudi') {
  jourSuivant = 'vendredi';
} else if (jourActuel === 'vendredi') {
  jourSuivant = 'samedi';
} else if (jourActuel === 'samedi') {
  jourSuivant = 'dimanche';
} else if (jourActuel === 'dimanche') {
  jourSuivant = 'lundi';
} else {
  console.log('Erreur : jour non reconnu !');
}

// Solution alternative avec un switch
/* switch (jourActuel) {
  case 'lundi':
    jourSuivant = 'mardi';
    break;
  case 'mardi':
    jourSuivant = 'mercredi';
    break;
  case 'mercredi':
    jourSuivant = 'jeudi';
    break;
  case 'jeudi':
    jourSuivant = 'vendredi';
    break;
  case 'vendredi':
    jourSuivant = 'samedi';
    break;
  case 'samedi':
    jourSuivant = 'dimanche';
    break;
  case 'dimanche':
    jourSuivant = 'lundi';
    break;
  default:
    console.log('Erreur : jour non reconnu !');
} */

if (jourSuivant !== '') {
  console.log(`Demain, nous serons ${jourSuivant}`);
}
// Baccalauréat

const moyenne = 11;

if (moyenne < 10) {
  console.log('Le candidat est recalé');
} else if (moyenne < 12) {
  // 10 <= moyenne < 12
  console.log('Le candidat est reçu');
} else {
  // moyenne >= 12
  console.log('Le candidat est reçu avec mention');
}
// Seconde suivante

let heures = 14; // Faire varier cette variable entre 0 et 23
let minutes = 17; // faire varier cette variable entre 0 et 59
let secondes = 59; // faire varier cette variable entre 0 et 59

// On teste tous les cas d'erreur
if ((heures >= 0) && (heures <= 23) && (minutes >= 0) && (minutes <= 59) &&
    (secondes >= 0) && (secondes <= 59)) {
    secondes++; // On incrémente les secondes
    if (secondes === 60) {
        // Il faut mettre les secondes à 0 et passer à la minute suivante
        secondes = 0;
        minutes++;
        if (minutes === 60) {
            // Il faut mettre les minutes à 0 et passer à l'heure suivante
            minutes = 0;
            heures++;
            if (heures === 24) { // L'heure suivante est minuit
                heures = 0;
            }
        }
    }
    console.log(`Dans une seconde, il sera ${heures} heures, ${minutes} minutes et ${secondes} secondes`);
} else {
    console.log('Erreur : heure incorrecte !');}

// Chapitre 4
// Manège

const nbTours = 10;

console.log('Le manège démarre');

// Solution avec for
for (let tour = 1; tour <= nbTours; tour++) {
  console.log(`C'est le tour numéro ${tour}`);
}

// Solution alternative avec un while
/* let tour = 1;
while (tour <= nbTours) {
  console.log(`C'est le tour numéro ${tour}`);
  tour++;
} */

console.log("Le manège s'arrête");
// Table de multiplication

const nombre = 7; // Faites varier cette variable entre 1 et 10

console.log(`Table de multiplication de ${nombre}`);

// Solution avec un for
for (let i = 1; i <= 10; i++) {
  console.log(`${nombre} x ${i} = ${nombre * i}`);
}

// Solution alternative avec un while
/* let i = 1;
while (i <= 10) {
  console.log(`${nombre} x ${i} = ${nombre * i}`);
  i++;
} */
// FizzBuzz

// Solution avec des if/else
for (let nombre = 1; nombre <= 100; nombre++) {
  if (nombre % 3 === 0 && nombre % 5 === 0) console.log('FizzBuzz');
  else if (nombre % 3 === 0) console.log('Fizz');
  else if (nombre % 5 === 0) console.log('Buzz');
  else console.log(nombre);
}

// Solution alternative construisant le message par concaténation
/* for (let nombre = 1; nombre <= 100; nombre++) {
  let message = ''; // Message initial vide
  if (nombre % 3 === 0) {
    // on ajoute 'Fizz' au message
    message += 'Fizz';
  }
  if (nombre % 5 === 0) {
    // on ajoute 'Buzz' au message
    message += 'Buzz';
  }
  if (message === '') {
    // Message vide : on affiche le nombre
    message = nombre;
  }
  console.log(message);
} */
// Chapitre 5
// Carré d'un nombre

// Renvoie le carré de x
function carre1(x) {
  return x * x;
}

// Renvoie le carré de x
const carre2 = x => x * x;

console.log(carre1(0)); // 0
console.log(carre1(2)); // 4
console.log(carre1(5)); // 25

console.log(carre2(0)); // 0
console.log(carre2(2)); // 4
console.log(carre2(5)); // 25
// Renvoie le minimum entre a et b
const min = (a, b) => {
  if (a < b) {
    return a;
  }
  return b;
};

// Solution alternative avec une déclaration de fonction
/* function min(a, b) {
  if (a < b) {
    return a;
  }
  return b;
} */

console.log(min(4.5, 5)); // 4.5
console.log(min(19, 9)); // 9
console.log(min(1, 1)); // 1
// Calculatrice

// Effectue les 4 opérations arithmétiques de base
function calculer(nbGauche, operation, nbDroite) {
  let resultat;
  switch (operation) {
    case '+':
      resultat = nbGauche + nbDroite;
      break;
    case '-':
      resultat = nbGauche - nbDroite;
      break;
    case '*':
      resultat = nbGauche * nbDroite;
      break;
    case '/':
      resultat = nbGauche / nbDroite;
      break;
  }
  return resultat;
}

console.log(calculer(4, '+', 6)); // 10
console.log(calculer(4, '-', 6)); // -2
console.log(calculer(2, '*', 0)); // 0
console.log(calculer(12, '/', 0)); // Infinity
// Chapitre 6
// Expérience du personnage

const aurora = {
  nom: 'Aurora',
  sante: 150,
  force: 25,
  xp: 0,

  // Renvoie la description du personnage
  decrire() {
    return `${this.nom} a ${this.sante} points de vie, ${
      this.force
    } en force et ${this.xp} points d'expérience`;
  }
};

// 'Aurora a 150 points de vie, 25 en force et 0 points d'expérience'
console.log(aurora.decrire());

console.log('Aurora apprend une nouvelle compétence');
aurora.xp += 15;

// 'Aurora a 150 points de vie, 25 en force et 15 points d'expérience'
console.log(aurora.decrire());
// Modélisation d'un chien

const chien = {
    nom: 'Crockdur',
    race: 'mâtin de Naples',
    taille: 75,

    // Renvoie l'aboiement du chien
    aboyer() {
      return 'Grrr ! Grrr !';
    }
  };

  // 'Crockdur est un mâtin de Naples mesurant 75'
  console.log(`${chien.nom} est un ${chien.race} mesurant ${chien.taille} cm`);

  // 'Tiens, un chat ! Crockdur aboie : Grrr ! Grrr !'
  console.log(`Tiens, un chat ! ${chien.nom} aboie : ${chien.aboyer()}`);
  // Modélisation d'un compte bancaire

const compte = {
  titulaire: 'Alex',
  solde: 0,

  // Ajoute un montant au solde
  crediter(montant) {
    this.solde += montant;
  },

  // Renvoie la description du compte
  decrire() {
    return `titulaire: ${this.titulaire}, solde: ${this.solde}`;
  }
};

// 'titulaire: Alex, solde: 0'
console.log(compte.decrire());

compte.crediter(250);
compte.crediter(-80);

// 'titulaire: Alex, solde: 170'
console.log(compte.decrire());
// Chapitre 7
// Les Trois Mousquetaires

const mousquetaires = ['Athos', 'Porthos', 'Aramis'];

console.log('Voici les Trois Mousquetaires:');
for (let i = 0; i < mousquetaires.length; i++) {
  console.log(mousquetaires[i]);
}

mousquetaires.push("D'Artagnan");
console.log('Ils sont quatre à présent:');
mousquetaires.forEach(mousquetaire => {
  console.log(mousquetaire);
});

mousquetaires.splice(2, 1);
console.log('Le pauvre Aramie est mort...');
for (const mousquetaire of mousquetaires) {
  console.log(mousquetaire);
}
// Somme des valeurs

const nombres = [11, 3, 7, 2, 9, 10];

let somme = 0;

// Solution avec la méthode forEach()
nombres.forEach(nombre => {
  somme += nombre;
});

// Solution alternative avec une boucle for-of
/* for (const nombre of nombres) {
  somme += nombre;
} */

console.log(somme);
// Maximum d'un tableau

const valeurs = [3, 11, 7, 2, 9, 10];

// On initialise la maximum avec le 1er élément du tableau
let max = valeurs[0];

// On commence la recherche au second élément (indice 1)
for (let i = 1; i < valeurs.length; i++) {
  // Si la valeur courante est supérieure au maximum actuel...
  if (valeurs[i] > max) {
    // ... Elle devient le nouveau maximum
    max = valeurs[i];
  }
}

console.log(max);
// Chapitre 8
// Nombre de voyelles

function compterVoyelles(mot) {
  let nbVoyelles = 0;
  for (const lettre of mot) {
    const lettreMin = lettre.toLowerCase();
    if (
      lettreMin === 'a' ||
      lettreMin === 'e' ||
      lettreMin === 'i' ||
      lettreMin === 'o' ||
      lettreMin === 'u' ||
      lettreMin === 'y'
    ) {
      nbVoyelles++;
    }
  }
  return nbVoyelles;
}

console.log(compterVoyelles('RadAr')); // 2
console.log(compterVoyelles('Tic et Tac')); // 3
console.log(compterVoyelles('Oasis Oasis Oh')); // 7
// Leet Speak

// Renvoie l'équivalent 'leet speak' d'une lettre
function convertirLettreLeet(lettre) {
  // Par défaut, la lettre ne change pas
  let lettreLeet = lettre;
  switch (lettre.toLowerCase()) {
    case 'a':
      lettreLeet = '4';
      break;
    case 'b':
      lettreLeet = '8';
      break;
    case 'e':
      lettreLeet = '3';
      break;
    case 'l':
      lettreLeet = '1';
      break;
    case 'o':
      lettreLeet = '0';
      break;
    case 's':
      lettreLeet = '5';
      break;
    case 't':
      lettreLeet = '7';
      break;
  }
  return lettreLeet;
}

// Renvoie un mot converti en 'leet speak'
function convertirMotLeet(mot) {
  let motLeet = '';
  for (const lettre of mot) {
    motLeet += convertirLettreLeet(lettre);
  }
  return motLeet;
}

console.log(convertirMotLeet('Hello World!')); // 'H3110 W0r1d!'
console.log(convertirMotLeet('Noob')); // 'N008'
console.log(convertirMotLeet('Hacker')); // 'H4ck3r'
// Palindrome

// Renvoie l'inverse du mot passé en paramètre
const inverser = mot => {
  let motInverse = '';

  // Solution 1 : ajouter chaque lettre au début du mot inversé
  for (const lettre of mot) {
    motInverse = lettre + motInverse;
  }

  // Solution 2 : parcourir le mot de la fin vers le début
  /* for (let i = mot.length - 1; i >= 0; i--) {
    motInverse = motInverse + mot[i].toLowerCase();
  } */
  return motInverse;
};

// Renvoie vrai si le mot est un palindrome, faux sinon
const estPalindrome = mot => {
  // On compare les chaînes en minuscules
  return inverser(mot).toLowerCase() === mot.toLowerCase();
};

// Solution avec une autre methode
// const estPalindrome = (word) => {
// 	word = word.toLowerCase();
// 	for (let i = 0; i < word.length; i++) {
// 		if (word[i]===word[word.length-1-i]) {
// 			return true);
// 		} else {return false;}
// 	}
// }

console.log(estPalindrome('RadAr')); // true
console.log(estPalindrome('KAYAk')); // true
console.log(estPalindrome('Bora-Bora')); // false
// Chapitre 9
// Classe Chien

class Chien {
  constructor(nom, race, taille) {
    this.nom = nom;
    this.race = race;
    this.taille = taille;
  }
  // Renvoie l'aboiement du chien
  aboyer() {
    if (this.taille > 50) return "Grrr ! Grrr !";
    return "Wouaf ! Wouaf !";
  }
  // Renvoie la description du chien
  decrire() {
    return `${this.nom} est un ${this.race} mesurant ${this.taille} cm`;
  }
}

const crockdur = new Chien("Crockdur", "mâtin de Naples", 75);
// "Crockdur est un mâtin de Naples mesurant 75 cm"
console.log(crockdur.decrire());
// "Tiens, un chat ! Crockdur aboie : Grrr ! Grrr !"
console.log(`Tiens, un chat ! ${crockdur.nom} aboie : ${crockdur.aboyer()}`);

const milou = new Chien("Milou", "fox-terrier", 26);
// "Milou est un fox-terrier mesurant 26 cm"
console.log(milou.decrire());
// "Tiens, un chat ! Milou aboie : Wouaf ! Wouaf !"
console.log(`Tiens, un chat ! ${milou.nom} aboie : ${milou.aboyer()}`);
// Gestion de l'inventaire

class Personnage {
  constructor(nom, sante, force) {
    this.nom = nom;
    this.sante = sante;
    this.force = force;
    this.xp = 0; // Toujours 0 au début
    // l'inventaire est géré sous la forme d'un objet ayant deux propriétés
    this.inventaire = {
      or: 10,
      cles: 1
    };
  }
  // Attaque une cible
  attaquer(cible) {
    if (this.sante > 0) {
      const degats = this.force;
      console.log(
        `${this.nom} attaque ${
          cible.nom
        } et lui inflige ${degats} points de dégâts`
      );
      cible.sante -= degats;
      if (cible.sante > 0) {
        console.log(`${cible.nom} a encore ${cible.sante} points de vie`);
      } else {
        cible.sante = 0;
        const bonusXP = 10;
        console.log(
          `${this.nom} a tué ${
            cible.nom
          } et gagne ${bonusXP} points d'expérience, ${
            cible.inventaire.or
          } pièces d'or et ${cible.inventaire.cles} clé(s)`
        );
        this.xp += bonusXP;
        // L'inventaire de la victime est transféré à son vainqueur
        this.inventaire.or += cible.inventaire.or;
        this.inventaire.cles += cible.inventaire.cles;
      }
    } else {
      console.log(
        `${this.nom} n'a plus de points de vie et ne peut pas attaquer`
      );
    }
  }
  // Renvoie la description du personnage
  decrire() {
    return `${this.nom} a ${this.sante} points de vie, ${
      this.force
    } en force et ${this.xp} points d'expérience, ${
      this.inventaire.or
    } pièces d'or et ${this.inventaire.cles} clé(s)`;
  }
}

// "Aurora a 150 points de vie, 25 en force et 0 points d'expérience, 10 pièces d'or et 1 clé(s)"
const aurora = new Personnage("Aurora", 150, 25);

console.log(aurora.decrire());

const monstre = new Personnage("ZogZog", 20, 10);
monstre.attaquer(aurora);
aurora.attaquer(monstre); // Le monstre est tué

// "Aurora a 140 points de vie, 25 en force et 10 points d'expérience, 20 pièces d'or et 2 clé(s)"
console.log(aurora.decrire());
// Comptes bancaires

class CompteBancaire {
  constructor(titulaire) {
    this.titulaire = titulaire;
    this.solde = 0;
  }
  // Ajoute un montant au solde
  crediter(montant) {
    this.solde += montant;
  }
  // Renvoie la description du compte
  decrire() {
    return `titulaire: ${this.titulaire}, solde: ${this.solde}`;
  }
}

const listeComptes = [];

// Ajoute 3 comptes bancaires à la liste
listeComptes.push(new CompteBancaire("Alex"));
listeComptes.push(new CompteBancaire("Clovis"));
listeComptes.push(new CompteBancaire("Marco"));

// Crédite et décrit chaque compte
listeComptes.forEach(compte => {
  compte.crediter(1000);
  console.log(compte.decrire());
});
