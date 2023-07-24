import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import {CardActionArea} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import NavBar from "./NavBar.jsx";

export default function MainViewContainer() {
    const img = [
        {
            id: 0,
            src: "https://seeded-session-images.scdn.co/v1/img/artist/6TITnFVRcl0AcZ4syE7Toe/vi",
            title :"Low G Radio",
            describe:""
        },
        {
            id: 1,
            src: "\thttps://seeded-session-images.scdn.co/v1/img/artist/1zSv9qZANOWB4HRE8sxeTL/vi",
            title :"Mck Radio",
            describe:""
        },
        {
            id: 2,
            src: "\thttps://dailymix-images.scdn.co/v2/img/ab6761610000e5eba7e82b4fbe3605c71aed9fee/1/vi/default",
            title :"Erik Radio",
            describe:""
        },
        {
            id: 3,
            src: "\thttps://seeded-session-images.scdn.co/v1/img/artist/4grjJqg7iwQ8RKHs8d9Snh/vi",
            title :"AndreeRightHand Radio",
            describe:""
        },
        {
            id: 4,
            src: "\thttps://seeded-session-images.scdn.co/v1/img/artist/57g2v7gJZepcwsuwssIfZs/vi",
            title :"Vũ Radio",
            describe:""
        },
        {
            id: 5,
            src: "https://seeded-session-images.scdn.co/v1/img/artist/1LEtM3AleYg1xabW6CRkpi/vi",
            title :"Đen Radio",
            describe:""
        }]
    return (
        <>
            <div className={"main-view-container"}>
                <div style={{padding: " 20px 30px ", display: "flex", flexWrap: "wrap"} }>
                    {img.map((item, index) => (
                        <Card key={index} sx={{margin: "20px", maxWidth: 345, backgroundColor: "#202020",color:"white"}}>
                            <CardActionArea>
                                <CardMedia

                                    component="img"
                                    height="140"
                                    image={item.src}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" fontWeight="bold" component="div">
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" color="white">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    ))}
                </div>
            </div>
        </>
    )
}