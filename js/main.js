import gallery from './gallery-items.js';

const galleryArr = document.querySelector('ul.js-gallery');
const galleryItems = addGalleryItems(gallery);

galleryArr.insertAdjacentHTML('beforeend', galleryItems);

function addGalleryItems(gallery) {
    // event.preventDefault();
    return gallery.map(({ original, preview, description }) => {
        return `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    }).join('');
};

