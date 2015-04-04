let cache = {};

export default {
  setItem: (key, value) => {
    console.log('Cache: ', cache);
    cache[key] = value;
  },

  getItem: (key) => {
    return cache[key];
  }
}
