// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';

// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const galleryRef = (items) => 
    items.map(item => `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>`).join(' ');    

const addGalleryItems = galleryRef(galleryItems);
// console.log(addGalleryItems);

gallery.insertAdjacentHTML('afterbegin', addGalleryItems);


const lightbox = new SimpleLightbox('.gallery a', {captionsData: "alt", captionDelay: 250, captionPosition: "bottom"});
