import {Box} from '@mui/material';
import {Home,List} from '@mui/icons-material';
import {Link} from 'react-router-dom';

export default function Sidebar() {
    const userLoginJSON = localStorage.getItem('userLogin');
    const userLogin = JSON.parse(userLoginJSON);
    return (
        <>
            <div className={"Left-sideBar"}>
                <div className={"top-left-sideBar"}>
                    <Link to="/" style={{textDecoration: 'none'}}>
                        <Box sx={{display: 'flex', alignItems: 'center', margin: "10px 20px "}}>
                            {/*<Home fontSize="large" sx={{*/}
                            {/*    color: 'white',*/}
                            {/*    borderRadius: '50%',*/}
                            {/*    marginRight: '10px',*/}
                            {/*    padding: '5px',*/}
                            {/*    backgroundColor: '#121212',*/}
                            {/*}}/>*/}
                            <img src="/logo.png" style={{
                                color: 'white',
                                borderRadius: '50%',
                                marginRight: '10px',
                                padding: '5px',
                                backgroundColor: '#121212',
                                width: '40px'
                            }} alt="error"/>
                            <h3 style={{
                                color: 'white',
                                borderRadius: '5px',
                                padding: '5px',
                                backgroundColor: '#121212',
                                margin: 0
                            }}>Trang chủ</h3>
                        </Box>
                    </Link>
                    {userLogin && userLogin.role==="admin"?<Link to="/admin/list-song" style={{textDecoration: 'none'}}>
                        <Box sx={{display: 'flex', alignItems: 'center', margin: "10px 20px "}}>
                            <List fontSize="large" sx={{
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
                            }}>Danh sách bài hát</h3>
                        </Box>
                    </Link>:<></>}
                </div>
            </div>
        </>
    )
}