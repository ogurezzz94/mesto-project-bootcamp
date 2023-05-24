import { closeOnKey } from "./close-modal";

export function openPopup(element) {
  element.classList.add("popup_opened");
  closeOnKey();
}

export function openFormWithReset(elements) {
  elements.button.addEventListener("click", () => {
    elements.form.reset();
  });
  elements.button.addEventListener("click", () => {
    openPopup(elements.popup);
  });
}

export function openFormWithValues(element, profile) {
  openFormWithReset(element);
  element.button.addEventListener("click", () => {
    element.form.name.value = profile.name.textContent;
    element.form.description.value = profile.description.textContent;
  });
}
