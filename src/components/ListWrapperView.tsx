import React, { FC } from "react";
import { List } from "../types/List";
import ListView from "./ListView";
import { makeStyles } from "@material-ui/styles";
import AddListView from "./forms/AddListView";

interface ListWrapperViewProps {
    lists: List[];
}

const ListWrapperView: FC<ListWrapperViewProps> = props => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            {props.lists.map(list => (
                <ListView key={list.id} list={list} />
            ))}
            <AddListView />
        </div>
    );
};
const useStyles = makeStyles(theme => ({
    container: {
        display: "flex",
        justifyContent: "space-between",
    },
}));

export default ListWrapperView;
