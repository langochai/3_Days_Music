
import {Box, Link} from '@mui/material';
import { Home } from '@mui/icons-material';
export default function Sidebar (){
    return(
        <>
        <div  className={"Left-sideBar"}>
            <div className={"top-left-sideBar"}>
                <Box sx={{ display: 'flex', alignItems: 'center', margin : "10px 20px "  }}>
                    <Home fontSize="large" sx={{ color: 'white', borderRadius: '50%', marginRight: '10px', padding: '5px', backgroundColor: '#121212' }} />
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <h3 style={{ color: 'white', borderRadius: '5px', padding: '5px', backgroundColor: '#121212', margin: 0 }}>Trang chủ</h3>
                    </Link>
                </Box>
            </div>

        </div>
        </>
    )
}