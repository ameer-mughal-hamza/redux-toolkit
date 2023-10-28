import React from "react";
import "./menulink.css";
import { useSelector } from "react-redux";

export default function MenuLink({ icon, text }: { icon: any; text: string }) {
  const { name } = useSelector((state: any) => state.user.userInfo);
  return (
    <div className="menulink">
      {icon}
      <span className="menuLinkText">{text}</span>
      <span className="menuLinkTextName">
        {text === "Logout" && `( ${name} )`}
      </span>
    </div>
  );
}
