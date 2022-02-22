import React, { useContext } from "react";
import ContextComponentF from "./ContextComponentF";
import { UserContext, ChannelContext } from "../App";
function ContextComponentE() {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);
  return (
    <div>
      {user} - {channel}
      <ContextComponentF />
      {}
    </div>
  );
}

export default ContextComponentE;
