const { INSERT_Q } = require('../../../../utils/SQLWorker');
const { sendResponse } = require('../../../../middleware/headerValidator');
const CryptoJS = require('crypto-js');
const SECRET = CryptoJS.enc.Utf8.parse(process.env.KEY);
const IV = CryptoJS.enc.Utf8.parse(process.env.KEY);
const con = require('../../../../config/database');
//////////////////////////////////////////////////////////////////////
//                            Auth API                              //
//////////////////////////////////////////////////////////////////////

let Auth = {

    signUp: async (req, res) => {
        try {
            let { body } = req;

            let password = CryptoJS.AES.encrypt(JSON.stringify(body?.password), SECRET, { iv: IV }).toString()

            let sql = `INSERT INTO tbl_user (name,email, password,hobby,image) VALUES ($1, $2, $3,$4,$5) RETURNING id`;

            let values = [body?.name, body?.email, password,body.hobby,body.image];

             await INSERT_Q(sql,values);

            return sendResponse(req, res, 200, '1', { keyword: "rest_keywords_user_signup_success", components: {} }, []);

        } catch (e) {
            console.log(e?.message);
            return sendResponse(req, res, 200, '0', { keyword: "rest_keywords_user_signup_failed", components: {} }, e?.message);
        }
    }
}

module.exports = {
    Auth
};