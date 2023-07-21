import {Users} from "../../models/schemas/users.model";
import {Songs} from "../../models/schemas/songs.model";

export class AdminController {
    static async getUserList(req, res) {
        await Users.find()
            .then(result => {
                res.status(200).json({
                    message: "Success",
                    data: result
                })
            })
            .catch(err => {
                res.status(404).json({
                    message: "Error",
                    error: err
                })
            })
    }

    static async getUser(req, res) {
        await Users.findById(req.params.songID)
            .then(result => {
                res.status(200).json({
                    message: "Success",
                    data: result
                })
            })
            .catch(err => {
                res.status(404).json({
                    message: "Error",
                    error: err
                })
            })
    }

    static async getSongList(req, res) {
        await Songs.find()
            .then(result => {
                res.status(200).json({
                    message: "Success",
                    data: result
                })
            })
            .catch(err => {
                res.status(404).json({
                    message: "Error",
                    error: err
                })
            })
    }

    static async getSong(req, res) {
        await Songs.findById(req.params.songID)
            .then(result => {
                res.status(200).json({
                    message: "Success",
                    data: result
                })
            })
            .catch(err => {
                res.status(404).json({
                    message: "Error",
                    error: err
                })
            })
    }

    static async addSong(req, res) {
        let addSong = new Songs(req.body)
        await addSong.save()
            .then(result => {
                res.status(200).json({
                    message: "Added song",
                    data: result
                })
            })
            .catch(err => {
                res.status(404).json({
                    message: err.message
                })
            })
    }

    static async updateSong(req, res) {
        try {
            let songId = req.params.songId;
            let song = await Songs.findById(songId);
            if (!song) res.status(404).json({
                message: "Song not found"
            });
            await Songs.updateOne({_id: songId}, req.body)
                .then(result => {
                    res.status(200).json({
                        message: "Update successfully",
                        data: result
                    })
                })
                .catch(err => {
                    res.status(404).json({
                        message: "Update failed",
                        err: err
                    })
                })
        } catch (err) {
            res.status(404).json({
                message: err.message
            })
        }
    }

    static async deleteSong(req, res) {
        try {
            let songId = req.params.songId;
            let song = await Songs.findById(songId);
            if (!song) res.status(404).json({
                message: "Song not found"
            });
            await Songs.deleteOne({_id: songId})
                .then(result => {
                    res.status(200).json({
                        message: "Delete successfully",
                        data: result
                    })
                })
                .catch(err => {
                    res.status(404).json({
                        message: "Delete failed",
                        err: err
                    })
                })
        } catch (err) {
            res.status(404).json({
                message: err.message
            })
        }
    }
}