const { Account } = require('../models');

const checkAccountExists = async (req, res, next) => {
    const {login} = req.body;
    
    try {
        const account = await Account.findOne({where: {login: login}});

        if (account) {
            return res.status(400).json({message: "Такой аккаунт уже существует!"});
        } 

        next();
    } catch (error) {
        console.error(error);
        return res.status(500).json({error: "Ошибка сервера!"});
    }
}

module.exports = {checkAccountExists};