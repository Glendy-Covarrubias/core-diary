import express from "express";
import diaryRouter from "./routes/diaries";

const app = express();
const cors = require('cors');

//app.use(express.json());
app.use(cors());

const PORT = 3000;

app.get('/ping', (_req, res) => {
    console.log("someone pinged her!!");
    res.send('pong');
});

app.use('/api/diaries', diaryRouter);

app.listen(PORT, () => {
 console.log(`Server running on port ${PORT}`);
});