import Sidebar from "../../components/layout/Sidebar.jsx";
import NavBar from "../../components/layout/NavBar.jsx";
import ListSong from "../../components/admin/listSong.jsx";

export default function ManagerSong () {
    return(
        <>
            <Sidebar/>
            <NavBar/>
            <ListSong/>
        </>
    )
}