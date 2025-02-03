const { ApiCall } = require('../models');

const getApi = async (req, res) => {
    try {
        const api = await ApiCall.findAll();

        return res.status(200).json(api);
    } catch (error) {
        return res.status(500).json({error: "Ошибка сервера!"})
    }
}


module.exports = {getApi};