module.exports = {
    home,
    gallery
}

function home(req, res) {
    res.render('home')
}


function gallery(req, res) {
    res.render('gallery')
}
