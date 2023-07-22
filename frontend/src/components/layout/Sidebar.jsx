
import {Box} from '@mui/material';
import { Home } from '@mui/icons-material';
import {Link} from "react-router-dom";

export default function Sidebar (){
    return(
        <>
        <div  className={"Left-sideBar"}>
            <div className={"top-left-sideBar"}>
                <Box sx={{ display: 'flex', alignItems: 'center', margin : "10px 20px "  }}>
                    <Home fontSize="large" sx={{ color: 'white', borderRadius: '50%', marginRight: '10px', padding: '5px', backgroundColor: '#121212' }} /> {/* Chỉnh sửa kiểu chữ và bo góc cho biểu tượng "home" */}
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <h3 style={{ color: 'white', borderRadius: '5px', padding: '5px', backgroundColor: '#121212', margin: 0 }}>Trang chủ</h3> {/* Chỉnh sửa kiểu chữ, bo góc và loại bỏ gạch chân cho văn bản */}
                    </Link>
                </Box>
            </div>

        </div>
        </>
    )
}