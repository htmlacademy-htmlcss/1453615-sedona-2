'use strict'

const page = document.querySelector('.page');
const pageOverlay = page.querySelector('.page__overlay');
const searchLink = document.querySelector('#search-hotel');
const searchModal = document.querySelector('#search-modal');
const modalCloseButton = searchModal.querySelector('.modal__close');
const isEscapeKey = (evt) => evt.key === 'Escape';

const onSearchLinkClick = (evt) => {
  evt.preventDefault();
  modalOpen();
};

const onModalCloseButtonClick = () => {
  modalClose();
}

const onOverlayClick = () => {
  modalClose();
}

const onModalEscapeKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    modalClose();
  }
}

const modalOpen = () => {
  page.classList.add('page--overlay');
  pageOverlay.hidden = false;
  searchModal.classList.remove('modal--hidden');
  modalCloseButton.addEventListener('click', onModalCloseButtonClick);
  pageOverlay.addEventListener('click', onOverlayClick);
  document.addEventListener('keydown', onModalEscapeKeydown);
}

const modalClose = () => {
  page.classList.remove('page--overlay');
  pageOverlay.hidden = true;
  searchModal.classList.add('modal--hidden');
  modalCloseButton.removeEventListener('click', onModalCloseButtonClick);
  pageOverlay.removeEventListener('click', onOverlayClick);
  document.removeEventListener('keydown', onModalEscapeKeydown);
}

searchLink.addEventListener('click', onSearchLinkClick);
