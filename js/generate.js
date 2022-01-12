import {announcements} from "./data.js";

let templateCard = document.querySelector('#card').content;
let canvas = document.querySelector('#map-canvas');

let cards = document.createDocumentFragment();



announcements.forEach((announcement) => {
  const author = announcement[0];
  const offer = announcement[1];
  let element = templateCard.cloneNode(true);
  element.querySelector('.popup__avatar').src = author.avatar;
  element.querySelector('.popup__title').textContent = offer.title;
  element.querySelector('.popup__text--address').textContent = offer.address;
  element.querySelector('.popup__text--price').textContent =
  offer.price + ' ₽/ночь';

  let type = '';
  switch (offer.type) {
    case 'flat':
      type = 'Квартира';
      break;
    case 'palace':
      type = 'Дворец';
      break;
    case 'house':
      type = 'Дом';
      break;
    case 'bungalow':
      type = 'Бунгало';
  }
  element.querySelector('.popup__type').textContent = type;
  element.querySelector('.popup__text--capacity').textContent =
  offer.rooms + ' комнаты для ' + offer.guests + ' гостей';
  element.querySelector('.popup__text--time').textContent =
  'Заезд после ' + offer.checkin + ', выезд до ' + offer.checkout;

  let featuresList = element.querySelector('.popup__features');
  featuresList.innerHTML='';
  let offerFeatures = offer.features.split(',');
  offerFeatures.forEach((feature)=> {
    let element = document.createElement('li');
    element.classList.add("popup__feature", `popup__feature--${ feature}`);
    featuresList.appendChild(element);
  });

  element.querySelector('.popup__description').textContent = offer.description;

  let photosList = element.querySelector('.popup__photos');
  let templatePhoto = element.querySelector('.popup__photo');
  element.querySelector('.popup__photo').remove();
  let photos = offer.photos.split(',');

  photos.forEach((photo)=> {
    let photoElement = templatePhoto.cloneNode(true);
    photoElement.src=photo;
    photosList.appendChild(photoElement);
  });

  cards.appendChild(element);
});
canvas.appendChild(cards);

export {canvas};

