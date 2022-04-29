var express = require('express');
var router = express.Router();

const userController = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth');

/* GET users listing. */
router.get('/', authMiddleware.auth,  userController.read);
router.get('/:id', authMiddleware.auth, userController.readById);
router.post('/', authMiddleware.auth, userController.signup);
router.patch('/:id', authMiddleware.auth, userController.update);
router.delete('/:id', authMiddleware.auth, userController.destroy);

router.post('/signin', userController.signin);



module.exports = router;
