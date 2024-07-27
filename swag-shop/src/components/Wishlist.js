import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

// import HttpService from '../utils/service';
import NotificationService, { NOTIF_WISHLIST_CHANGED } from '../utils/notificationservice';


let ns = new NotificationService();


function WishList() {
  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    ns.addObserver(NOTIF_WISHLIST_CHANGED, this, (newWishList) => {
      console.log(newWishList);
      setWishList(newWishList);
      toast.success('Wishlist updated');
    });
    return () => {
      ns.removeObserver(NOTIF_WISHLIST_CHANGED, this);
    };
  }, []);



  return (
    <div className='row m-0 p-0 justify-content-around'>
      <div className="card bg-secondary text-white" style={{width: '15rem'}}>
        <div className="card-body">
          <h4 className='card-title'>WishList</h4>
          <ul className='list-group'>
            {wishList.map((item) => {
              return (
                <li key={item._id} className='list-group-item'>
                  {item.title}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WishList;
