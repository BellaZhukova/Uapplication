const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const router = require('./src/router/router.js');
const { sequelize } = require('./src/models');

dotenv.config();

const app = express();

const corsOptions = {
    origin: "http://localhost:5173",
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
        await sequelize.authenticate();
        console.log('Модели синхронизированы с базой данных.');

        app.listen(process.env.PORT, () => {
            console.log(`Сервер запущен по адресу http://localhost:${process.env.PORT}`);
        });
    } catch (error) {
        console.error('Ошибка при синхронизации моделей:', error);
    }
})();

