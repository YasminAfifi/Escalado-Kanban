import React, { FC, useState } from "react";
import { Add, Close } from "@material-ui/icons";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import {
    Button,
    IconButton,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    FormGroup,
    FormLabel,
    RadioGroup,
    Radio,
    FormControlLabel,
    TextField,
    Fab,
} from "@material-ui/core";
import { Card } from "../../types/Card";
import { List } from "../../types/List";
import IconView from "../IconView";

interface AddCardViewProps {
    loading?: Boolean;
    list: List;
}

const AddCardView: FC<AddCardViewProps> = props => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [cardTitle, setCardTitle] = useState(null);
    const [cardDescripton, setCardDescription] = useState(null);
    const [userInfo, setUserInfo] = useState(null);
    const [cardColor, setCardColor] = useState(null);
    const [cardDueDate, setCardDueDate] = useState(null);

    const classes = useStyles();
    let newCard = {} as Card;

    return (
        <div>
            <IconButton size="small" color="inherit" onClick={() => setIsDialogOpen(!isDialogOpen)}>
                <Add />
            </IconButton>
            <Dialog
                keepMounted
                open={isDialogOpen}
                className={clsx(classes.dialog, {
                    [classes.dialogOpen]: isDialogOpen,
                })}
            >
                <DialogTitle>Create a New Card to {props.list.title}</DialogTitle>
                <DialogContent>
                    <FormGroup>
                        <FormLabel>Card Title(*):</FormLabel>
                        <TextField
                            name="title"
                            id={newCard.title}
                            onChange={() => setCardTitle(cardTitle)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Card Details:</FormLabel>
                        <TextField
                            name="content"
                            id={newCard.description}
                            onChange={() => setCardDescription(cardDescripton)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Assign to:</FormLabel>
                        <TextField
                            aria-label="user"
                            name="user"
                            // id={formatDisplayName(newCard.assignee)}
                            onChange={() => setUserInfo(userInfo)}
                        >
                            {/* {formatDisplayName(newCard.assignee)} */}
                        </TextField>
                    </FormGroup>
                    <FormGroup>
                        <FormControl>
                            <FormLabel>Card Color:</FormLabel>
                            <RadioGroup
                                aria-label="color"
                                name="color"
                                id={newCard.color}
                                onChange={() => setCardColor(cardColor)}
                            >
                                <FormControlLabel
                                    value={classes.colorBlue}
                                    control={<StyledRadio />}
                                    label="Blue"
                                />
                                <FormControlLabel
                                    value={classes.colorGreen}
                                    control={<StyledRadio />}
                                    label="Green"
                                />
                                <FormControlLabel
                                    value={classes.colorYellow}
                                    control={<StyledRadio />}
                                    label="Yellow"
                                />
                                <FormControlLabel
                                    value={classes.colorRed}
                                    control={<StyledRadio />}
                                    label="Red"
                                />
                            </RadioGroup>
                        </FormControl>
                    </FormGroup>
                    <hr />
                    <div className={classes.Form}>
                        <IconView name="calender" />
                        Created Date: {newCard.createdAt} <br />
                        <TextField
                            id="datetime-local"
                            type="datetime-local"
                            defaultValue="2017-05-24T10:30"
                            InputLabelProps={{ shrink: true }}
                        />
                    </div>
                    <div className={classes.Form}>
                        <IconView name="schedule" />
                        Due Date: {newCard.dueDate} <br />
                        <TextField
                            id="datetime-local"
                            type="datetime-local"
                            defaultValue="2017-05-24T10:30"
                            InputLabelProps={{ shrink: true }}
                            onChange={() => setCardDueDate(cardDueDate)}
                        />
                    </div>
                </DialogContent>

                <DialogActions>
                    <Button
                        variant="contained"
                        color="default"
                        onClick={() => setIsDialogOpen(isDialogOpen)}
                    >
                        <Add />
                        Add
                    </Button>
                    <Button
                        className={classes.Form}
                        variant="contained"
                        color="default"
                        onClick={() => setIsDialogOpen(!isDialogOpen)}
                    >
                        <Close />
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};
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
    container: {
        display: "flex",
        flexWrap: "wrap",
    },
    textField: {
        // marginLeft: theme.spacing(1),
        // marginRight: theme.spacing(1),
        // width: 200,
    },
    colorRed: {
        backgroundColor: "#e91e63",
    },
    colorGreen: {
        backgroundColor: "#4caf50",
    },
    colorBlue: {
        backgroundColor: "#007bff",
    },
    colorYellow: {
        backgrounColor: "#FFFF00",
    },
    dialog: {},
    dialogOpen: {},
    Form: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
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

export default AddCardView;
