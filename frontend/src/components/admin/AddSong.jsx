import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from "@mui/material/TextField";
import {Add} from "@mui/icons-material";
import AdminSong from "../../services/admin.song.jsx";
import {useFormik} from "formik";
import {useState} from "react";
import FileUpload from "../FileUpload.jsx";

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

export default function AddSong(props) {
    const [open, setOpen] = useState(false);
    const [haveFile,setHaveFile] = useState(false)
    const [haveImage,setHaveImage]=useState(false)
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
    const resetFormFileAndImage = () =>{
        setHaveFile(false)
        setHaveImage(false)
    }
    const formAdd = useFormik({
        initialValues: {
            songName: "",
            genre: "",
            composer: "",
            songWriter: "",
            vocalist: "",
            fileUrl:"",
            imageUrl:""
        },
        onSubmit: (values) => {
            let songData = {
                songName: values.songName,
                genre: values.genre,
                composer: values.composer,
                songWriter: values.songWriter,
                vocalist: values.vocalist,
                fileUrl:values.fileUrl,
                imageUrl:values.imageUrl
            }
            AdminSong.addSong(songData)
                .then(() => {
                    loadSongs()
                    handleClose()
                    formAdd.resetForm()
                    resetFormFileAndImage()
                })
                .catch((err) => {
                    console.log(err)
                })
        },
    });

    return (
        <div>
            <Button sx={{
                backgroundColor: "green",
                color: "white",
                margin: "10px",
                '&:hover': {
                    backgroundColor: "grey",
                    color: "white",
                },
            }} onClick={handleOpen}><Add/></Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box component="form" onSubmit={formAdd.handleSubmit} noValidate sx={style}>
                    <h1>Add a new song</h1>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        value={formAdd.values.songName}
                        onChange={formAdd.handleChange}
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
                        value={formAdd.values.genre}
                        onChange={formAdd.handleChange}
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
                        value={formAdd.values.composer}
                        onChange={formAdd.handleChange}
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
                        value={formAdd.values.songWriter}
                        onChange={formAdd.handleChange}
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
                        value={formAdd.values.vocalist}
                        onChange={formAdd.handleChange}
                        id="vocalist"
                        label="Vocalist"
                        name="vocalist"
                        autoComplete="vocalist"
                        autoFocus
                    />
                    <FileUpload setValue={formAdd.setFieldValue} inputType="fileUrl" whenDone={setHaveFile} />
                    <FileUpload setValue={formAdd.setFieldValue} inputType="imageUrl" whenDone = {setHaveImage}/>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{mt: 3, mb: 2, backgroundColor: 'green'}}
                        disabled= {haveFile && haveImage ? false : true}
                    >
                        Save
                    </Button>
                </Box>
            </Modal>
        </div>
    );
}