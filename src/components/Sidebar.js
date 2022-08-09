import "./Sidebar.css"
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import { Avatar, IconButton } from "@material-ui/core";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { SearchOutlined } from '@material-ui/icons';
import myImg from '../Assets/MyProfile.jpg';
import Roomies from '../Assets/Roomies.jpg';
import Friends from '../Assets/Friends.jpg';
import Family from '../Assets/Family.JPG';
import SidebarChat from "./SidebarChat";

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src={myImg} />

                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined />
                    <input placeholder="Search or start new chat" type="text" />
                </div>
            </div>

            <div className="sidebar__chats">
                <SidebarChat src={Roomies} name='Rommies' message="Hello guys"/>
                <SidebarChat src={Friends} name='VSSUT 2023' message="There will be an event tomorrow!"/>
                <SidebarChat src={Family} name='Friends Forever' message="Let's catch up tomorrow!" />
            </div>

        </div>

    )
}

export default Sidebar;