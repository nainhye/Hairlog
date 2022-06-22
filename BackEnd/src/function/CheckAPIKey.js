module.exports = {
    checkApiKey : function (req, res, next) {
        const api_key = req.headers.api_key;
        if (api_key && api_key === "nanakim") { 
            next();
        } else {
            res.sendStatus(401);
        }
    }
}