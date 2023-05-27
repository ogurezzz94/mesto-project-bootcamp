import { closePopup } from "./modal-open-close";
import { patchAvatar } from "./api";
import { loader } from "./utils";

export function editAvatar({ form }, { avatar }) {
  form.addEventListener("submit", (element) => {
    const image = form.avatar.value;
    loader(form, "Сохранение...");
    patchAvatar(image)
      .then((res) => {
        avatar.src = res.avatar;
        loader(form, "Сохранить");
        closePopup(form.offsetParent);
        form.reset();
      })
      .catch((err) => {
        console.log("ошибка загрузки аватара на сервер", err);
        loader(form, "Сохранить");
      })
      .finally();
    element.preventDefault();
  });
}
