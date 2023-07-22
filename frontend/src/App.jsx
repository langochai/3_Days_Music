import "./App.css"
import FileUpload from "./components/FileUpload.jsx";
import MediaControlCard from "./components/MediaCard.jsx";
import Sidebar from "./components/layout/sidebar.jsx";
import HomeUser from "./components/user/home.user.jsx";
import ListSong from "./components/admin/listSong.jsx";
import NavBar from "./components/layout/navBar.jsx";

export function App() {

    return (
        <>
            <div className={"body"}>
                <Sidebar/>
                <NavBar/>
                <ListSong/>
                {/*<HomeUser/>*/}
                {/*<MediaControlCard/>*/}
            </div>


        </>
    );
}

export default App