const controller = {}
const connection = require('../utils/db');

controller.index = async (req, res) => {
    try{
        const title = 'holaaaaa'
        await connection();
        console.log('conectando a mongo...')
        res.render('index',{title});
    } catch(err){
        console.error(err);
    }
}

module.exports = controller;