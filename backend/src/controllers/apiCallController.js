import ApiCall from "../models/apiCallModel.js";

const getApi = async (req, res) => {
    try {
        const api = await ApiCall.findAll();

        return res.status(200).json(api);
    } catch (error) {
        return res.status(500).json({error: "Ошибка сервера!"})
    }
}


export { getApi };