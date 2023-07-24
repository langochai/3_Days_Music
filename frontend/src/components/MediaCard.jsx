import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {useState} from "react";
import AudioPlayer from "react-h5-audio-player";
import 'react-h5-audio-player/lib/styles.css';
import {useSelector} from "react-redux";

export default function MediaControlCard() {
    const song = useSelector(state => state.song.song)
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const tracks = [  song  ];
    const handleNextTrack = () => {
        const nextTrackIndex = (currentTrackIndex + 1) % tracks.length;
        setCurrentTrackIndex(nextTrackIndex);
    };
    const handlePreTrack = () => {
        const nextTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
        setCurrentTrackIndex(nextTrackIndex);
    };

    return (
        <Card sx={{display: 'flex',position:"fixed", backgroundColor:"black" }} className='card-container'>
            <CardMedia
                component="img"
                sx={{width: 151}}
                image="https://mui.com/static/images/cards/live-from-space.jpg"
                alt="Live from space album cover"
            />
            <Box sx={{display: 'flex', flexDirection: 'column', width: '100%'}}>
                <CardContent sx={{flex: '1 0 auto'}}>
                    <Typography component="div" color="white" variant="h5">
                        {tracks[currentTrackIndex].title}
                    </Typography>
                    <Typography variant="subtitle1" color="white" component="div">
                        {tracks[currentTrackIndex].artist}
                    </Typography>
                </CardContent>
                <Box sx={{display: 'flex', alignItems: 'center', pl: 1, pb: 1}}>
                    <AudioPlayer
                        src={tracks[currentTrackIndex].fileUrl}
                        layout="stacked-reverse"
                        style={{backgroundColor : "black", color: "white"}}
                        showSkipControls={true}
                        showJumpControls={false}
                        onClickPrevious={handlePreTrack}
                        onClickNext={handleNextTrack}
                        onEnded={handleNextTrack}
                    />
                </Box>
            </Box>
        </Card>
    );
}