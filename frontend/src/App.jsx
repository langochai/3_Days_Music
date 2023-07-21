import "./App.css"
import FileUpload from "./components/FileUpload.jsx";
import MediaControlCard from "./components/MediaCard.jsx";
import Sidebar from "./components/layout/sidebar.jsx";
import HomeUser from "./components/user/home.user.jsx";

export function App() {

    return (
        <>
            <div className={"body"}>
                <Sidebar/>
                <HomeUser/>
                <MediaControlCard/>
            </div>

        </>
    );
}

export default App