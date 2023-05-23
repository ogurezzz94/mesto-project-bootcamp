import { createCard } from "./card";

export function renderUser(user, profile) {
  profile.avatar.src = user.avatar;
  profile.name.textContent = user.name;
  profile.description.textContent = user.about;
  localStorage.setItem("UserId", user._id);
}

export function renderCards(cards, content, space) {
  space.innerHTML = "";

  for (const card of cards) {
    space.append(
      createCard({
        data: card,
        template: content,
      })
    );
  }
}
