const TestController = require('../controllers/test');
module.exports = (app) => {
    app.get('/test', TestController.test);
    app.post('/test', TestController.test);
    app.put('/test', TestController.test);
    app.patch('/test', TestController.test);
    app.delete('/test', TestController.test);
}