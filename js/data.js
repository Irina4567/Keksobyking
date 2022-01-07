import {getRandomIntInclusive,
  getNumberLeadingZero,
  getRandomFloat,
  getRandomArrayElement,
  getRandomArrayElements} from "./util.js";

const AUTHOR_COUNT = 10;
const PRICE_MAX = 15000;
const ROOMS_MAX = 6;
const GUESTS_MAX = 10;
const LATITUDE_MIN = 35.65000;
const LATITUDE_MAX = 35.70000;
const LONGITUDE_MIN = 139.70000;
const LONGITUDE_MAX = 139.80000;
const FIXED = 5;


const titles = [
  'Однушка в Москве',
  'Двушка с бабулей в соседней комнате',
  'Комната в Питере с видом на свалку',
  'Шикарный номер в отеле',
  'Квартира в центре МКАД',
  'Трешка в Скуратово',
  'Первоклассный номер в гостинице',
  'Комната в общаге',
  'Однушка возле Белого дома',
  'Коробка возле метро',
];

const descriptions = [
  'Однушка в Москве',
  'Двушка с бабулей в соседней комнате',
  'Комната в Питере с видом на свалку',
  'Шикарный номер в отеле',
  'Квартира в центре МКАД',
  'Трешка в Скуратово',
  'Первоклассный номер в гостинице',
  'Комната в общаге',
  'Однушка возле Белого дома',
  'Коробка возле метро',
];

const types = [
  'palace', 'flat', 'house', 'bungalow',
];

const timeForCheckin = [
  '12:00', '13:00', '14:00',
];

const timeForCheckout = [
  '12:00', '13:00', '14:00',
];

const allFeatures = [
  'wifi', 'dishwasher', 'parking',
  'washer', 'elevator', 'conditioner',
];

const allPhotos = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

const createAuthor = () => {
  let author  = {
    avatar:'img/avatars/user' +getNumberLeadingZero(AUTHOR_COUNT)+ '.png',
  };
  let location = {
    x:getRandomFloat(LATITUDE_MIN, LATITUDE_MAX, FIXED),
    y:getRandomFloat(LONGITUDE_MIN, LONGITUDE_MAX, FIXED),
  };
  let offer = {
    title:getRandomArrayElement(titles),
    address: location.x + ', ' + location.y,
    price:getRandomIntInclusive(PRICE_MAX),
    type:getRandomArrayElement(types),
    rooms:getRandomIntInclusive(ROOMS_MAX),
    guests:getRandomIntInclusive(GUESTS_MAX),
    checkin:getRandomArrayElement(timeForCheckin),
    checkout:getRandomArrayElement(timeForCheckout),
    features:getRandomArrayElements(allFeatures),
    description:getRandomArrayElement(descriptions),
    photos:getRandomArrayElements(allPhotos),
  };

  return [author, offer, location];
}

const authors = new Array(AUTHOR_COUNT).fill(null).map(()=> createAuthor());

export {authors};
