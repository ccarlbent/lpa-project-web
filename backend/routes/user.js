const express = require('express');
const router = express.Router();
const userController = require('../controller/user');

/**routes for register
 * 
 router.post('/register', userController.register,);
 */

/**routes for update 
 * router.post('/update', userController.register,);
*/
/**routes for delete
 * router.post('/delete', userController.register,);
 */
/**routes for login 
 * router.post('/login', userController.register,);
*/
router.get('/', userController.dbConnection);

module.exports = router;