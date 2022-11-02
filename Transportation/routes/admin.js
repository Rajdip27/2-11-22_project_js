var express = require('express');
var router = express.Router();

const BlogController = require('../controller/blogController.js');
const ContactContorller = require('../controller/contactController');
const LinkContorller = require('../controller/linkController.js');
const TeamContorller = require('../controller/teamController.js');
const TestimonialController = require('../controller/testimonialController.js')

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Raj' });
// });



/* GET Blog page. */
router.get('/blogs', blogController.index);

router.get('/blog/create', blogController.create);

router.get('/blog/:id/edit', blogController.edit);

router.delete('/blog/:id/delete', blogController.delete);

router.get('/blog/:id/show', blogController.show);

router.post('/blog/store', blogController.store);

router.put('/blog/:id/update', blogController.update);


/* GET contact-us page. */
router.get('/contact', contactController.index);

router.get('/contact/create', contactController.create);

router.get('/contact/edit', contactController.edit);

router.delete('/contact/delete', contactController.delete);

router.get('/contact/show', contactController.show);

router.post('/contact/store', contactController.store);

router.put('/contact/update', contactController.update);

/* GET Link page. */
router.get('/links', teamController.index);

router.get('/link/create', teamController.create);

router.get('/link/edit', teamController.edit);

router.delete('/link/delete', teamController.delete);

router.get('/link/show', teamController.show);

router.post('/link/store', teamController.store);

router.put('/link/update', teamController.update);


/* GET Team page. */
router.get('/team', teamController.index);

router.get('/team/create', teamController.create);

router.get('/team/edit', teamController.edit);

router.delete('/team/delete', teamController.delete);

router.get('/team/show', teamController.show);

router.post('/team/store', teamController.store);

router.put('/team/update', teamController.update);
/* GET Testimonial page. */
router.get('/testimonial', testimonialController.index);

router.get('/testimonial/create', testimonialController.create);

router.get('/testimonial/edit', testimonialController.edit);

router.delete('/testimonial/delete', testimonialController.delete);

router.get('/testimonial/show', testimonialController.show);

router.post('/testimonial/store', testimonialController.store);

router.put('/testimonial/update', testimonialController.update);







module.exports = router;







