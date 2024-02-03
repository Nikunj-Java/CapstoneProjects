const express= require('express');
const { addUser, getAllUsers, getUserById, deleteUserById, updateUserById, addProfile } = require('../controller/user_controller');

const router= express.Router();

router.route("/").get(getAllUsers).post(addUser)

// router.post('/',addUser);
// router.get('/',getAllUsers);
router.route('/:id').get(getUserById).delete(deleteUserById).put(updateUserById)
.patch(addProfile)

// router.get('/:id',getUserById);
// router.delete("/:id",deleteUserById)
// router.put("/:id",updateUserById)

module.exports = router;