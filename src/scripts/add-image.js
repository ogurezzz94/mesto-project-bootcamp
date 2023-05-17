function createCard(object, template) {
  const templateElement = template.querySelector(".element").cloneNode(true);
  const templateImage = templateElement.querySelector(".element__image");
  templateImage.src = object["link"];
  templateImage.alt = object["name"];
  const templateTitle = templateElement.querySelector(".element__title");
  templateTitle.textContent = object["name"];

  return templateElement;
}

export { createCard };
