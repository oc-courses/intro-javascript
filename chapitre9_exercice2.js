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
          `${this.nom} a tué ${cible.nom} et gagne ${bonusXP} points d'expérience, ${cible.inventaire.or} pièces d'or et ${cible.inventaire.cles} clé(s)`
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
    return `${this.nom} a ${this.sante} points de vie, ${this.force} en force et ${this.xp} points d'expérience, ${this.inventaire.or} pièces d'or et ${this.inventaire.cles} clé(s)`;
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
