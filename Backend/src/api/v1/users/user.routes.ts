const { Router } = require('express');
const UserController = require('./users.controller');

const router = Router();

router.get('/', UserController.getAll);
router.get('/:id' UserController.getOne);
router.patch('/:id' , UserController.patch);
router.post('/',                     UserController.create);
router.delete('/:id',  UserController.remove);

module.exports = router;