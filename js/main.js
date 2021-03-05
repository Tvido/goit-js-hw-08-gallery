import gallery from './gallery-items.js';

const galleryItems = addGalleryItems(gallery);
const galleryArr = document.querySelector('ul.js-gallery');
const modalWindowRef = document.querySelector('div.js-lightbox');
const modalImageRef = document.querySelector('img.lightbox__image');
const closeModalBtnRef = document.querySelector('button[data-action]');
const modaleOverlayRef = document.querySelector('div.lightbox__overlay');

galleryArr.insertAdjacentHTML('beforeend', galleryItems);

galleryArr.addEventListener('click', getOriginalImage);
closeModalBtnRef.addEventListener('click', modalClose);
modaleOverlayRef.addEventListener('click', modalClose);


function addGalleryItems(gallery) {
  return gallery.map(({ original, preview, description }) => {
    return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
  }).join('');
};

galleryArr.addEventListener('click', getOriginalImage);

function getOriginalImage(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  };

  const imageOrigin = event.target.dataset.source;
  const imageAlt = event.target.alt;
  const dataIndex = event.target.dataset.index;
  modalOpen(imageOrigin, imageAlt, dataIndex);
};

// Закритя 1
// function keyDownModuleWindow(event) {
//   if (!modalWindowRef.classList.contains('is-open')) {
//     return;
//   };

//   if (event.code === 'Escape') {
//     return modalClose();
//   } 
// };

// Закриття остаточний
function keyDownModuleWindow(event) {
    if (event.code === 'Escape') {
    return modalClose();
  }  return;
};


function modalOpen(image, alt, index) {
  modalWindowRef.classList.add('is-open');
  modalImageRef.src = image;
  modalImageRef.alt = alt;
  modalImageRef.dataset.index = index;

  window.addEventListener('keydown', event => keyDownModuleWindow(event));
};

function modalClose() {
  modalWindowRef.classList.remove('is-open');
  modalImageRef.src = '';
  modalImageRef.alt = '';
  delete modalImageRef.dataset.index;

  window.removeEventListener('keydown', event => keyDownModuleWindow(event));
};