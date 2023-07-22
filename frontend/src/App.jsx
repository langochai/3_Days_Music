import "./App.css"
import MediaControlCard from "./components/MediaCard.jsx";
import Sidebar from "./components/layout/Sidebar.jsx";
import MainViewContainer from "./components/layout/MainViewContainer.jsx";
import NavBar from "./components/layout/NavBar.jsx";
import ListSong from "./components/admin/listSong.jsx";

export function App() {

    return (
        <>
            <div className={"body"}>
                <Sidebar/>
                <NavBar/>
                <ListSong/>
                <MainViewContainer/>
                <MediaControlCard/>
            </div>
        </>
    );
}

export default App