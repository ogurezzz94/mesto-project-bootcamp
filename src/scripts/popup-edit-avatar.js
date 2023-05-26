import { closePopup } from "./modal-open-close";
import { patchAvatar } from "./api";

export function editAvatar({ form }, { avatar }) {
  form.addEventListener("submit", (element) => {
    const image = form.avatar.value;

    patchAvatar(image)
      .then((res) => {
        avatar.src = res.avatar;
        closePopup(form.offsetParent);
        form.reset();
      })
      .catch((err) => console.log("ошибка загрузки аватара на сервер", err));
    element.preventDefault();
  });
}
