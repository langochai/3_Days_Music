import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {setSong} from "../../redux/features/songs/songSlice.js";
import {useDispatch} from "react-redux";

function MusicItem({item}) {
    const dispatch = useDispatch()
    const handleClick = () =>{
        dispatch(setSong(item))
    }
    return (
        <>
            <Card sx={{ maxWidth: 190,maxHeight:240,backgroundColor:"#2b3038",color:"#b4c4db" }}>
                <CardMedia
                    component="img"
                    sx={{ height: 140, cursor:"pointer" }}
                    image={item.imageUrl}
                    title={item.songName}
                    onClick={handleClick}
                />
                <CardContent
                    sx={{height:100}}
                >
                    <Typography gutterBottom variant="h7" component="div" sx={{height:35}}>
                        {item.songName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{height:65,color:"white"}}>
                        Composer: {item.composer}
                    </Typography>
                </CardContent>
            </Card>
        </>
    );
}

export default MusicItem;