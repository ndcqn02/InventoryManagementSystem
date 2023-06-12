
let getHomePage = (req, res) => {
    return res.render('homepage.ejs');
}

let getAboutPage = (req, res) => {
    return res.render('hehe');
}



module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage
}