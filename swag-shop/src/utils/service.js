import api from './api';


class HttpService {
  getProducts = () => {
    let promise = new Promise((resolve, reject) => {
      api.get('/product').then((res) => {
        resolve(res.data);
      }).catch((error) => {
        reject(error);
      });
    });
    return promise;
  }
}

export default HttpService;
