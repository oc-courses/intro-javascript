var note1 = Number(prompt("entrez note1"));
var note2 = Number(prompt("entrez note2"));
var note3 = Number(prompt("entrez note3"));
var note4 = Number(prompt("entrez note4"));
var total = note1 + note2 + note3 + note4;
var moyenne = total / 4;
console.log(moyenne);

if ((moyenne >= 0) && (moyenne < 10)){
    console.log("l'éléve a "+ moyenne+ " de moyenne donc il est recalé ");
} else if ((moyenne >= 10) && (moyenne <= 12)){
    console.log("l'éléve a "+ moyenne+ " de moyenne donc il est reçu");}
    else if(moyenne >= 12){
        console.log("l'éléve a "+ moyenne+ " de moyenne donc il est reçu avec mention");
    }else {
        console.log("erreur note")
    }
