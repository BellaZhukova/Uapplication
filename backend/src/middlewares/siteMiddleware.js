const { Site } = require('../models');

const checkSiteExists = async (req, res, next) => {
    const { url_site } = req.body;

    try {
        const site = await Site.findOne({where: {url_site: url_site}});

        if (site) {
            return res.status(400).json({message: "Такой сайт уже существует!"});
        }

        next();
    } catch (error) {
        return res.status(500).json({error: "Ошибка сервера!"});
    }
}

module.exports = {checkSiteExists};