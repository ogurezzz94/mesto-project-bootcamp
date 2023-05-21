// open
import { closeOnKey } from "./close-modal";

export function openPopup(element) {
  element.classList.add("popup_opened");
  closeOnKey();
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

export function openFormWithReset(button, element, form) {
  resetFormByButton(button, form);
  openPopupByButton(button, element);
}

function setInitialValues(button, form, profile) {
  button.addEventListener("click", () => {
    form.name.value = profile.name.textContent;
    form.description.value = profile.description.textContent;
  });
}

export function openFormWithValues(
  button,
  element,
  form,
  itemName,
  itemDescription
) {
  openFormWithReset(button, element, form);
  setInitialValues(button, form, itemName, itemDescription);
}
