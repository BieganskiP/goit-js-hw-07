import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const list = document.querySelector(".gallery");

galleryItems.forEach((image) => {
  list.insertAdjacentHTML(
    "beforeend",
    `<li class="gallery__item"><img src="${image.preview}" alt="${image.description}" class="gallery__image" data-source="${image.original}"></img></li>`
  );
});

list.addEventListener("click", imageModal);

function imageModal(event) {
  console.log(event.target);
  if (event.target.nodeName !== "IMG") {
    return;
  }
  event.preventDefault();
  const instance = basicLightbox.create(`
      <img src="${event.target.dataset.source}" width="800" height="600">
      `);

  instance.show();

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      instance.close();
    }
  });
}
