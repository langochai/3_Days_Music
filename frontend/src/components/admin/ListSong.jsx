import {useEffect, useState} from "react";
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Delete, Edit} from "@mui/icons-material";

export default function ListSong() {
    const [listSong, setListSong] = useState([])
    useEffect(() => {
        // Gọi API để lấy dữ liệu
        axios.get('http://localhost:3000/user/song/list')
            .then(response => {
                setListSong(response.data.data);
            })
            .catch(error => {
                console.error('Lỗi khi gọi API:', error);
            });
    }, []);
    let rows = []
    rows = listSong

    return (

        <div className={"main-view-container"}>
            <div style={{padding: " 70px 16px " }}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650, backgroundColor : "black" }} aria-label="simple table">
                        <TableHead >
                            <TableRow >
                                <TableCell sx={{ color : "white"}}>id</TableCell>
                                <TableCell sx={{ color : "white"}} align="left">Song Name</TableCell>
                                <TableCell align="left">Genre</TableCell>
                                <TableCell align="left">Song Writer</TableCell>
                                <TableCell align="left">Vocalist</TableCell>
                                <TableCell align="left">Edit</TableCell>
                                <TableCell align="left">Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row._id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row._id}
                                    </TableCell>
                                    <TableCell align="left">{row.songName}</TableCell>
                                    <TableCell align="left">{row.genre}</TableCell>
                                    <TableCell align="left">{row.songWriter}</TableCell>
                                    <TableCell align="left">{row.vocalist}</TableCell>
                                    <TableCell align="left"><Edit/></TableCell>
                                    <TableCell align="left"><Delete/></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>

    )
}