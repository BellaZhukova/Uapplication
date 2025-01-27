import Site from '../models/siteModel.js';

const getSiteInfo = async (req, res) => {
    try {
        const site = await Site.findAll();

        return res.status(200).json(site);
    } catch (error) {
        return res.status(500).json({error: "Ошибка сервера!"})
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


export {getSiteInfo, createSite};