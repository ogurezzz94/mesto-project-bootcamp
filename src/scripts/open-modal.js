// open
import { closeOnKey } from "./close-modal";

function openPopup(element) {
  element.classList.add("popup_opened");
  closeOnKey()
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

function setInitialValues(button, form, itemName, itemDescription) {
  button.addEventListener("click", () => {
    form.name.value = itemName.textContent;
    form.description.value = itemDescription.textContent;
  });
}

function openFormWithValues(button, element, form, itemName, itemDescription) {
  openFormWithReset(button, element, form);
  setInitialValues(button, form, itemName, itemDescription);
}

export { openFormWithReset, openFormWithValues, openPopup };
