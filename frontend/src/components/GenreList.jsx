import {useEffect, useState} from "react";
import Grid from "@mui/material/Grid";
import SongService from "../services/song.service.js";
import GenreItem from "./musics/GenreItem.jsx";

function GenreList() {
    const [genres, setGenres] = useState([]);
    useEffect(() => {
        SongService.getGenre()
            .then(result => {
                const genreList = []
                result.data.data.forEach(item => {
                    genreList.push(item.genre)
                })
                setGenres([...new Set(genreList)])
            })
            .catch(err => {
                console.log(err.message)
            })
    }, [])
    return (
        <>
            <Grid item md={6} sx={{textAlign: "left"}}><h2>Genre List</h2></Grid>
            <Grid item md={6} sx={{textAlign: "right"}}><h4>Show all</h4></Grid>
            {genres && genres.map((item, index) => {
                if (index <= 5) {
                    return (
                        <Grid item xs={2} md={2} key={index}>
                            <GenreItem item={item}/>
                        </Grid>
                    )
                }
            })}
        </>
    );
}

export default GenreList;