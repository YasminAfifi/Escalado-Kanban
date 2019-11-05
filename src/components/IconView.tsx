import React, { Component, FC } from "react";
import EmojiObjects from "@material-ui/icons/EmojiObjects";
import ViewList from "@material-ui/icons/ViewList";
import Loop from "@material-ui/icons/Loop";
import BugReport from "@material-ui/icons/BugReport";
import Done from "@material-ui/icons/Done";
import CalendarToday from "@material-ui/icons/CalendarToday";
import Schedule from "@material-ui/icons/Schedule";

const IconView: FC<{ name: string }> = ({ name }) => {
    const icons = {
        emoji: EmojiObjects,
        viewList: ViewList,
        loop: Loop,
        bug: BugReport,
        done: Done,
        calender: CalendarToday,
        schedule: Schedule,
    };
    if (name && icons[name]) {
        return React.createElement(icons[name]);
    } else {
        return null;
    }
};
export default IconView;
