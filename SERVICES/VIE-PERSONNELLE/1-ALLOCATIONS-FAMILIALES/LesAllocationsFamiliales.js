/****************FORMULAIRE DE CONNEXION****************/

//VARIABLES DES BOUTONS DU FORMULAIRE DE CONNEXION
const Connexion = document.querySelector('.BoutonConnexion');
const PopUp = document.querySelector('.PopUpConnexion');
const Fermer = document.querySelector('.FermerConnexion');
const FormulaireConnexion = document.querySelector('.FormulaireConnexion');

//OUVRIR POP UP DE CONNEXION
Connexion.addEventListener('click', () => {
    PopUp.style.display = 'block';   
});

//FERMER POP UP DE CONNEXION
Fermer.addEventListener('click', () => {
   PopUp.style.display = 'none'; 
});

//FERMER POP UP EN CLIQUANT EN DEHORS DE CELLE-CI
window.addEventListener('click', (e) => {
    if (e.target === PopUp) {
        PopUp.style.display = 'none';
    }
});

/**************************FAQ DETTE****************************/

const FaqQuestionEnfantTravaille = document.querySelector('.FaqQuestionEnfantTravaille');
const FaqReponseEnfantTravaille = document.querySelector('.FaqReponseEnfantTravaille');
const FaqQuestion3Enfants = document.querySelector('.FaqQuestion3Enfants');
const FaqReponse3Enfants = document.querySelector('.FaqReponse3Enfants');
const FaqQuestionSeparation = document.querySelector('.FaqQuestionSeparation');
const FaqReponseSeparation = document.querySelector('.FaqReponseSeparation');
const FaqQuestionFoyer = document.querySelector('.FaqQuestionFoyer');
const FaqReponseFoyer = document.querySelector('.FaqReponseFoyer');
const FaqQuestionTemps = document.querySelector('.FaqQuestionTemps');
const FaqReponseTemps = document.querySelector('.FaqReponseTemps');

//OUVRIR REPONSES
FaqQuestionEnfantTravaille.addEventListener('click', () => {
    FaqReponseEnfantTravaille.style.display = 'block';
    FaqReponse3Enfants.style.display = 'none';
    FaqReponseSeparation.style.display = 'none';
    FaqReponseFoyer.style.display = 'none';
    FaqReponseTemps .style.display = 'none';
});

FaqQuestion3Enfants.addEventListener('click', () => {
    FaqReponseEnfantTravaille.style.display = 'none';
    FaqReponse3Enfants.style.display = 'block';
    FaqReponseSeparation.style.display = 'none';
    FaqReponseFoyer.style.display = 'none';
    FaqReponseTemps.style.display = 'none';
});

FaqQuestionSeparation.addEventListener('click', () => {
    FaqReponseEnfantTravaille.style.display = 'none';
    FaqReponse3Enfants.style.display = 'none';
    FaqReponseSeparation.style.display = 'block';
    FaqReponseFoyer.style.display = 'none';
    FaqReponseTemps.style.display = 'none';
});

FaqQuestionFoyer.addEventListener('click', () => {
    FaqReponseEnfantTravaille.style.display = 'none';
    FaqReponse3Enfants.style.display = 'none';
    FaqReponseSeparation.style.display = 'none';
    FaqReponseFoyer.style.display = 'block';
    FaqReponseTemps.style.display = 'none';
});

FaqQuestionTemps.addEventListener('click', () => {
    FaqReponseEnfantTravaille.style.display = 'none';
    FaqReponse3Enfants.style.display = 'none';
    FaqReponseSeparation.style.display = 'none';
    FaqReponseFoyer.style.display = 'none';
    FaqReponseTemps.style.display = 'block';
});

/*****************************************/