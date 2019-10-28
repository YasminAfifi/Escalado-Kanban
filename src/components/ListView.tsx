import React, { FC } from "react";
import { List } from "../types/List";
import CardView from "./CardView";
import IconView from "./IconView";
import ProjTooltip from "./tooltip";
import { makeStyles, Typography, Paper } from "@material-ui/core";

interface ListViewProps {
    list: List;
}

const ListView: FC<ListViewProps> = props => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Paper className={classes.header}>
                <IconView name={props.list.icon} />
                <Typography variant="h6">{props.list.title}</Typography>
                <ProjTooltip id="1" title="Add Cards in Backlog List" placement="top" />
            </Paper>
            {props.list.cards.map(card => (
                <CardView key={card.id} card={card} />
            ))}
        </div>
    );
};

const useStyles = makeStyles(theme => ({
    container: {
        width: 200,
        borderRadius: "0 0 4px 4px",
        display: "inline-table",
    },
    header: {
        backgroundColor: theme.palette.primary.light,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: theme.spacing(2),
        padding: theme.spacing(1),
    },
}));
export default ListView;
