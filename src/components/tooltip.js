import React, { Component } from 'react';
import AddCard from './forms/addCard';
import { Tooltip } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import HelpOutline from '@material-ui/icons/HelpOutline';
import Fade from '@material-ui/core/Fade';

class ProjTooltip extends Component {
    constructor(props) {
        super(props);
        this.title = " ";
        this.toggle = this.toggle.bind(this);
        this.state = {
            tooltipOpen: false,
        };
    }

    toggle() {
        this.setState({
            tooltipOpen: !this.state.tooltipOpen
        });
    }

    render() {
        return (
            <Tooltip title={this.props.title} placement={this.props.placement} open={this.state.tooltipOpen} id={'Tooltip-' + this.props.id} TransitionComponent={Fade} TransitionProps={{ timeout: 600 }}>
                <span>
                    <IconButton color="default" size="small" id={'Tooltip-' + this.props.id} data-toggle="tooltip">
                        <HelpOutline />
                        <AddCard listType={this.props.listType} status={this.props.id} />
                    </IconButton>
                    {this.props.content}
                </span>
            </Tooltip >

        );
    }


}
export default ProjTooltip;