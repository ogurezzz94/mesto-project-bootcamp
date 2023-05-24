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

function closeOnKey() {
  const popups = document.querySelectorAll(".popup");
  document.body.addEventListener("keyup", (event) =>
    closeOnEscape(event, popups)
  );
}

function closeOnEscape(event, items) {
  if (event.key === "Escape") {
    items.forEach((element) => {
      if (element.classList.contains("popup_opened")) {
        closeElement(element);
        document.body.removeEventListener("keyup", closeOnKey);
      }
    });
  }
}

export function openPopup(element) {
  element.classList.add("popup_opened");
  const closeButton = element.querySelector('[aria-label="Крестик"]');
  closeOnKey();
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
