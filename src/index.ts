import express from "express";
import diaryRouter from "./routes/diariesRoutes";

const app = express();
const cors = require('cors');
const sequelize = require('./database/db');
const User = require('./models/User');
const Diary = require('./models/Diary');
const Activity = require('./models/Activity');
const Imagen = require('./models/Imagen');
const PORT = 3000;

app.use(cors());

app.get('/ping', (_req, res) => {
    console.log("someone pinged her!!");
    res.send('pong');
});

app.use('/api', diaryRouter);

async function main() {
    try {
        await sequelize.sync({ alter: true });

        await User.sync({ alter: true });
        await Diary.sync({ alter: true });
        await Activity.sync({ alter: true });
        await Imagen.sync({ alter: true });

        console.log(`Server running on port ${PORT}`);
        console.log('Connection has been established successfully.');
        app.listen(PORT);
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

main();