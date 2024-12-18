async function centralizedErrorHandler(err, req, res, next){
    console.log("centralizedErrorHandler says:", err);
    res.status(500).json({ message: "an error occurred in the server. It was caught by the centralizedErrorHandler"});
}

module.exports = { centralizedErrorHandler }