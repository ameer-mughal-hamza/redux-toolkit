import React from "react";
import MenuLink from "../menuLink/MenuLink";
import "./leftbar.css";
import {
  HomeOutlined,
  List,
  ShoppingBasketOutlined,
  GroupOutlined,
  FileCopyOutlined,
  PhotoSizeSelectActualOutlined,
  MovieCreationOutlined,
  ScheduleOutlined,
  HearingOutlined,
  Settings,
  ExitToAppOutlined,
} from "@mui/icons-material";

export default function Leftbar() {
  return (
    <div className="leftbar">
      <div className="leftbarWrapper">
        <MenuLink icon={<HomeOutlined />} text="Homepage" />
        <MenuLink icon={<List />} text="Lists" />
        <MenuLink icon={<ShoppingBasketOutlined />} text="Products" />
        <MenuLink icon={<GroupOutlined />} text="Groups" />
        <MenuLink icon={<FileCopyOutlined />} text="Pages" />
        <MenuLink icon={<PhotoSizeSelectActualOutlined />} text="Photos" />
        <MenuLink icon={<MovieCreationOutlined />} text="Videos" />
        <MenuLink icon={<ScheduleOutlined />} text="Schedule" />
        <MenuLink icon={<HearingOutlined />} text="Wishlist" />
        <MenuLink icon={<Settings />} text="Settings" />
        <MenuLink icon={<ExitToAppOutlined />} text="Logout" />
      </div>
    </div>
  );
}
