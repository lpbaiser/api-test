exports.test = (req, res, next) => {
    console.log('> headers', JSON.stringify(req.headers))
    console.log('> query', JSON.stringify(req.query))
    console.log('> body', JSON.stringify(req.body))
    res.status(200).json(req.body);
};