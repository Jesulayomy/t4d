import NotificationService, { NOTIF_WISHLIST_CHANGED } from './notificationservice';


let instance = null;
let wishList = [];
let ns = new NotificationService();


class DataService {
  constructor() {
    if (!instance) {
      instance = this;
    }
    return instance;
  }

  addWishListItem = item => {
    wishList.push(item);
    ns.postNotification(NOTIF_WISHLIST_CHANGED, wishList);
  }

  removeWishListItem = item => {
    for (let x = 0; x < wishList.length; x++) {
      if (item._id === wishList[x]._id) {
        wishList.splice(x, 1);
        ns.postNotification(NOTIF_WISHLIST_CHANGED, wishList);
        break;
      }
    }
  }
}

export default DataService;
