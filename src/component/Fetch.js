import axios from 'axios';

const Api = axios.create({
  baseURL: 'http://localhost:2657/',
  timeout: 5000,
  headers: {
    // "Content-Type": "application/json; charset=utf-8",
    "Content-Type": "application/x-www-form-urlencoded",
  },
});


function checkErr(err) {
  if ('request' in err && err.request._timedOut == true) {
    //timedOut
  }
}

function Http(page, data = {}, callBack) {
  if (typeof callBack == 'undefined') {
    callBack = data;
    Api.get(page)
      .then((response) => {
        callBack(response.data);
      })
      .catch((error) => {
        checkErr(error);
        callBack(error);
      });
  }
  else {
    let config = {};

    if ('multipart' in data) {
      delete data.multipart;
      let temp = new FormData();
      for (let i in data) {
        temp.append(i, data[i])
      }
      config = {
        headers: { 'content-type': 'multipart/form-data' }
      };
      data = temp;
    }
    data = Object.entries(data)
      .map(([key, val]) => `${key}=${encodeURIComponent(val)}`)
      .join('&');

    Api.post(page, data, config)
      .then((response) => {
        callBack(response.data);
      })
      .catch((error) => {
        if (!('line' in error)) {
          checkErr(error);
          //callBack(JSON.parse(error.request._response));
        } else {
          callBack({});
        }
      });

  }
}

export default Http;
