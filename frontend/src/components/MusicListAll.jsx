import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useEffect, useState} from "react";
import {logout} from "../redux/features/auth/authSlice.jsx";
import axios from "axios";

export default function MusicListAll() {
    const [songs, setSongs] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/user/song/list')
            .then(result => {
                setSongs(result.data.data)
            })
            .catch(err => {
                console.log(err.message)
            })
    }, [])
    return (
        <>
            {songs.length > 0 && songs.map(song => (
                <Card sx={{width:200, height:200, margin:1}} key={song._id}>
                    <CardMedia
						component="img"
                        sx={{maxHeight: 120}}
                        image={song.imageUrl}
                        title={song.songName}
                    />
                    <CardContent sx={{maxHeight:80}}>
                        <Typography gutterBottom variant="h5" component="div">
							{song.songName}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Song info
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            ))}
        </>
    );
}