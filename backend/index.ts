import express from "express";
import multer from "multer";
import cors from "cors"
import router from "./src/router/router";
import DatabaseConnect from "./src/models/database-connect";
import userRouter from "./src/router/user.router";

const app = express();
const upload = multer();

app.use(cors({origin: true, credentials: true}));

DatabaseConnect
    .connectDB()
    .then(res => console.log('Connect DB successfully!'))
    .catch(err => console.log(err));

app.post('/upload', upload.single('file'), (req, res) => {
    console.log(req.file);
    res.json({firebase_api: "api"});
});

app.use('/api', router);
app.use('/user', userRouter);

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
