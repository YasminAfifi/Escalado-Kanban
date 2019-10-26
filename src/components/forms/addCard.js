import React from "react";
import { Add, Close, CalendarToday, Schedule } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import {
    Button,
    IconButton,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    Slide,
    FormGroup,
    FormLabel,
    RadioGroup,
    Radio,
    FormControlLabel,
    TextField,
} from "@material-ui/core";

//import moment from 'moment'
//import axios from 'axios'

// const useStyles1 = makeStyles(theme => ({
//     container: {
//         display: 'flex',
//         flexWrap: 'wrap',
//     },
//     textField: {
//         marginLeft: theme.spacing(1),
//         marginRight: theme.spacing(1),
//         width: 200,
//     },
// }));

const useStyles = makeStyles({
    root: {
        "&:hover": {
            backgroundColor: "transparent",
        },
    },
    icon: {
        borderRadius: "50%",
        width: 16,
        height: 16,
        boxShadow: "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
        backgroundColor: "#f5f8fa",
        backgroundImage: "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
        "$root.Mui-focusVisible &": {
            outline: "2px auto rgba(19,124,189,.6)",
            outlineOffset: 2,
        },
        "input:hover ~ &": {
            backgroundColor: "#ebf1f5",
        },
        "input:disabled ~ &": {
            boxShadow: "none",
            background: "rgba(206,217,224,.5)",
        },
    },
    checkedIcon: {
        backgroundColor: "#137cbd",
        backgroundImage: "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
        "&:before": {
            display: "block",
            width: 16,
            height: 16,
            backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
            content: '""',
        },
        "input:hover ~ &": {
            backgroundColor: "#106ba3",
        },
    },
});
function StyledRadio(props) {
    const classes = useStyles();

    return (
        <Radio
            className={classes.root}
            disableRipple
            color="default"
            checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
            icon={<span className={classes.icon} />}
            {...props}
        />
    );
}

class AddCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            title: "",
            content: "",
            contributors: "",
            createdBy: "Yasmin Afifi",
            dueDate: "",
            status: this.props.status,
            color: "",
            listId: this.props.listType,
            loading: false,
            users: [],
        };
        // this.toggle = this.toggle.bind(this);
    }
    // componentDidMount() {
    //     moment.locale('tr');
    //     this.changeColumnTitle()
    // }
    changeColumnTitle = number => {
        let newTitle;
        if (number === "1") newTitle = "Backlog";
        else if (number === "2") newTitle = "ToDo";
        else if (number === "3") newTitle = "In Progress";
        else if (number == "4") newTitle = "Testing";
        else newTitle = "Completed";

        return newTitle;
    };
    handleInput(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
        console.log(this.state.dueDate);
    }
    // getUsers() {
    //     axios.get('/users')
    //         .then((r) => {
    //             this.setState({
    //                 users: r.data,
    //                 err: ''
    //             })
    //         })
    //         .then((r) => {
    //             console.log(this.state.users)
    //         })
    //         .catch((e) => {
    //             this.setState({
    //                 err: e
    //             })
    //         })
    // }
    // handleClick = event => {
    //     axios.post('/cards', {
    //         title: this.state.title,
    //         content: this.state.content,
    //         status: this.props.status,
    //         contributors: this.state.contributors,
    //         dueDate: this.state.dueDate,
    //         color: this.state.color,
    //         listId: this.state.listId,
    //         createdBy: this.state.createdBy
    //     })
    //         .then((response) => {
    //             if (response.data.message)
    //                 alert(response.data.message)
    //             else {
    //                 this.toggle();
    //                 this.setState({
    //                     title: null,
    //                     content: null,
    //                     contributors: null,
    //                     dueDate: null,
    //                     loading: false
    //                 })
    //             }
    //             console.log(response);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });

    // }
    // toggle() {
    //     this.getUsers();
    //     this.setState({
    //         modal: !this.state.modal
    //     });
    // }
    render() {
        // const classes = useStyles1();
        // const { users } = this.state;
        let userContent;
        // if (!users)
        //     userContent = <option value="">Loading...</option>
        // else {
        //     userContent = users.map((user, index) => (
        //         <option key={index} value={user._id}>{user.name + " " + user.lastName}</option>
        //     ))
        // }
        return (
            <div>
                <IconButton
                    size="small"
                    variant="contained"
                    color="default" /*onClick={this.toggle}*/
                >
                    <Add />
                </IconButton>
                <Dialog keepMounted open={this.state.modal} className={this.props.className}>
                    <DialogTitle toggle={this.toggle}>
                        Create a New Card to {this.changeColumnTitle(this.props.status)}
                    </DialogTitle>
                    <DialogContent>
                        <FormGroup>
                            <FormLabel>Card Title(*):</FormLabel>
                            <TextField
                                name="title"
                                id="CardTitle"
                                onChange={this.handleInput.bind(this)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <FormLabel>Card Details:</FormLabel>
                            <TextField
                                name="content"
                                id="content"
                                onChange={this.handleInput.bind(this)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <FormLabel>Assign to:</FormLabel>
                            <RadioGroup
                                aria-label="color"
                                name="color"
                                id="userContent"
                                onChange={this.handleInput.bind(this)}
                            >
                                {userContent}
                            </RadioGroup>
                        </FormGroup>
                        <FormGroup>
                            <FormControl>
                                <FormLabel>Card Color:</FormLabel>
                                <RadioGroup
                                    aria-label="color"
                                    name="color"
                                    id="color"
                                    onChange={this.handleInput.bind(this)}
                                >
                                    <FormControlLabel
                                        value="colorBlue"
                                        control={<StyledRadio />}
                                        label="Blue"
                                    />
                                    <FormControlLabel
                                        value="colorGreen"
                                        control={<StyledRadio />}
                                        label="Green"
                                    />
                                    <FormControlLabel
                                        value="colorYellow"
                                        control={<StyledRadio />}
                                        label="Yellow"
                                    />
                                    <FormControlLabel
                                        value="colorRed"
                                        control={<StyledRadio />}
                                        label="Red"
                                    />
                                </RadioGroup>
                            </FormControl>
                        </FormGroup>
                        <hr />
                        <FormGroup>
                            {/* <IconButton size="small"><CalendarToday/></IconButton> Created Date: {moment().format('L, h:mm:ss')} <br /> */}
                        </FormGroup>
                        <FormGroup>
                            <IconButton size="small">
                                <Schedule />
                            </IconButton>
                            <TextField
                                id="datetime-local"
                                label="Due Date"
                                type="datetime-local"
                                defaultValue="2017-05-24T10:30"
                                InputLabelProps={{ shrink: true }}
                                onChange={this.handleInput.bind(this)}
                            />
                        </FormGroup>
                    </DialogContent>

                    <DialogActions>
                        <Button
                            variant="contained"
                            color="default" /*onClick={this.handleClick.bind(this)}*/
                        >
                            <Add />
                            Add
                        </Button>
                        <Button variant="contained" color="default" onClick={this.toggle}>
                            <Close />
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}
export default AddCard;
