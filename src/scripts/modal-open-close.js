export function closePopup(element) {
  element.classList.remove("popup_opened");
  clreaCloseWatcher(element);
}

function clreaCloseWatcher(popup) {
  const btn = popup.querySelector(".popup__close-button");
  document.body.removeEventListener("keyup", popupCloseEscListener);
  popup.removeEventListener("click", popupCloseBtnListener);
  btn.removeEventListener("click", popupCloseBtnListener);
}

function popupCloseBtnListener(event) {
  event.stopPropagation();
  closePopup(document.querySelector(".popup_opened"));
}

function popupCloseEscListener(event) {
  if (event.key === "Escape") {
    closePopup(document.querySelector(".popup_opened"));
  }
}

function addElementListener(element, button) {
  if (!button) button = element;
  button.addEventListener("click", popupCloseBtnListener);
  document.body.addEventListener("keyup", popupCloseEscListener);
  stopPropagation(element);
}

function stopPropagation(element) {
  Array.from(element.children).forEach((item) => {
    item.addEventListener("click", (event) => {
      event.stopPropagation();
    });
  });
}

export function openPopup(element) {
  element.classList.add("popup_opened");
  const closeButton = element.querySelector('[aria-label="Крестик"]');
  addElementListener(element);
  addElementListener(element, closeButton);
}

export function openFormWithReset(element) {
  element.button.addEventListener("click", () => {
    setInitialButtonState(element);
    element.form.reset();
    openPopup(element.popup);
  });
}

export function openFormWithValues(element, profile) {
  openFormWithReset(element);
  element.button.addEventListener("click", () => {
    element.form.name.value = profile.name.textContent;
    element.form.description.value = profile.description.textContent;
  });
}

function setInitialButtonState(element) {
  const submitButton = element.form.querySelector("[type='submit']");
  submitButton.disabled = true;
  submitButton.classList.add("popup__submit-button_disabled");
}
