
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

}

/*
    Accepts user credentials and create a new account.
    It also create a login token which will be sent back to the client
*/
const signup_post = (req, res) => {
    console.log("We got the hit");
}


module.exports = {
    login_get, signup_get, login_post, signup_post 
}