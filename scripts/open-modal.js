// open

function openPopup(element) {
  element.classList.add("popup_opened");
}

function openPopupByButton(button, element) {
  button.addEventListener("click", () => {
    openPopup(element);
  });
}

function resetFormByButton(button, form) {
  button.addEventListener("click", () => {
    form.reset();
  });
}

function openFormWithReset(button, element, form) {
  resetFormByButton(button, form);
  openPopupByButton(button, element);
}

function setInitialValues(button, form) {
  button.addEventListener("click", () => {
    form.name.value = profileName.textContent;
    form.description.value = profileDescription.textContent;
  });
}

function openFormWithValues(button, element, form) {
  openFormWithReset(button, element, form);
  setInitialValues(button, form);
}

export { openFormWithReset, openFormWithValues };
