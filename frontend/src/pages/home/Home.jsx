import Sidebar from "../../components/layout/Sidebar.jsx";
import MainViewContainer from "../../components/layout/MainViewContainer.jsx";
import MediaControlCard from "../../components/MediaCard.jsx";

export default function Home() {
    return (
        <div className={"body"}>
            <Sidebar/>
            <MainViewContainer/>
            <MediaControlCard/>
        </div>
    )
}