export function closeElement(element) {
  element.classList.remove("popup_opened");
}

function closeElementHandler(element, button) {
  button ? button : (button = element);
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    closeElement(element);
    button.removeEventListener("click", (event) => {
      event.stopPropagation();
      closeElement(element);
    });
  });
  Array.from(element.children).forEach((item) => {
    item.addEventListener("click", (event) => {
      event.stopPropagation();
    });
  });
}

function closeKeyHandler(element, key) {
  document.body.addEventListener("keyup", (event) =>
    closeOnKey(event, element, key)
  );
}
function closeOnKey(event, element, key) {
  if (event.key === key) {
    closeElement(element);
    document.body.removeEventListener("keyup", close);
  }
}

export function openPopup(element) {
  element.classList.add("popup_opened");
  const closeButton = element.querySelector('[aria-label="Крестик"]');
  closeKeyHandler(element, "Escape");
  closeElementHandler(element);
  closeElementHandler(element, closeButton);
}

export function openFormWithReset(elements) {
  elements.button.addEventListener("click", () => {
    elements.form.reset();
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
