const Wish = require('../models/WishModel');

const addWish = (newWish) => {
  return new Promise(async (resolve, reject) => {
    const { name, wish } = newWish;
    try {
      const createdWish = await Wish.create({ name, wish });
      if (createdWish)
        resolve({
          status: 'OK',
          message: 'SUCCESS',
          data: createdWish
        });
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  addWish
};
