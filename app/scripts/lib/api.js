let Api = {
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },

  handleResponse(fetchPromise) {
    let responsePromise = new Promise((resolve, reject) => {
      fetchPromise
      .then(res => {
        if (/^2..$/.test(res.status)) {
          res.json().then(res => {
            resolve(res);
          })
        }
        else {
          res.json().then(res => {
            reject(res);
          })
        }
      })
      .catch(res => {
        res.json().then(res => {
          reject(res);
        })
      })
    })
    return responsePromise;
  },

  path(path) {
    return `http://ecom/api/v1/${path}`;
  },

  patch(path, data) {
    let fetchPromise = fetch(this.path(path), {
      method: 'PATCH',
      body: JSON.stringify(data),
      headers: Api.headers
    });

    return Api.handleResponse(fetchPromise);
  },

  post(path, data) {
    let fetchPromise = fetch(this.path(path), {
      method: 'post',
      body: JSON.stringify(data),
      headers: Api.headers
    });

    return Api.handleResponse(fetchPromise);
  },

  delete(path) {
    let fetchPromise = fetch(this.path(path), {
      method: 'delete',
      headers: Api.headers
    });

    return Api.handleResponse(fetchPromise);
  },

  get(path) {
    let fetchPromise = fetch(this.path(path), {
      headers: Api.headers
    });

    return Api.handleResponse(fetchPromise);
  }
}

export default Api;
