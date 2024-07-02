const redirectMiddlewares = (req, res, next) => {
    if (req.session.userID) {
        res.redirect('/');
    }
    next();
};

export default redirectMiddlewares;
