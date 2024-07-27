import React, { useEffect, useState } from 'react';

import DataService from '../utils/data-service';
import HttpService from '../utils/service';


let ds = new DataService();


function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const http = new HttpService();
    const loadData = () => {
      http.getProducts().then((results) => {
        setProducts(results);
      }).catch((error) => {
        console.log(error);
      });
    };
    loadData();
  }, []);

  const addToWishList = (product) => {
    ds.addWishListItem(product);
  };

  return (
    <div className='row m-0 p-0 justify-content-around'>
      {products ? (
        products.map((product) => {
          return (
            <div key={product._id} className="card bg-secondary text-white" style={{width: '18rem'}}>
              <img src={product.imgUrl} className="card-img-top" alt="..." />
              <div className="card-body d-flex">
                <div className='align-self-end'>
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.likes} Likes</p>
                  <button
                    type='btn'
                    className="btn btn-success shadow-sm"
                    onClick={() => addToWishList(product)}
                  >
                    Add to Wishlist
                  </button>
                </div>
              </div>
            </div>
          )
        })
      ) : (
        <p>There are no products yet</p>
      )}
    </div>
  );
};

export default Products;