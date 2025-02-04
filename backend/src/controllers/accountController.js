const { Sequelize, Op } = require('sequelize');
const { Account } = require('../models');
const { Site } = require('../models');
const { Service } = require('../models');

const createAccount = async (req, res) => {
    const { service_id, login, token } = req.body;

    try {

        const account = await Account.create({service_id, login, token});

        if (!account) {
            return res.status(500).json({error: "Не удалось создать аккаунт!"});
        }

        return res.status(201).json(account.account_id);

    } catch (error) {

        console.error(error);
        return res.status(500).json({ error: 'Не удалось создать аккаунт!' });
    }
};

const updateAccount = async (req, res) => {
    const { account_id, site_id } = req.body;
    try {
        const account = await Account.findOne({where: {account_id: account_id}});

        if (!account) {
            return res.status(404).json({error: "Произошла ошибка"})
        }

        const updatedSiteIds = Array.isArray(account.site_id) ? [...account.site_id, site_id] : [site_id]; 

    
        await Account.update(
            { site_id: updatedSiteIds },
            { where: { account_id } }
        );


            await Account.update(
                { site_id: updatedSiteIds },
                { where: {account_id} }
            );

            return res.status(201).json({message: "Успешно обновлено!"});

    } catch (error) {
        return res.status(500).json({error: "Enternal server error"});
    }
}

const getDataAccount = async(req, res) => {
    try {
        const accounts = await Account.findAll();

        if (!accounts) {
            return res.status(404).json({ message: "Аккаунты не найдены!" });
        }

        const accountsWithServices = [];

        for (const account of accounts) {
            const service = await Service.findOne({ where: { service_id: account.service_id } });

            if (!service) {
                return res.status(404).json({ message: `Сервис для аккаунта с ID ${account.account_id} не найден!` });
            }

            accountsWithServices.push({
                account_id: account.account_id,
                service_id: account.service_id,
                service_name: service.name_service,
                login: account.login,
                token: account.token,
                site_id: account.site_id
            });
        }

        return res.status(200).json(accountsWithServices);

    } catch (error) {
        return res.status(500).json({error: "Что-то пошло не так..."});
    }
}

const getDataAccountById = async (req, res) => {
    const { site_id } = req.body;
    try {
        const account = await Account.findOne({
            where: {
              site_id: {
                [Sequelize.Op.contains]: [site_id]
              }
            }
          });

        if (!account) {
            return res.status(404).json({message: "Аккаунт не найден!"})
        }

        const service = await Service.findOne({ where: { service_id: account.service_id } });

        if (!service) {
            return res.status(404).json({ message: `Сервис для аккаунта с ID ${account.account_id} не найден!` });
        }

        return res.status(200).json({
            account_id: account.account_id,
            service_id: account.service_id,
            service_name: service.name_service,
            login: account.login,
            token: account.token,
            site_id: account.site_id
        });

    } catch (error) {
        return res.status(500).json({error: "Enternal Server Error!"});
    }
}

module.exports = {createAccount, getDataAccount, updateAccount, getDataAccountById};
