// afficherResultat : cette fonction prend en paramètre le résultat et le nombre total de mots proposés,
//  et affiche le résultat du joueur

function afficherResultat(resultat, iterateur) {
  let resultatScore = `${resultat} / ${iterateur}`;
  let zoneScore = document.querySelector(".zoneScore span");
  zoneScore.innerText = resultatScore;
}
// créez une fonction afficherProposition,
// qui va prendre en paramètre le mot à afficher, et afficher ce mot dans la div zoneProposition ;

function afficherProposition(motsAfficher) {
  let zoneProposition = document.querySelector(".zoneProposition");
  zoneProposition.innerText = motsAfficher;
}

// lancerBoucleDeJeu : cette fonction contient la boucle principale de jeu,
//  c'est-à-dire la boucle for qui propose les mots/phrases au joueur, et lui demande de taper ces mots. Elle prend en paramètre le tableau de mots/phrases qui sera proposé au joueur,
//  et retourne le nombre de mots/phrases correctement tapés

// function lancerBoucleDeJeu(liste) {
//   let score = 0;
//   let resultatScore;

//   for (let i = 0; i < liste.length; i++) {
//     // let mots = prompt(liste[i]);
//     if (liste[i] == mots) {
//       score++;
//     }

//     resultatScore = afficherResultat(score, i);
//   }
//     return score;
// }

// choisirPhrasesOuMots : cette fonction demande à l’utilisateur s’il veut jouer avec des phrases ou des mots.

// function choisirListe() {
//   let liste = "";
//   // let choix = "";
//   let choix = "ferme"; //pour exo
//   do {
//     alert("voulez vous la liste de mots pour les animaux de la ferme ou foret");
//     choix = prompt("ecrivez ferme ou foret ");
//     console.log(choix);
//   } while (choix !== "ferme" && choix !== "foret");

//   switch (choix) {
//     case "ferme":
//       liste = [...listeDeMots1];
//       break;
//     case "foret":
//       liste = [...listeDeMots2];
//       break;
//     default:
//       "entrer incorect";
//       break;
//   }
//   lancerBoucleDeJeu(liste);
// }

// lancerJeu : cette fonction sera la fonction principale, c’est elle qui s’occupe de lancer toutes les autres.
//  En d’autres termes, c’est elle qui va appeler les fonctions que vous venez d’écrire.
function lancerJeu() {
  let i = 0;
  let score = 0;
  let btnValiderMot = document.getElementById("btnValiderMot");
  let inputEcriture = document.getElementById("inputEcriture");
  afficherProposition(listeDeMots1[i]);
  btnValiderMot.addEventListener("click", (event) => {
    i++;
    console.log(inputEcriture.value + "  " + listeDeMots1[i - 1]);
    if (inputEcriture.value == listeDeMots1[i - 1]) {
      score++;
      console.log(score);
      afficherResultat(score, i);
    } else {
      afficherResultat(score, i);
    }
    inputEcriture.value = "";
    if (listeDeMots1[i] == undefined) {
      afficherProposition("jeu est terminer!!!");
      btnValiderMot.disabled = true;
    } else {
      afficherProposition(listeDeMots1[i]);
    }

    // console.log(inputEcriture.value);
  });
  // choisirListe();
}
