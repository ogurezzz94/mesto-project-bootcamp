function closePopup(element) {
  element.classList.remove("popup_opened");
}
//addWatchCloseModels
const handle = () => closeOnElement(popups);

function closeModalWindow(elements, popups) {
  elements.forEach((button) => {
    button.addEventListener("click", (e) => closeOnElement(popups));
  });
}

function removeWatchCloseModels(button, handle) {
  button.removeEventListener("click", handle);
}


// for each element remove class
function closeOnElement(popups) {
  popups.forEach((element) => {
    closePopup(element);

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
