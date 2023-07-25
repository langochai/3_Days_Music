import Sidebar from "../../components/layout/Sidebar.jsx";
import MainViewContainer from "../../components/layout/MainViewContainer.jsx";
import MediaControlCard from "../../components/MediaCard.jsx";
import NavBar from "../../components/layout/NavBar.jsx";
import {Outlet} from "react-router-dom";

export default function Home() {
    return (
        <div className={"body"}>
            <NavBar/>
            <Sidebar/>
            <Outlet/>
            <MediaControlCard/>
        </div>
    )
}