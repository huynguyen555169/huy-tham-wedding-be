const WishService = require('../services/WishService');

const addWish = async (req, res, next) => {
  try {
    const { name, wish } = req.body;
    if (!name || !wish) {
      return res.status(200).json({
        status: 'ERR',
        message: 'The input is required'
      });
    }
    const r = await WishService.addWish(req.body);
    return res.status(200).json(r);
  } catch (error) {
    return res.status(404).json({
      message: error
    });
  }
};

module.exports = {
  addWish
};
