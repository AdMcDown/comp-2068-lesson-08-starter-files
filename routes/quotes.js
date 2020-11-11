const { create, index, update, destroy } = require('../controllers/quotes');

module.exports = router => {

    //GET localhost:4000/quotes
    router.get('/quotes', index);

    //POST localhost:4000/quotes
    router.post('/quotes', create);

    //POST localhost:4000/quotes/update
    router.post('/quotes/update', update);

    //POST localhost:4000/quotes/destroy
    router.post('/quotes/destroy', destroy);
};