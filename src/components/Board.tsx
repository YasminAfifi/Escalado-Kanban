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
import MailIcon from "@material-ui/icons/Mail";
import clsx from "clsx";
import React, { FC, useState } from "react";
import HeaderApp from "./common/header";
import List from "./list";

const Board: FC = () => {
    const [lists, setLists] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(true);

    const classes = useStyles();
    return (
        <div className={classes.container}>
            <HeaderApp />
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
                    <IconButton onClick={() => setIsDrawerOpen(false)}>
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
                    {/* let listTable;
                    listTable = lists.map((list, index) => {
                        return (
                            <li key={index}>
                                <Link to={`/list/${list.listId}`} activeClassName="active">
                                <i className="fas fa-list-alt"></i>
                                <span className={classes.menuText}>{list.title}</span>
                                </Link>
                            </li>
                        );
                    }); */}
                </MuiList>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <List cards={[]} loading={loading} />
            </main>
            {/* <div className="side">
                <span className="logo">
                    <IconButton size="small" color="default">
                        <ScatterPlot />
                    </IconButton>
                    Stories
                </span>
                <ul className="side-menu">{listTable}</ul>
                <div className="otherMenu">
                    <AddList />
                </div>
            </div>
            <div className="con">
                <List cards={[]} loading={loading} />
                <List listName={this.state.lists.filter(i=>i.listId===parseInt(this.props.router.params.id))} listType={this.props.params.id} lists={this.state.lists} loading={this.state.loading}/>
            </div> */}
        </div>
    );
};
export default Board;

const drawerWidth = 200;
const useStyles = makeStyles(theme => ({
    menuText: {
        display: "inline-block",
        verticalAlign: "top",
        padding: "2px 0 0 15px",
        fontWeight: "bold",
        fontSize: 14,
    },
    container: {
        display: "flex",
    },
    appBarSpacer: theme.mixins.toolbar,

    // root: {
    //     display: "flex",
    // },
    // appBar: {
    //     zIndex: theme.zIndex.drawer + 1,
    //     transition: theme.transitions.create(["width", "margin"], {
    //         easing: theme.transitions.easing.sharp,
    //         duration: theme.transitions.duration.leavingScreen,
    //     }),
    // },
    // appBarShift: {
    //     marginLeft: drawerWidth,
    //     width: `calc(100% - ${drawerWidth}px)`,
    //     transition: theme.transitions.create(["width", "margin"], {
    //         easing: theme.transitions.easing.sharp,
    //         duration: theme.transitions.duration.enteringScreen,
    //     }),
    // },
    // menuButton: {
    //     marginRight: 36,
    // },
    // hide: {
    //     display: "none",
    // },
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
}));

// constructor(props, context) {
//     super(props, context);
//     this.state = {
//         open: false,
//         show: true,
//         cards: [],
//         lists: [],
//         err: "",
//         err2: "",
//         loading: true,
//         loadingList: true,
//     };

//     //this.getData = this.getData.bind(this)
// }

// componentDidMount = () => {
//     this.getListDetails();
//     this.getData();
//     setInterval(() => {
//         this.getData();
//     }, 2000);
// }

// getListDetails = () => {
//     axios.get(`/list`)
//         .then((r) => {
//             this.setState({
//                 list: r.data,
//                 err2: ''
//             })
//         })
//         .then(() => {
//             this.setState({
//                 loadingList: false
//             })
//         })
//         .catch((e) => {
//             this.setState({
//                 loadingList: false,
//                 err2: e
//             })
//         })

// }
// getData = () => {
//     axios.get(`/cards/${this.props.params.id}`)
//         .then((r) => {
//             this.setState({
//                 cards: r.data,
//                 err: ''
//             })
//         })
//         .then(() => {
//             this.setState({
//                 loading: false
//             })
//         })
//         .catch((e) => {
//             if (!e.response) {
//                 this.setState({
//                     loading: true,
//                     err: e
//                 })
//             }
//             else
//                 this.setState({
//                     loading: false,
//                     err: e
//                 })
//         })

// }
