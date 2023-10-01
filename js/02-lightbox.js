import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

console.log(galleryItems);

const galleryItemLayout = (galleryItem) =>
  `<li class="gallery__item">
  <a class="gallery__link" href="${galleryItem.original}">
    <img
      class="gallery__image"
      src="${galleryItem.preview}"
      data-source="${galleryItem.original}"
      alt="${galleryItem.description}"
    />
  </a>
</li>
`;

const flatGallery = () => {
  const items = galleryItems.map((item) => galleryItemLayout(item)).join("");

  gallery.insertAdjacentHTML("afterbegin", items);
};
flatGallery();

const linkList = document.querySelectorAll(".gallery__link");

linkList.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const attrValue = link.getAttribute("href");
  });
});

let galleryImage = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
galleryImage.on("show.simplelightbox", function () {});
