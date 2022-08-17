import express from "express";
import diaryRouter from "./routes/diaries";
import './models/Diary.ts';

const app = express();
const cors = require('cors');
const sequelize = require('./database/db');

//app.use(express.json());
app.use(cors());

const PORT = 3000;

app.get('/ping', (_req, res) => {
    console.log("someone pinged her!!");
    res.send('pong');
});

app.use('/api/diaries', diaryRouter);

/*app.listen(PORT, () => {
 console.log(`Server running on port ${PORT}`);
});*/

async function main() {
    try {
        await sequelize.sync();
        console.log(`Server running on port ${PORT}`);
        console.log('Connection has been established successfully.');
        app.listen(PORT);
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

main();