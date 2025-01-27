import Account from "../models/accountModel.js";
import Site from "../models/siteModel.js";

const createAccount = async (req, res) => {
    const { service_id, login, token, counter_id, name_site, url_site } = req.body;

    try {
        const account = await Account.create({ service_id, login, token });

        if (!account) {
            return res.status(500).json({ error: "Не удалось создать аккаунт!" });
        }

        const site = await Site.create({
            account_id: account.account_id,
            counter_id,
            name_site,
            url_site,
        });

        return res.status(201).json({ message: "Account and site successfully created!" });
    } catch (error) {

        console.error(error);
        return res.status(500).json({ error: 'Не удалось создать аккаунт или сайт!' });
    }
};

export { createAccount };
