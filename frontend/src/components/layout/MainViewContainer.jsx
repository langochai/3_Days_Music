import MusicListAll from "../MusicListAll.jsx";
import Grid from "@mui/material/Grid";
import GenreList from "../GenreList.jsx";

export default function MainViewContainer() {
    return (
        <>
            <div className={"main-view-container"} style={{
                padding: " 20px 30px "

            }}>
                <Grid container spacing={2}>
                    <MusicListAll/>
                    <GenreList/>
                </Grid>
            </div>
        </>
    )
}