export function removeCardButton(button) {
  button.addEventListener("click", () => {
    button.parentElement.remove();
  });
}
