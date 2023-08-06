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

/**
 * Cette fonction construit et affiche l'email.
 * @param {string} nom : le nom du joueur
 * @param {string} email : l'email de la personne avec qui il veut partager son score
 * @param {string} score : le score.
 */
function afficherEmail(nom, email, score) {
  let mailto = `mailto:${email}?subject=Partage du score Azertype&body=Salut, je suis ${nom} et je vais de réaliser le score ${score} sur le site d'Azertype !`;
  location.href = mailto;
}

// lancerJeu : cette fonction sera la fonction principale, c’est elle qui s’occupe de lancer toutes les autres.
//  En d’autres termes, c’est elle qui va appeler les fonctions que vous venez d’écrire.
function lancerJeu() {
  initAddEventListenerPopup();
  let i = 0;
  let score = 0;
  let liste = [...listeDeMots1];
  let btnValiderMot = document.getElementById("btnValiderMot");
  let inputEcriture = document.getElementById("inputEcriture");
  afficherProposition(liste[i]);
  btnValiderMot.addEventListener("click", (event) => {
    i++;

    if (inputEcriture.value == liste[i - 1]) {
      score++;
      console.log(score);
      afficherResultat(score, i);
    } else {
      afficherResultat(score, i);
    }
    inputEcriture.value = "";
    if (liste[i] == undefined) {
      afficherProposition("jeu est terminer!!!");
      btnValiderMot.disabled = true;
    } else {
      afficherProposition(liste[i]);
    }
  });

  let listeBtnRadio = document.querySelectorAll(".optionSource input");
  for (index = 0; index < listeBtnRadio.length; index++) {
    listeBtnRadio[index].addEventListener("click", (e) => {
      console.log(e.target.value);
      if (e.target.value == 2) {
        liste = [...listeDeMots2];
      }
      if (e.target.value == 1) {
        liste = [...listeDeMots1];
      }
      let form = document.querySelector("form");
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        let baliseNom = document.getElementById("nom");
        let nom = baliseNom.value;
        let baliseEmail = document.getElementById("email");
        let email = baliseEmail.value;

        let emailScor = `${score}/${i}`;
        afficherEmail(nom, email, score);
      });
      afficherProposition(liste[i]);
    });
  }
}
