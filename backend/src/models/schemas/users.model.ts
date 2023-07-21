import {Schema, model} from "mongoose";

interface IUsers {
    username: string;
    password: string;
    role: string;
    favorite: object[];
}

const usersSchema = new Schema<IUsers>({
    username: String,
    password: String,
    role: String,
    favorite: [{type: Schema.Types.ObjectId, ref: 'Song'}],
});

const Users = model<IUsers>('Users', usersSchema, 'users');

export {Users};