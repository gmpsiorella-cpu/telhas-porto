(() => {
  const track = document.querySelector("[data-gallery-track]");
  const previousButton = document.querySelector("[data-gallery-prev]");
  const nextButton = document.querySelector("[data-gallery-next]");
  const dialog = document.querySelector("[data-gallery-dialog]");
  const dialogImage = document.querySelector("[data-gallery-image]");
  const dialogCaption = document.querySelector("[data-gallery-caption]");
  const closeButton = document.querySelector("[data-gallery-close]");

  const moveGallery = (direction) => {
    if (!track) return;

    track.scrollBy({
      left: direction * Math.max(track.clientWidth * 0.82, 280),
      behavior: "smooth",
    });
  };

  previousButton?.addEventListener("click", () => moveGallery(-1));
  nextButton?.addEventListener("click", () => moveGallery(1));

  document.querySelectorAll("[data-gallery-open]").forEach((card) => {
    card.addEventListener("click", (event) => {
      if (!dialog?.showModal || !dialogImage || !dialogCaption) return;

      event.preventDefault();
      const thumbnail = card.querySelector("img");
      dialogImage.src = card.getAttribute("href") || "";
      dialogImage.alt = thumbnail?.alt || "Produto Porto";
      dialogCaption.textContent = card.dataset.title || thumbnail?.alt || "";
      dialog.showModal();
    });
  });

  closeButton?.addEventListener("click", () => dialog?.close());

  dialog?.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
})();
