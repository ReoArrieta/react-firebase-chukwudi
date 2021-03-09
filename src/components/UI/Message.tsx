import React, { FC } from "react";

interface MessageProps {
  msg: string;
  type: "danger" | "success";
}

const Message: FC<MessageProps> = ({ msg, type }) => {
  let typeClass = "";

  if (type === "danger") {
    typeClass = "alert-danger";
  }

  if (type === "success") {
    typeClass = "alert-success";
  }

  return (
    <div className={`alert ${typeClass}`}>
      {msg}
    </div>
  );
};

export default Message;
