// import express from "express";
// import * as bodyParser from "body-parser";
// const PORT = 8000
// const app = express()
// app.use(bodyParser.json())
// app.use(express.json())
//
// app.listen(PORT,()=>{
//     console.log(`app running at ${PORT}`)
// })
import express from "express";
import multer from "multer";
import cors from "cors"
const app = express();
const upload = multer();

app.use(cors({ origin: true, credentials: true }));
app.post('/upload', upload.single('file'), (req, res) => {
    console.log(req.file);
    res.json({ firebase_api: "api" });
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
