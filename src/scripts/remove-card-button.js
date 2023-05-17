// remove card

function removeCardButton(button) {
  button.addEventListener("click", () => {
    button.parentElement.remove();
  });
}

export { removeCardButton }
