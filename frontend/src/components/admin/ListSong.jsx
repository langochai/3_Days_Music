import {useEffect, useState} from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Delete} from "@mui/icons-material";
import AdminSong from "../../services/admin.song.jsx";
import Button from "@mui/material/Button";
import EditSong from "./EditSong.jsx";
import AddSong from "./AddSong.jsx";
import {TableFooter} from "@mui/material";
import {styled} from '@mui/system';
import TablePagination, {
    tablePaginationClasses as classes,
} from '@mui/base/TablePagination';

export default function ListSong() {
    const [page, setPage] = useState(0);
    const [listSong, setListSong] = useState([])

    const [rowsPerPage, setRowsPerPage] = useState(5);

    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - listSong.length) : 0;
    const handleChangePage = (event, newPage) => {
        setPage(newPage);

    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
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
        if (confirm('Are you sure you want to delete this song?')) {
            AdminSong.delete(id)
                .then(() => {
                    loadSongs();
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }

    const CustomTablePagination = styled(TablePagination)`
      & .${classes.toolbar} {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;

        @media (min-width: 768px) {
          flex-direction: row;
          align-items: center;
        }
      }

      & .${classes.selectLabel} {
        margin: 0;
      }

      & .${classes.displayedRows} {
        margin: 0;

        @media (min-width: 768px) {
          margin-left: auto;
        }
      }

      & .${classes.spacer} {
        display: none;
      }

      & .${classes.actions} {
        display: flex;
        gap: 0.25rem;
      }
    `;

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
                            {(rowsPerPage > 0
                                    ? listSong.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    : listSong
                            ).map((song) => (
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
                                    <TableCell sx={{color: "white"}} align="left"><Button
                                        sx={{color: "red", '&:hover': {color: 'grey'}}}><Delete
                                        onClick={() => deleteSong(song._id)}/></Button></TableCell>
                                </TableRow>
                            ))}
                            {emptyRows > 0 && (
                                <tr style={{height: 41 * emptyRows}}>
                                    <td colSpan={3}/>
                                </tr>
                            )}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <CustomTablePagination
                                    rowsPerPageOptions={[5, 10, 15, {label: 'All', value: -1}]}
                                    colSpan={3}
                                    count={listSong.length}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    slotProps={{
                                        select: {
                                            'aria-label': 'rows per page',
                                        },
                                        actions: {
                                            showFirstButton: true,
                                            showLastButton: true,
                                        },
                                    }}
                                    onPageChange={handleChangePage}
                                    onRowsPerPageChange={handleChangeRowsPerPage}
                                />
                            </TableRow>
                        </TableFooter>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}