const showError = (obj, input, errorMessage) => {
  const error = input.nextElementSibling;
  input.classList.add(obj.inputErrorClass);
  error.textContent = errorMessage.slice(0, 35);
};

const hideError = (obj, input) => {
  const error = input.nextElementSibling;
  input.classList.remove(obj.inputErrorClass);
  error.textContent = "";
};

const checkInputValidity = (obj, input) => {
  if (input.validity.valid) {
    hideError(obj, input);
  } else {
    showError(obj, input, input.validationMessage);
  }
};

const setEventListeners = (form, obj) => {
  const inputs = form.querySelectorAll(obj.inputSelector);
  toggleButtonState(obj, form, inputs);
  inputs.forEach((input) => {
    input.addEventListener("input", function () {
      checkInputValidity(obj, input);
      toggleButtonState(obj, form, inputs);
    });
  });
};

export function enableValidation(obj) {
  const forms = document.querySelectorAll(obj.formSelector);
  forms.forEach((form) => {
    setEventListeners(form, obj);
  });
}

function hasInvalidInput(inputList) {
  return Array.from(inputList).some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

function toggleButtonState(obj, form, inputs) {
  const button = form.querySelector(obj.submitButtonSelector);
  if (hasInvalidInput(inputs)) {
    button.classList.add(obj.inactiveButtonClass);
    button.disabled = true;
  } else {
    button.classList.remove(obj.inactiveButtonClass);
    button.disabled = false;
  }
}
