import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function MusicItem({item}) {
    return (
        <>
            <Card sx={{ maxWidth: 190,maxHeight:240,backgroundColor:"#2b3038",color:"#b4c4db" }}>
                <CardMedia
                    component="img"
                    sx={{ height: 140 }}
                    image={item.imageUrl}
                    title={item.songName}
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