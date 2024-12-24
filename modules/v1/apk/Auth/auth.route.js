const { decryption, checkBodyInline, checkApiKey } = require('../../../../middleware/headerValidator');
const express = require('express');
const router = express.Router();
const authModel = require('./auth.model');
const auth_rules = require('./rules/auth.rules.json');
const { CheckEmail } = require('../../../../utils/uniqueMiddleware');


router.post("/user/signup", checkApiKey, decryption, checkBodyInline(auth_rules["signup"]), authModel?.Auth?.signUp);


module.exports = router;