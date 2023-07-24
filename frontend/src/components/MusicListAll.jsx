import {useEffect, useState} from "react";
import Grid from "@mui/material/Grid";
import MusicItem from "./musics/MusicItem.jsx";
import SongService from "../services/song.service.js";

function MusicListAll() {
    const [songs, setSongs] = useState([]);
    useEffect(() => {
        SongService.getSongs()
            .then(result => {
                setSongs(result.data.data)
            })
            .catch(err => {
                console.log(err.message)
            })
    }, [])
    return (
        <>
            <Grid item md={6} sx={{textAlign: "left"}}><h2>Music List</h2></Grid>
            <Grid item md={6} sx={{textAlign: "right"}}><h4>Show all</h4></Grid>
            {songs && songs.map((item, index) => {
                if (index <= 5) {
                    return (
                        <Grid item xs={2} md={2} key={index}>
                            <MusicItem item={item}/>
                        </Grid>
                    )
                }
            })}
        </>
    );
}

export default MusicListAll;