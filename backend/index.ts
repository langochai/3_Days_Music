import express from "express";
import multer from "multer";
import cors from "cors"
import DatabaseConnect from "./src/models/database-connect";
import userRouter from "./src/router/user.router";
import adminRouter from "./src/router/admin.router";
import bodyParser from "body-parser";

const app = express();
const upload = multer();

app.use(cors({origin: true, credentials: true}));
app.use(bodyParser.json())
DatabaseConnect
    .connectDB()
    .then(res => console.log('Connect DB successfully!'))
    .catch(err => console.log(err));

app.post('/upload', upload.single('file'), (req, res) => {
    console.log(req.file);
    res.json({firebase_api: "api"});
});

app.use('/admin',adminRouter)
app.use('/user', userRouter);

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
