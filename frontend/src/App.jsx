import "./App.css"
import MediaControlCard from "./components/MediaCard.jsx";
import Sidebar from "./components/layout/Sidebar.jsx";
import HomeUser from "./components/layout/home.user.jsx";

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