import {Box} from '@mui/material';
import {Home} from '@mui/icons-material';
import {Link} from 'react-router-dom';
import {useSelector} from "react-redux";

export default function Sidebar() {
    const auth = useSelector(state => state.auth)
    console.log(auth)
    return (
        <>
            <div className={"Left-sideBar"}>
                <div className={"top-left-sideBar"}>
                    <Link to="/" style={{textDecoration: 'none'}}>
                        <Box sx={{display: 'flex', alignItems: 'center', margin: "10px 20px "}}>
                            <Home fontSize="large" sx={{
                                color: 'white',
                                borderRadius: '50%',
                                marginRight: '10px',
                                padding: '5px',
                                backgroundColor: '#121212',
                            }}/>
                            <h3 style={{
                                color: 'white',
                                borderRadius: '5px',
                                padding: '5px',
                                backgroundColor: '#121212',
                                margin: 0
                            }}>Trang chủ</h3>
                        </Box>
                    </Link>
                </div>
            </div>
        </>
    )
}