import React, { FC, useState } from "react";
import Button from "@material-ui/core/Button";
import { Add, Close } from "@material-ui/icons";
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormLabel,
    TextField,
    FormGroup,
    Paper,
    makeStyles,
} from "@material-ui/core";
import { List } from "../../types/List";

interface AddListViewProps {
    loading?: Boolean;
}
const AddListView: FC<AddListViewProps> = props => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [listTitle, setListTitle] = useState(null);
    const [userInfo, setUserInfo] = useState(null);
    let newList = {} as List;
    const classes = useStyles();
    return (
        <div>
            <Paper className={classes.header}>
                <Button color="default" onClick={() => setIsDialogOpen(!isDialogOpen)}>
                    <Add />
                    New List
                </Button>
            </Paper>
            <Dialog keepMounted open={isDialogOpen}>
                <DialogTitle>Add New List</DialogTitle>
                <DialogContent>
                    <FormGroup>
                        <FormLabel> List Title(*): </FormLabel>
                        <TextField
                            id={newList.title}
                            type="text"
                            onChange={() => setListTitle(listTitle)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel> Created by(*):</FormLabel>
                        <TextField type="text" onChange={() => setUserInfo(userInfo)} />
                    </FormGroup>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" color="default">
                        <Add />
                        Add
                    </Button>
                    <Button
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
export default AddListView;

const useStyles = makeStyles(theme => ({
    header: {
        backgroundColor: theme.palette.primary.light,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: theme.spacing(2),
        padding: theme.spacing(1),
    },
}));
