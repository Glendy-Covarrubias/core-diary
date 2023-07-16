import express from "express";
import diaryRouter from "./routes/diariesRoutes";

const app = express();
const cors = require('cors');

//middlewares
app.use(express.json());

const sequelize = require('./database/db');
const User = require('./models/User');
const Diary = require('./models/Diary');
const Activity = require('./models/Activity');
const Imagen = require('./models/Imagen');
const PORT = 3000;

app.use(cors({'Access-Control-Allow-Origin': '*'}));

app.get('/ping', (_req, res) => {
    console.log("someone pinged her!!");
    res.send('pong');
});

app.use('/api', diaryRouter);

async function main() {
    try {
        await sequelize.sync({ alter: false });

        await User.sync({ alter: false });
        await Diary.sync({ alter: false });
        await Activity.sync({ alter: false });
        await Imagen.sync({ alter: false });

        console.log(`Server running on port ${PORT}`);
        console.log('Connection has been established successfully.');
        app.listen(PORT);
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

main();