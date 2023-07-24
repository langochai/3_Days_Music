import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from "@mui/material/TextField";
import {Edit} from "@mui/icons-material";
import AdminSong from "../../services/admin.song.jsx";
import {useFormik} from "formik";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function EditSong(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const loadSongs = () => {
        AdminSong.getSong()
            .then((res) => {
                props.setListSong(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const formEdit = useFormik({
        initialValues: {
            songName: props.song.songName,
            genre: props.song.genre,
            composer: props.song.composer,
            songWriter: props.song.songWriter,
            vocalist: props.song.vocalist,
        },
        onSubmit: (values) => {
            let songData = {
                songName: values.songName,
                genre: values.genre,
                composer: values.composer,
                songWriter: values.songWriter,
                vocalist: values.vocalist,
            }
            AdminSong.edit(props.id, songData)
                .then(() => {
                    loadSongs()
                    handleClose()
                })
                .catch((err) => {
                    console.log(err)
                })
        },
    });

    return (
        <div>
            <Button onClick={handleOpen}><Edit/></Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box component="form" onSubmit={formEdit.handleSubmit} noValidate sx={style}>
                    <h1>Edit this song</h1>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        value={formEdit.values.songName}
                        onChange={formEdit.handleChange}
                        id="songName"
                        label="Song Name"
                        name="songName"
                        autoComplete="songName"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        value={formEdit.values.genre}
                        onChange={formEdit.handleChange}
                        id="genre"
                        label="Genre"
                        name="genre"
                        autoComplete="genre"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        value={formEdit.values.composer}
                        onChange={formEdit.handleChange}
                        id="composer"
                        label="Composer"
                        name="composer"
                        autoComplete="composer"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        value={formEdit.values.songWriter}
                        onChange={formEdit.handleChange}
                        id="songWriter"
                        label="Song Writer"
                        name="songWriter"
                        autoComplete="songWriter"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        value={formEdit.values.vocalist}
                        onChange={formEdit.handleChange}
                        id="vocalist"
                        label="Vocalist"
                        name="vocalist"
                        autoComplete="vocalist"
                        autoFocus
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{mt: 3, mb: 2, backgroundColor: 'green'}}
                    >
                        Save
                    </Button>
                </Box>
            </Modal>
        </div>
    );
}