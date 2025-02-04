const { Site } = require('../models');

const createSite = async (req, res) => {
    const {account_id, counter_id, name_site, url_site} = req.body;
    try {
        const site = await Site.create({account_id, counter_id, name_site, url_site});

        if(!site) {
            return res.status(500).json({error: "Сайт не удалось создать"})
        }

        return res.status(201).json(site.site_id)
    } catch(error) {
        res.status(500).json({error: "Ошибка сервера"})
    }
}

const getSiteInfo = async (req, res) => {
    try {
        const site = await Site.findAll();

        return res.status(200).json(site);
    } catch (error) {
        return res.status(500).json({error: "Ошибка сервера!"})
    }
}

const getSiteId = async (req, res) => {
    const siteId = req.params.id;
    try {
        const site = await Site.findOne({where: {site_id: siteId}});
         
        if(!site) {
            return res.status(404).json({message: "Not Found"});
        }

        return res.status(200).json(site);
    } catch (error) {
        return res.status(500).json(error);
    }
}


module.exports = {getSiteInfo, getSiteId, createSite};