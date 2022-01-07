
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

export {
  getRandomIntInclusive,
  getNumberLeadingZero,
  getRandomFloat,
  getRandomArrayElement,
  getRandomArrayElements
}
