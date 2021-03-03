const userModel = require("../models/userModel");
/*
    Renders the login page
*/
const login_get = (req, res) => {
    res.render("auth/login.ejs");
}

/*
    Renders the signup page
*/
const signup_get = (req, res) => {
    res.render("auth/signup.ejs");
}

/*
    Accepts user login credentials and returns the login token
 */
const login_post = (req, res) => {

    // 
    const account_found = function(err, user_account_doc){
        if(user_account_doc != null){

            userModel.userProfile.findById(""+user_account_doc.user_id).then( (user_profile_doc) => {
                res.send({status : "success", user_account : user_account_doc, user_profile : user_profile_doc});

            }).catch( (err) => {
                console.error(err);
            });
        }else{
            // Account did not exists
            res.send({status : "failed"});
        }
    }

    // Find user account with given email and password
    userModel.userAccount.findOne({email: req.params.email, password : req.params.password}, account_found);

}

/*
    Accepts user credentials and create a new account.
    It also create a login token which will be sent back to the client
*/
const signup_post = (req, res) => {

    var new_user_id = "";

    console.log(req.body);

    userModel.userAccount.findOne({ email: req.body.email }, function (err, user_account) {

        // If the document with this email id is found, abort the request.
        if (user_account != null) {
            res.send({ status: "failed" });
            return;
        }

        // Forming user account
        var new_user_account = new userModel.userAccount({
            email: req.body.email,
            password: req.body.password
        });

        // Create user account
        new_user_account.save().then((result) => {

            // Get the auto generated user id from mongodb
            new_user_id = result._id;

            // Forming user profile
            var new_user_profile = new userModel.userProfile({
                user_id: new_user_id,                   // Using user id created at account creation time
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email
            });

            // Create user profile
            new_user_profile.save().then(() => {

                res.send({ status: "success", user_account: new_user_account });

            }).catch((err) => {
                // Problem occured in saving user_profile
                console.error(err);
            });

        }).catch((err) => {
            // Problem occured in saving user_account
            console.error(err);
        });
    });
}
// End of signup post


module.exports = {
    login_get, signup_get, login_post, signup_post 
}