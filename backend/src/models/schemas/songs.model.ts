import {Schema, model} from "mongoose";

interface ISongs {
    songName: string;
    genre: string;
    composer: string;
    songWriter: string;
    vocalist: string;
    fileUrl: string;
    imageUrl: string;
}

const songsSchema = new Schema<ISongs>({
    songName: String,
    genre: String,
    composer: String,
    songWriter: String,
    vocalist: String,
    fileUrl: String,
    imageUrl: String,
});

const Songs = model<ISongs>('Songs', songsSchema, 'songs');

export {Songs};