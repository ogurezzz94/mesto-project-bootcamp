function closePopup(element) {
  element.classList.remove("popup_opened");
}

function closeModalWindow(elements, popups) {
  elements.forEach((button) => {
    button.addEventListener("click", () => closeOnElement(popups));
  });
}

// for each element remove class
function closeOnElement(popups) {
  popups.forEach((element) => {
    closePopup(element);
  });
}

function closeOnKey() {
  const item = document.querySelectorAll(".popup");
  document.body.addEventListener("keyup", (event) =>
    closeOnEscape(event, item)
  );
}

function closeOnEscape(event, item) {
  if (event.key === "Escape") {
    item.forEach((element) => {
      if (element.classList.contains("popup_opened")) {
        closePopup(element);
        document.body.removeEventListener("keyup", closeOnKey);
      }
    });
  }
}

function stopProp(arr) {
  arr.forEach((element) => {
    element.addEventListener("click", (item) => {
      item.stopPropagation();
    });
  });
}

export { closeModalWindow, closeOnKey, stopProp, closePopup, closeOnEscape };
