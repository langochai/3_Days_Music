import {Schema, model} from "mongoose";

interface IUsers {
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    role: string;
    favorite: object[];
}

const usersSchema = new Schema<IUsers>({
    firstName: String,
    lastName: String,
    username: String,
    password: String,
    role: String,
    favorite: [{type: Schema.Types.ObjectId, ref: 'Song'}],
});

const Users = model<IUsers>('Users', usersSchema, 'users');

export {Users};