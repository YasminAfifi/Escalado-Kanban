import React, { FC, useState } from "react";
import AddCardView from "./forms/AddCardView";
import { Tooltip } from "@material-ui/core";
import Fade from "@material-ui/core/Fade";
import { List } from "../types/List";
import { Card } from "../types/Card";

interface ToolTipViewProps {
    id: string;
    title: String;
    list: List;
}

const ToolTipView: FC<ToolTipViewProps> = props => {
    const [isToolTipOpen, setIsToolTipOpen] = useState(false);

    return (
        <Tooltip
            title={props.title}
            placement="bottom"
            open={isToolTipOpen}
            id={"Tooltip-" + props.id}
            TransitionProps={{ timeout: 12 }}
        >
            <span style={{ marginLeft: 26 }}>
                <AddCardView list={props.list} />
            </span>
        </Tooltip>
    );
};
export default ToolTipView;

// constructor(props) {
//     super(props);
//     this.toggle = this.toggle.bind(this);
//     this.state = {
//         tooltipOpen: false,
//     };
// }

// toggle() {
//     this.setState({
//         tooltipOpen: !this.state.tooltipOpen,
//     });
// }

// render() {
