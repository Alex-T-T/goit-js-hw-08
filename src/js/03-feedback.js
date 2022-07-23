import throttle from "lodash.throttle";

// ==============================

const form = document.querySelector('.feedback-form');
console.log(form);

// ==============================

// checkingLocalStorage();

// ==============================

function findInputInfo () {
    const emailRef = form.email.value
   
    const textRef = form.message.value
   
    const infoBox = {
        emailRef,
        textRef,
    };

    localStorage.setItem('feedback-form-state', JSON.stringify(infoBox));
};

// ==============================

form.addEventListener('input', throttle(findInputInfo, 500));

// ==============================

const infoForm = JSON.parse(localStorage.getItem('feedback-form-state'));

// ==============================

const getInfo = (event) => {
    event.preventDefault();
  
const {emailRef, textRef} = infoForm;

    if (emailRef === '' || textRef === '') {
        alert('Додайте дані в порожні поля: email/message');
    } 

    console.log(infoForm);
    form.reset();
    return;
};
    
form.addEventListener('submit', getInfo);

// ==============================

// function checkingLocalStorage() {
//     const zero = {};
//     const storageData = localStorage.getItem('feedback-form-state') ? JSON.parse(localStorage.getItem('feedback-form-state')) : zero ;
//     console.log(storageData);

//     if (storageData.email) {
//         form.email.value = storageData.emailRef;
//     }

//     if (storageData.message) {
//         form.message.value = storageData.textRef;
//     }
// }


