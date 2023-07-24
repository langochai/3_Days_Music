import {useEffect, useState} from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Delete, Add} from "@mui/icons-material";
import AdminSong from "../../services/admin.song.jsx";
import Button from "@mui/material/Button";
import EditSong from "./EditSong.jsx";
import {Link} from "react-router-dom";
import AddSong from "./AddSong.jsx";

export default function ListSong() {
    const [listSong, setListSong] = useState([])
    const loadSongs = () => {
        AdminSong.getSong()
            .then((res) => {
                setListSong(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        loadSongs();
    }, [])
    const deleteSong = (id) => {
        AdminSong.delete(id)
            .then(() => {
                loadSongs();
            })
            .catch((err) => {
                console.log(err);
            });
    }
    return (

        <div className={"main-view-container"}>
            <div style={{padding: " 70px 16px "}}>
                <AddSong setListSong={setListSong}/>
                <TableContainer component={Paper}>
                    <Table sx={{minWidth: 650, backgroundColor: "black"}} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{color: "white"}} align="left">Song Name</TableCell>
                                <TableCell sx={{color: "white"}} align="left">Genre</TableCell>
                                <TableCell sx={{color: "white"}} align="left">Song Writer</TableCell>
                                <TableCell sx={{color: "white"}} align="left">Vocalist</TableCell>
                                <TableCell sx={{color: "white"}} align="left">Edit</TableCell>
                                <TableCell sx={{color: "white"}} align="left">Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {listSong.map((song) => (
                                <TableRow
                                    key={song._id}
                                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                >
                                    <TableCell sx={{color: "white"}} align="left">{song.songName}</TableCell>
                                    <TableCell sx={{color: "white"}} align="left">{song.genre}</TableCell>
                                    <TableCell sx={{color: "white"}} align="left">{song.songWriter}</TableCell>
                                    <TableCell sx={{color: "white"}} align="left">{song.vocalist}</TableCell>
                                    <TableCell sx={{color: "white"}} align="left"><EditSong
                                        id={song._id} song={song} setListSong={setListSong}
                                    /></TableCell>
                                    <TableCell sx={{color: "white"}} align="left"><Button sx={{color:"red", '&:hover': {color: 'grey'}}}><Delete
                                        onClick={() => deleteSong(song._id)}/></Button></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>

    )
}