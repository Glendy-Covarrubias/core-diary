import express from "express";
import diaryRouter from "./routes/diariesRoutes";
import './models/Diary.ts';

const app = express();
const cors = require('cors');
const sequelize = require('./database/db');
//const Diary = require('./models/Diary');

//app.use(express.json());
app.use(cors());

const PORT = 3000;

app.get('/ping', (_req, res) => {
    console.log("someone pinged her!!");
    res.send('pong');
});

//app.use('/api/diaries', diaryRouter);
app.use('/api', diaryRouter);

/*app.listen(PORT, () => {
 console.log(`Server running on port ${PORT}`);
});*/

async function main() {
    try {
        await sequelize.sync({ alter: true });
        console.log(`Server running on port ${PORT}`);
        console.log('Connection has been established successfully.');
        app.listen(PORT);
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

main();