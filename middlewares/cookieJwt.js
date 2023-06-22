const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.cookies.token;

    try {
        const user = jwt.verify(token, process.env.KEY);
        req.user = user;
        next();
    } catch (error) {
        res.status(401).json({error});
        // res.clearCookie("token");
    }
}