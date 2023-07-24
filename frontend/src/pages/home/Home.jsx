import Sidebar from "../../components/layout/Sidebar.jsx";
import MainViewContainer from "../../components/layout/MainViewContainer.jsx";
import MediaControlCard from "../../components/MediaCard.jsx";
import NavBar from "../../components/layout/NavBar.jsx";

export default function Home() {
    return (
        <div className={"body"}>
            <Sidebar/>
            <NavBar/>
            <MainViewContainer/>
            <MediaControlCard/>
        </div>
    )
}