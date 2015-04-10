let Api = {
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },

  path(path) {
    return `http://ecom/api/v1/${path}`;
  },

  patch(path, data) {
    let responsePromise = new Promise((resolve, reject) => {
      fetch(this.path(path), {
        method: 'PATCH',
        body: JSON.stringify(data),
        headers: Api.headers
      })
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
    });

    return responsePromise;
  },

  post(path, data) {
    let responsePromise = new Promise((resolve, reject) => {
      fetch(this.path(path), {
        method: 'post',
        body: JSON.stringify(data),
        headers: Api.headers
      })
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
    });

    return responsePromise;
  },

  get(path) {
    return fetch(this.path(path), { headers: Api.headers }).then(res => {
      return res.json()
    });
  }
}

export default Api;
