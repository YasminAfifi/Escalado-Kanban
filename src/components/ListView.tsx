import React, { FC } from "react";
import { List } from "../types/List";
import CardView from "./CardView";
import IconView from "./IconView";
import ProjTooltip from "./tooltip";
import { makeStyles, Typography } from "@material-ui/core";

interface ListViewProps {
    list: List;
}

const ListView: FC<ListViewProps> = props => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <IconView name={props.list.icon} />
                <Typography variant="h6">{props.list.title}</Typography>
                <ProjTooltip id="1" title="Add Cards in Backlog List" placement="top" />
            </div>
            {props.list.cards.map(card => (
                <CardView key={card.id} card={card} />
            ))}
        </div>
    );
};

const useStyles = makeStyles(() => ({
    container: {
        backgroundColor: "#f5f8fc",
        width: 200,
        marginLeft: 50,
        marginRight: 10,
        borderRadius: "0 0 4px 4px",
        display: "inline-table",
    },
    header: {
        backgroundColor: "skyblue",
        boxShadow: "0px 3px 5px #bababa7d",
        fontSize: 16,
        alignContent: "center",
    },
}));
export default ListView;
