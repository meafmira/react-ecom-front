export default {
  path(path) {
    return `http://ecom/api/v1/${path}`;
  },
  get(path) {
    return fetch(this.path(path)).then(res => {
      return res.json()
    });
  }
}
