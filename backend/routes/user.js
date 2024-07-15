const express = require('express');
const router = express.Router();
const userController = require('../controller/user');

/**routes for Signup*/
//router.post('/signup', userController.Signup);

/**routes for update 
 * router.post('/update', userController.register,);
*/
/**routes for delete
 * router.post('/delete', userController.register,);
 */
/**routes for login 
 * router.post('/login', userController.register,);
*/
router.get('/db', userController.confirmDbConnection);

module.exports = router;