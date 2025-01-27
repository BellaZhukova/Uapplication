import Site from '../models/siteModel.js';
import Account from '../models/accountModel.js';

const getSiteInfo = async (req, res) => {
    try {
        const site = Site.findAll();

        return res.status(200).json({message: "Успешно"});
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