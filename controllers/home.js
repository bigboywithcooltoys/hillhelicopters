module.exports = {
    home,
    gallery,
    contact
}

function home(req, res) {
    res.render('home')
}


function gallery(req, res) {
    res.render('gallery')
}


function contact(req, res) {
    res.render('contact')
}
