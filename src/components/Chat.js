import "./Chat.css"
import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, MoreVert, SearchOutlined, InsertEmoticon, Mic } from '@material-ui/icons';
import { useState } from "react";
import axios from "../axios";
import Roomies from '../Assets/Roomies.jpg';

function Chat({ messages }) {

    const [input, setInput] = useState("");

    const sendMessage = async (e) => {
        e.preventDefault();

        await axios.post("/messages/new", {
            "message": input,
            "name": "Sandhya",
            "timestamp": "Just now",
            "received": true
        })

        setInput("");

        console.log(input);
    }

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={Roomies} />
                <div className="chat__headerInfo">
                    <h3>Roomies</h3>
                    <p>Last seen at...</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>

            </div>

            <div className="chat__body">
                {messages.map((message) => (
                    <p className={`chat__message ${message.received && "chat__reciever"}`}>
                        <span className="chat__name">{message.name}</span>
                        {message.message}
                        <span className="chat__timestamp">{message.timestamp}</span>
                    </p>
                ))}
            </div>

            <div className="chat__footer">
                <InsertEmoticon />
                <form
                    value={input}
                    onChange={e => setInput(e.target.value)}
                >
                    <input placeholder="Type a message" type="text" value={input}/>
                    <button onClick={sendMessage} type="submit">Send a message</button>
                </form>
                <Mic />
            </div>
        </div>
    )
}

export default Chat;