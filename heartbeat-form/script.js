
// includes //

// const numeleMeu = "Cristian";

// if (numeleMeu.includes("sti")) {
//     alert("Numele tau include sti")
// };

const firstNameInput = document.querySelector('[name="first-name"]');
const firstNameText = document.querySelector('.first-name-text');
const lastNameInput = document.querySelector('[name="last-name"]');
const lastNameText = document.querySelector('.last-name-text');
const emailInput = document.querySelector('[name="email"]');
const emailText = document.querySelector('.email-text');
const locationInput = document.querySelector('[name="location"]');
const locationText = document.querySelector('.location-text');
const linkedinProfileInput = document.querySelector('[name="linkedin-profile"]');
const linkedinProfileText = document.querySelector('.linkedin-text');


const handleFirstNameInput = () => {
    firstNameText.innerText = firstNameInput.value;
};

firstNameInput.addEventListener('input', handleFirstNameInput);

const handleLastNameInput = () => {
    lastNameText.innerText = lastNameInput.value;
};

lastNameInput.addEventListener('input', handleLastNameInput);

const handleEmailInput = () => {
    emailText.innerText = emailInput.value;
};

emailInput.addEventListener('input', handleEmailInput);

const handleLocationInput = () => {
    locationText.innerText = locationInput.value;
};

locationInput.addEventListener('input', handleLocationInput);

const handleLinkedinProfileInput = () => {
    linkedinProfileText.innerText = linkedinProfileInput.value;
};

linkedinProfileInput.addEventListener('input', handleLinkedinProfileInput);



