function editProfile(form) {
  form.addEventListener("submit", (element) => {
    profileName.textContent = form.name.value;
    profileDescription.textContent = form.description.value;
    closePopup(form.offsetParent);
    element.preventDefault();
    form.reset();
  });
}

export { editProfile };
