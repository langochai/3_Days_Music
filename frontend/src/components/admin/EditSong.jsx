import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from "@mui/material/TextField";
import {Edit} from "@mui/icons-material";
import {useEffect, useState} from "react";
import AdminSong from "../../services/admin.song.jsx";
import {useFormik} from "formik";
import AuthService from "../../services/auth.service.jsx";
import {setAuth} from "../../redux/features/auth/authSlice.jsx";

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
    const [song, setSong] = useState({})

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);



    const loadSongs = () => {
        AdminSong.getOneSong(props.id)
            .then((res) => {
                setSong(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };


    useEffect(() => {
        loadSongs();
    }, []);

    const formik= useFormik({
        initialValues: {
            songName: song.songName ,
            genre: song.genre,
            composer: song.composer,
            songWriter: song.songWriter,
            vocalist: song.vocalist,
        },

        onChange: (event) => {
            formik.setFieldValue(event.target.name, event.target.value);
        },
        onSubmit: (values) => {
            // Đây là nơi bạn có thể gọi API để lưu thông tin bài hát sau khi người dùng nhấn nút "Save"
            console.log(values);
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
                <Box component="form" noValidate sx={style}>
                    <h1>Edit this song</h1>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        value={formik.values.songName}
                        onChange={formik.handleChange}
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
                        value={formik.values.genre}
                        onChange={formik.handleChange}
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
                        value={formik.values.composer}
                        onChange={formik.handleChange}
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
                        value={formik.values.songWriter}
                        onChange={formik.handleChange}
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
                        value={formik.values.vocalist}
                        onChange={formik.handleChange}
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
                        onClick={formik.handleSubmit}

                    >
                        Save
                    </Button>
                </Box>
            </Modal>
        </div>
    );
}