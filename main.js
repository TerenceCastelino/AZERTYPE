let score = 0;
let mots = "";
let choix = "";
let liste = "";
do {
  alert("voulez vous la liste de mots pour les animaux de la ferme ou foret");
  choix = prompt("ecrivez ferme ou foret ");
  console.log(choix);
} while (choix !== "ferme" && choix !== "foret");

switch (choix) {
  case "ferme":
    liste = [...listeDeMots2];
    break;
  case "foret":
    liste = [...listeDeMots1];
    break;
  default:
    "entrer incorect";
    break;
}
for (let i = 0; i < liste.length; i++) {
  mots = prompt(liste[i]);
  if (liste[i] == mots) {
    score += 1;
  }
  console.log(`ton score est ${score}/${i + 1}`);
}
