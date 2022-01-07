let randomNumbers = [];

let getRandomIntInclusive = (max) =>{
  let min = 1;
  if (max<0 || min===max) {
    return -1;
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

let getNumberLeadingZero = (max) =>{
  let r = String(getRandomIntInclusive(max));
  while (randomNumbers.find(curr => curr == r)) {
    r = String(getRandomIntInclusive(max));
  }
  randomNumbers.push(r);
  let result ='0';
  if (r==='10') {
    result='';
  }
  return result + r;
};

let getRandomFloat = (min, max, fixed) => {
  if (min<0 || max<0 || min===max) {
    return -1;
  }
  if (min > max) {
    [min, max] = [max, min];
  }
  return Math.random().toFixed(fixed) *(max-min) + min;
};

let getRandomArrayElement = (array) => {
  return array[getRandomIntInclusive(array.length-1)];
}

let shuffle = (numPool)=> {
  for(let j, x, i = numPool.length; i; j = parseInt(Math.random() * i), x = numPool[--i], numPool[i] = numPool[j], numPool[j] = x);
  return numPool;
};

let getRandomArrayElements = (array)=> {
  const r = getRandomIntInclusive(array.length-1);
  let numPool = Array.from({ length: array.length }, (v, i) =>  i);
  numPool = shuffle(numPool);
  let result='';
  for (let i=0; i<r; i++) {
    result += array[numPool[i]];
    if (i!=r-1) {
      result +=', ';
    }
  }
  return result;
}

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

console.log(authors);

