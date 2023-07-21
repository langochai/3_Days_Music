import {Songs} from "../../models/schemas/songs.model";

export class UserController {
    static async getSongList(req, res) {
        await Songs.find()
            .then(result => {
                res.status(200).json({
                    message: 'Success!',
                    data: result
                })
            })
            .catch(err => {
                res.status(404).json({
                    message: 'Error!',
                    error: err
                })
            });
    }
}