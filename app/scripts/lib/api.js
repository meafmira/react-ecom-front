let Api = {
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },

  path(path) {
    return `http://ecom-back.herokuapp.com/api/v1/${path}`;
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
            console.log("C: ", res);
            resolve(res);
          })
        }
        else {
          res.json().then(res => {
            console.log("E: ", res);
            reject(res);
          })
        }
      })
      .catch(res => {
        res.json().then(res => {
          console.log("E: ", res);
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
