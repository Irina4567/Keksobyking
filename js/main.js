let getRandomIntInclusive = (min, max) =>{
  if (min<0 || max<0 || min===max) {
    return -1;
  }
  if (min > max) {
    [min, max] = [max, min];
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
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

alert(getRandomFloat(3.1,4.05,7));
alert(getRandomIntInclusive(2,7));


const AUTHOR_COUNT = 10;

const createAuthor = () => {

  return [
    author: {
      avatar:'img/avatars/user{{xx}}.png',
    },
    offer: {
      title:'',
      address:'{{location.x}}, {{location.y}}',
      price:10,
      type:'palace',
      rooms:4,
      guests:3,
      checkin:'12:00',
      checkout:'12:00',
      features:'wifi',
      description:'fhdjfh',
      photos:'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
    },
    location: {
      x:5,
      y:10,
    }
  ]
}

const authors = new Array(AUTHOR_COUNT).fill(null).map(()=> createAuthor());

alert(authors);
