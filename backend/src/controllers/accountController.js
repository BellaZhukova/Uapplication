import Account from "../models/accountModel.js";
import Site from "../models/siteModel.js";

const createAccount = async (req, res) => {
    const { service_id, login, token, counter_id, name_site, url_site } = req.body;

    try {
        const existingAccount = await Account.findOne({where: {login: login}});
        if (!existingAccount) {
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

            await Account.update(
                { site_id: [site.site_id] },
                { where: { account_id: account.account_id } })

            return res.status(201).json(site.site_id);
        } else {
            const accountId = existingAccount.account_id;

            const site = await Site.create({
                account_id: accountId,
                counter_id,
                name_site,
                url_site,
            });

            const account = await Account.findByPk(accountId);
            console.log(accountId)
            const updatedSiteIds = [...account.site_id, site.site_id];

            await Account.update(
                { site_id: updatedSiteIds },
                { where: { account_id: accountId } }
            );

            return res.status(201).json(site.site_id);

        }

    } catch (error) {

        console.error(error);
        return res.status(500).json({ error: 'Не удалось создать аккаунт или сайт!' });
    }
};

// const getDataAccount = async(req, res) => {
//     try {
//         const account = await Account.findAll();

//         if (!account)
//         }
//     }
// }

export { createAccount };
