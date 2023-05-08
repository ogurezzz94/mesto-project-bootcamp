function openPreview(item) {
  item.addEventListener("click", () => {
    popupImage.src = item.src;
    popupImage.alt = item.alt;
    popupImageDescription.textContent = item.alt;
    openPopup(popupPreview);
  });
}

export { openPreview };
