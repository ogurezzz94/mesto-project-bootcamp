import { closePopup } from "./close-modal";

function editProfile(form, itemName, itemDescription) {
  form.addEventListener("submit", (element) => {
    itemName.textContent = form.name.value;
    itemDescription.textContent = form.description.value;
    closePopup(form.offsetParent);
    element.preventDefault();
    form.reset();
  });
}

export { editProfile };
