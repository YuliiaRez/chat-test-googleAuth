import React, { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import ConversationList from "../../components/ConversationList";
import LogOutButton from "../../components/LogOutButton/LogOutButton";
import MessageList from "../../components/MessageList";
import { initialConversation } from "./initial";

import "./Messanger.css";

export default function Messanger() {
  const [currConvers, setCurrConvers] = useState(initialConversation);

  const chooseConvers = (data) => {
    setCurrConvers({ ...currConvers, ...data });
  };

  return (
    <>
      <Toaster styly={{ background: "grey" }} />
      <div className="messanger">
        <div className="scrollable sidebar">
          <ConversationList
            chooseConvers={chooseConvers}
            currConvers={currConvers}
          />
        </div>
        <div className="scrollable content">
          <MessageList currConvers={currConvers} />
        </div>
      </div>
    </>
  );
}
