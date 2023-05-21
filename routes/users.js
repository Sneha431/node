const express = require("express");
const router= express.Router();

const {getUsers, createUsers,findUser,updateUser,updateUsermany,deleteUser,deleteUserMany,addUsers} = require("../controller/users.js")  ;

router.get("/users",getUsers);
router.get("/addusers",addUsers);

router.get("/user/::userid",findUser);
router.post("/user",createUsers);
router.post("/userupdate",updateUser);
router.put("/updateusermany",updateUsermany);
router.get("/deleteuser/::userid",deleteUser);
router.delete("/deleteusermany",deleteUserMany);
module.exports = router;