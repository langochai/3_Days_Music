import {Schema, model} from "mongoose";

interface IComments {
    content: string;
    userID: object;
    songID: object;
}

const commentsSchema = new Schema<IComments>({
    content: String,
    userID: {type: Schema.Types.ObjectId, ref: 'Users'},
    songID: {type: Schema.Types.ObjectId, ref: 'Songs'},
});

const Comments = model<IComments>('Comments', commentsSchema, 'comments');

export {Comments};