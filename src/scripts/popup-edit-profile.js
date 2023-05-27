import { closePopup } from "./modal-open-close";
import { patchProfile } from "./api";
import { loader } from "./utils";

export function editProfile(form, profile) {
  form.addEventListener("submit", (event) => {
    const name = form.name.value;
    const description = form.description.value;
    loader(form, "Сохранение...");
    patchProfile({ name, description })
      .then((res) => {
        profile.name.textContent = res.name;
        profile.description.textContent = res.about;
        loader(form, "Сохранить");
        closePopup(form.offsetParent);
        form.reset();
      })
      .catch((err) => {
        console.log("ошибка загрузки био на сервер", err);
        loader(form, "Сохранить");
      });
    event.preventDefault();
  });
}
