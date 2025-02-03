const { Site } = require('../models');

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

const createSite = async (req, res) => {
    const {name_site, url_site} = req.body;
    try {
        const site = Site.create({name_site, url_site});

        return res.status(201).json({message: "Сайт создан"})
    } catch(error) {
        res.status(500).json({error: "Ошибка сервера"})
    }
}


module.exports = {getSiteInfo, getSiteId, createSite};