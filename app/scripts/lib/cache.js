let cache = {};

export default {
  setItem: (key, value) => {
    sessionStorage.setItem(key, JSON.stringify(value));
  },

  getItem: (key) => {
    let item = sessionStorage.getItem(key)
      , parsedItem;
    try {
      parsedItem = JSON.parse(item);
    }
    catch (e) {
      return null;
    }
    return parsedItem;
  }
}
