export default {
  path(path) {
    return `http://ecom/api/v1/${path}`;
  }
  get(path) {
    return fetch.get(this.path(path));
  }
}
