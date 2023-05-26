import { closePopup } from "./modal-open-close";
import { patchProfile } from "./api";

export function editProfile(form, profile) {
  form.addEventListener("submit", (event) => {
    const name = form.name.value;
    const description = form.description.value;

    patchProfile({ name, description })
      .then((res) => {
        profile.name.textContent = res.name;
        profile.description.textContent = res.about;
        closePopup(form.offsetParent);
        form.reset();
      })
      .catch((err) => console.log("ошибка загрузки био на сервер", err));
    event.preventDefault();
  });
}
