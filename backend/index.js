import express from "express";
import router from "./src/router/router.js";
import dotenv from 'dotenv';
import sequelize from "./src/configs/db.js";
import cors from "cors";
import Service from "./src/models/serviceModel.js";
import Account from "./src/models/accountModel.js";
import ApiCall from "./src/models/apiCallModel.js";
import Site from "./src/models/siteModel.js";
import Interval from "./src/models/intervalModel.js";

// import "../backend/src/models/associations.js"

dotenv.config();

const app = express();

const corsOptions = {
    origin: "http://localhost:5174",
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
    maxAge: 3600
}

app.use(cors(corsOptions));

app.use(express.json());

app.use('/api', router);



(async () => {
    try {
        await sequelize.sync();
        console.log('Модели синхронизированы с базой данных.');

        app.listen(process.env.PORT, () => {
            console.log(`Сервер запущен по адресу http://localhost:${process.env.PORT}`);
        });
    } catch (error) {
        console.error('Ошибка при синхронизации моделей:', error);
    }
})();

