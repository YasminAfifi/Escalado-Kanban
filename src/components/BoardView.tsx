import {
    Divider,
    Drawer,
    IconButton,
    List as MuiList,
    ListItem,
    ListItemIcon,
    ListItemText,
    makeStyles,
} from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import InboxIcon from "@material-ui/icons/Inbox";
import clsx from "clsx";
import React, { FC, useState, useEffect } from "react";
import HeaderView from "./common/HeaderView";
import ListWrapperView from "./ListWrapperView";
import { Board } from "../types/Board";
import Background from "../Images/Wallpaper2.jpg";

interface BoardViewProps {
    board: Board;
}

const BoardView: FC<BoardViewProps> = props => {
    const [lists, setLists] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: isDrawerOpen,
                    [classes.drawerClose]: !isDrawerOpen,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: isDrawerOpen,
                        [classes.drawerClose]: !isDrawerOpen,
                    }),
                }}
                open={isDrawerOpen}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
                        <ChevronRightIcon />
                    </IconButton>
                </div>
                <Divider />
                <MuiList>
                    {["Project 1", "Project 2"].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </MuiList>
            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: isDrawerOpen,
                })}
            >
                <HeaderView />

                <div className={classes.appBarSpacer} />

                <ListWrapperView lists={props.board.lists} />
            </main>
        </div>
    );
};
export default BoardView;

const drawerWidth = 200;
const useStyles = makeStyles(theme => ({
    menuText: {
        display: "inline-block",
        verticalAlign: "top",
        padding: "2px 0 0 15px",
        fontWeight: "bold",
        fontSize: 14,
    },
    appBarSpacer: theme.mixins.toolbar,

    container: {
        display: "flex",
        height: "100vh",
        backgroundImage: `url(${Background})`,
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },

    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: "nowrap",
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: "hidden",
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up("sm")]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    contentShift: {
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));
