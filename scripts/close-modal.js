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

function closeOnEscape(item) {
  document.body.addEventListener("keyup", function (event) {
    if (event.key === "Escape") {
      item.forEach((element) => {
        closePopup(element);
      });
    }
  });
}

function stopProp(arr) {
  arr.forEach((element) => {
    element.addEventListener("click", (item) => {
      item.stopPropagation();
    });
  });
}

export { closeModalWindow, closeOnEscape, stopProp, closePopup };