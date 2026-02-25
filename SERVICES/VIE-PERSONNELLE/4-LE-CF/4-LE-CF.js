/**************************FAQ DETTE****************************/

const FaqQuestion1 = document.querySelector('.FaqQuestion1');
const FaqReponse1 = document.querySelector('.FaqReponse1');
const FaqQuestion2 = document.querySelector('.FaqQuestion2');
const FaqReponse2 = document.querySelector('.FaqReponse2');
const FaqQuestion3 = document.querySelector('.FaqQuestion3');
const FaqReponse3 = document.querySelector('.FaqReponse3');
const FaqQuestion4 = document.querySelector('.FaqQuestion4');
const FaqReponse4 = document.querySelector('.FaqReponse4');
const FaqQuestion5 = document.querySelector('.FaqQuestion5');
const FaqReponse5 = document.querySelector('.FaqReponse5');

//OUVRIR REPONSES
FaqQuestion1.addEventListener('click', () => {
    FaqReponse1.style.display = 'block';
    FaqReponse2.style.display = 'none';
    FaqReponse3.style.display = 'none';
    FaqReponse4.style.display = 'none';
    FaqReponse5.style.display = 'none';
});

FaqQuestion2.addEventListener('click', () => {
    FaqReponse1.style.display = 'none';
    FaqReponse2.style.display = 'block';
    FaqReponse3.style.display = 'none';
    FaqReponse4.style.display = 'none';
    FaqReponse5.style.display = 'none';
});

FaqQuestion3.addEventListener('click', () => {
    FaqReponse1.style.display = 'none';
    FaqReponse2.style.display = 'none';
    FaqReponse3.style.display = 'block';
    FaqReponse4.style.display = 'none';
    FaqReponse5.style.display = 'none';
});

FaqQuestion4.addEventListener('click', () => {
    FaqReponse1.style.display = 'none';
    FaqReponse2.style.display = 'none';
    FaqReponse3.style.display = 'none';
    FaqReponse4.style.display = 'block';
    FaqReponse5.style.display = 'none';
});

FaqQuestion5.addEventListener('click', () => {
    FaqReponse1.style.display = 'none';
    FaqReponse2.style.display = 'none';
    FaqReponse3.style.display = 'none';
    FaqReponse4.style.display = 'none';
    FaqReponse5.style.display = 'block';
});

/*****************************************/