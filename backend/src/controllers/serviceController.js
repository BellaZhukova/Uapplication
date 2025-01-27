import Service from "../models/serviceModel.js";

const serviceChoose = async (req, res) => {
    const { name } = req.body;

    try {
        const service = await Service.findOne({where: {name_service: name}});

        if (!service) {
            return res.status(404).json({error: "Сервис не найден!"});
        }

        return res.status(200).json({message: "Успешно"})
    } catch (error) {
        return res.status(500).json({error: "Ошибка сервера"});
    }
}

const getService = async (req, res) => {
    try {
        const service = await Service.findAll();

        return res.status(200).json(service);
    } catch (error) {
        return res.status(500).json({error: "Enternal server error"})
    }
}

export { serviceChoose, getService };

