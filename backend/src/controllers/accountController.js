import Account from "../models/accountModel.js";

const createAccount = async (req, res) => {
    const {service_id, login, token} = req.body;

    try {
        const account = Account.create({service_id, login, token});

        if (!account) {
            return res.status(500).json('Не удалось создать аккаунт!');
        }
         return res.status(201).json({message: "Accout success create!"});
    } catch (error) {
        return res.status(500).json({error})
    }
}

export { createAccount };