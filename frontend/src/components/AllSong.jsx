import {useEffect, useState} from "react";
import Grid from "@mui/material/Grid";
import MusicItem from "./musics/MusicItem.jsx";
import SongService from "../services/song.service.js";
import {Link} from "react-router-dom";
import MusicListAll from "./MusicListAll.jsx";
import GenreList from "./GenreList.jsx";

function AllSong() {
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
            <div className={"main-view-container"} style={{padding: " 70px 30px "}}>
                <Grid item md={6} sx={{textAlign: "left"}}><h2>Music List</h2></Grid>
                <Grid container spacing={2}>
                    {songs && songs.map((item, index) => (
                        <Grid item xs={2} md={2} key={index}>
                            <MusicItem item={item}/>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </>
    );
}

export default AllSong;