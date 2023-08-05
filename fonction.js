// afficherResultat : cette fonction prend en paramètre le résultat et le nombre total de mots proposés,
//  et affiche le résultat du joueur

function afficherResultat(resultat, iterateur) {
  console.log(`score =${resultat} / ${iterateur + 1}`);
}

// lancerBoucleDeJeu : cette fonction contient la boucle principale de jeu,
//  c'est-à-dire la boucle for qui propose les mots/phrases au joueur, et lui demande de taper ces mots. Elle prend en paramètre le tableau de mots/phrases qui sera proposé au joueur,
//  et retourne le nombre de mots/phrases correctement tapés

function lancerBoucleDeJeu(liste) {
  for (let i = 0; i < liste.length; i++) {
    let mots = prompt(liste[i]);
    if (liste[i] == mots) {
      score += 1;
    }

    afficherResultat(score, i);
  }
  return score;
}

// choisirPhrasesOuMots : cette fonction demande à l’utilisateur s’il veut jouer avec des phrases ou des mots.
function choisirListe() {
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
  lancerBoucleDeJeu(liste);
}

// lancerJeu : cette fonction sera la fonction principale, c’est elle qui s’occupe de lancer toutes les autres.
//  En d’autres termes, c’est elle qui va appeler les fonctions que vous venez d’écrire.
function lancerJeu() {
  choisirListe();
}
