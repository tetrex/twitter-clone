import React from "react";
import "./sidebar.css";
import SidebarOptions from "./SidebarOptions";
/**Icons Import */
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import ExploreIcon from "@material-ui/icons/Explore";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";

function SideBar() {
  return (
    <div className="sideBar">
      {/** Twitter icon*/}
      <TwitterIcon className="sidebar__TwitterIcon" />
      <SidebarOptions active Icon={HomeIcon} text="Home" />
      <SidebarOptions Icon={ExploreIcon} text="Explore" />
      <SidebarOptions Icon={NotificationsNoneIcon} text="notification" />
      <SidebarOptions Icon={MailOutlineIcon} text="Message" />
      <SidebarOptions Icon={BookmarkBorderIcon} text="Bookmark" />
      <SidebarOptions Icon={ListAltIcon} text="Lists" />
      <SidebarOptions Icon={PermIdentityIcon} text="Profile" />
      <SidebarOptions Icon={MoreHorizIcon} text="More" />
      {/**tweet button */}
      <Button variant="outlined" className="sideBar__tweet" fullWidth>
        Tweet
      </Button>

      {/**sidebar component */}
      {/**Tweet */}
    </div>
  );
}

export default SideBar;
