import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function GenreItem({item}) {
	return (
		<Card sx={{ maxWidth: 345,backgroundColor:"#2b3038",color:"#b4c4db",textAlign:"center" }}>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{item}
				</Typography>
			</CardContent>
		</Card>
	);
}