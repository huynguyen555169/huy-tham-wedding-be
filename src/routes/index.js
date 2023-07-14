const WishController = require('./WishRouter');

const routes = (app) => {
  app.use('/api/wish', WishController);
};

module.exports = routes;
