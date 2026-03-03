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