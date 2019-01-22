const faker = require("faker");
const {
  GENRES_COUNT,
  SONGS_COUNT,
  BANDS_COUNT,
  YEAR_MIN,
  YEAR_MAX
} = require("./constants");
const {
  getRandom,
  getRandomFromArr
} = require("./helpers");

const generateData = () => {
  let names = [];
  let genres = [];
  let data = [];

  for (let i = 1; i < BANDS_COUNT; i++) {
    names.push(faker.random.word());
  }

  for (let i = 0; i < GENRES_COUNT; i++) {
    genres.push(faker.random.word());
  }

  for (let i = 0; i < SONGS_COUNT; i++) {
    data[i] = {
      band: getRandomFromArr(names),
      song: faker.random.words(),
      genre: getRandomFromArr(genres),
      year: getRandom(YEAR_MIN, YEAR_MAX)
    }
  }

  return data;
}

module.exports = generateData;
