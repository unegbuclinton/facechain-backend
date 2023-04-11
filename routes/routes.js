const { firstEndpoint } = require("../controller/homeController")


module.exports = function(app){
    app.route('/').get((res,req)=>{
        res.send('Hello World!');
    })
}