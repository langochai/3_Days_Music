import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {useState} from "react";
import AudioPlayer from "react-h5-audio-player";
import 'react-h5-audio-player/lib/styles.css';

export default function MediaControlCard() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const tracks = [
        {
            title: "Song 1",
            artist: "Artist 1",
            src: "/ChoiNhuTuiMy-AndreeRightHand-8465614.mp3",
        },
        {
            title: "Song 2",
            artist: "Artist 2",
            src: "ALoi-Double2TMasew-10119691.mp3",
        },
        {
            title: "Song 3",
            artist: "Artist 3",
            src: "DuaEmVeNhaa-GREYDChillies-9214678.mp3",
        },
        // Add more songs to the array as needed
    ];
    const handleNextTrack = () => {
        const nextTrackIndex = (currentTrackIndex + 1) % tracks.length;
        setCurrentTrackIndex(nextTrackIndex);
    };
    const handlePreTrack = () => {
        const nextTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
        setCurrentTrackIndex(nextTrackIndex);
    };

    return (
        <Card sx={{display: 'flex'}} className='card-container'>
            <CardMedia
                component="img"
                sx={{width: 151}}
                image="https://mui.com/static/images/cards/live-from-space.jpg"
                alt="Live from space album cover"
            />
            <Box sx={{display: 'flex', flexDirection: 'column', width: '100%'}}>
                <CardContent sx={{flex: '1 0 auto'}}>
                    <Typography component="div" variant="h5">
                        Live From Space
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        Mac Miller
                    </Typography>
                </CardContent>
                <Box sx={{display: 'flex', alignItems: 'center', pl: 1, pb: 1}}>
                    <AudioPlayer
                        src={tracks[currentTrackIndex].src}
                        layout="stacked-reverse"
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