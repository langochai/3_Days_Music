import * as mongoose from "mongoose";

class DatabaseConnect {
    static async connectDB() {
        const DB_URL = 'mongodb+srv://trankhiem99999:bncvznczvzz1411@cluster0.7tvwpiv.mongodb.net/';
        return await mongoose.connect(DB_URL);
    }
}

export default DatabaseConnect;