
// profileEditForm
const alpha = "popup__submit-button"
console.dir(profileEditForm.querySelector(`button.${alpha}`))

const inputName = document.querySelector(".popup__field_input_name");
const submitButton = document.querySelector(".popup__submit-button");


// const formError = (input) => {
//   return (formErrorMessage = document.querySelector(
//     `${input.dataset.message}`
//   ));
// };
// console.log(formError(inputName))

function disableButton(button) {
  button.disabled = true;
  button.classList.add("popup__submit-button_disabled");
}
function enableButton(button) {
  button.disabled = false;
  button.classList.remove("popup__submit-button_disabled");
}


// function showError(input, message, errorClass) {
//   input.classList.add(errorClass);
//   const msg = input.nextSibling;
//   msg.classList.has()
//   .textContent = message;
// }

// function hideError(input, errorClass) {
//   input.classList.remove(errorClass);
//   input.nextSibling.textContent = "";
// }

function checkInputValidation(input, { inputErrorClass, messageErrorClass }) {
  const msg = input.nextElementSibling;
  const message = input.validationMessage;
  const isMsg = msg.classList.contains(messageErrorClass);
  console.log(isMsg, input.validity.valid, message);
  if (isMsg && input.validity.valid) {
    input.classList.remove(inputErrorClass);
    msg.textContent = "";
  } else if (isMsg && !input.validity.valid) {
    input.classList.add(inputErrorClass);
    msg.textContent = message;
  } else {
    console.error('Missing error message element');

  }
}


function onValidInput(input, objClass) {
  const form = input.closest('form');
  const button = form.querySelector(objClass.submitButtonSelector);

  input.addEventListener("input", (e) => {
    // console.log('input', e);
    checkInputValidation(input, objClass);

    // if (form.reportValidity()) {
    //   button.classList.remove(objClass.inactiveButtonClass);
    //   button.disabled = true;
    // } else {
    //   button.classList.add(objClass.inactiveButtonClass);
    //   button.disabled = false;
    // }
  });
}

function enableValidation(form, objClass) {
  const inputs = form.querySelectorAll(objClass.inputSelector);
  // const button = form.querySelector(objClass.submitButtonSelector);

  inputs.forEach((el) => onValidInput(el, objClass));
  // const valids = [];
  // inputs.forEach((el) => valids.push(el.validity.valid));
  // const formValidation = valids.every((v) => v);
  // formValidation
  //   ? button.classList.remove(inactiveButtonClass)
  //   : button.classList.add(inactiveButtonClass);

}

enableValidation(profileEditForm, { inputSelector: '.popup__field', submitButtonSelector: '.popup__submit-button', inactiveButtonClass: 'popup__button_disabled', inputErrorClass: 'popup__field', messageErrorClass: 'popup__form-error' })

// validation(inputName);

// enableValidation({
//   formSelector: '.popup__form', form
//   inputSelector: '.popup__input', input
//   submitButtonSelector: '.popup__button',
//   inactiveButtonClass: 'popup__button_disabled',
//   inputErrorClass: 'popup__input_type_error',
//   errorClass: 'popup__error_visible'
// });
