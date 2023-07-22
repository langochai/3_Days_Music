import {useEffect, useState} from "react";
import axios from 'axios';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { DataGrid } from '@mui/x-data-grid';

export default function ListSong() {
    const [listSong, setListSong] = useState([])
    useEffect(() => {
        // Gọi API để lấy dữ liệu
        axios.get('http://localhost:3000/user/song/list')
            .then(response => {
                setListSong(response.data.data);
            })
            .catch(error => {
                console.error('Lỗi khi gọi API:', error);
            });
    }, []);


    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Song Name', width: 200 },
        { field: 'artist', headerName: 'Artist', width: 150 },
    ];

    return (

        <div className={"main-view-container"}>
           <div style={{padding: " 70px 116px ", display: "flex", flexWrap: "wrap"}}>
            
           </div>
        </div>

    )
}