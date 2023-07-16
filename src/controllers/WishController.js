const WishService = require("../services/WishService");

const addWish = async (req, res, next) => {
  console.log("🚀 ~ file: WishController.js:4 ~ addWish ~ req:", req.body);
  try {
    const { name, content } = req.body;
    if (!name || !content) {
      return res.status(200).json({
        status: "ERR",
        message: "The input is required"
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
