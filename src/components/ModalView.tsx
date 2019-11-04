import React, { useState } from "react";
import {
    Add,
    Close,
    CalendarToday,
    Schedule,
    DoubleArrow,
    Update,
    AssignmentInd,
} from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
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

function StyledRadio(props) {
    return <Radio disableRipple color="default" {...props} />;
}

interface ModalViewProps{
    modal: boolean,
    title: string ,
    content: string ,
    status: string ,
    color: string ,
}


const ModalView: FC<ModalViewProps> = props => {
    const[isModalOpen,setModalOpen] = useState(true),
    }
    handleInput(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
        console.log(this.state.title);
    }
    // handleClick = id => {
    //     axios.put(`/cards/update/${id}`, {
    //         title: this.state.title,
    //         content: this.state.content,
    //         status: this.state.status
    //     })
    //         .then((response) => {
    //             if (response.data.message)
    //                 alert(response.data.message)
    //             else {
    //                 this.toggle();
    //                 this.setState({
    //                     title: null,
    //                     content: null,
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
    //     this.setState({
    //         modal: !this.state.modal
    //     });
    // }

    
        let { title, content, status } = this.state;
        const { propContent, classType } = this.props;
        return (
            <div>
                <IconButton
                    size="small"
                    className={classType}
                    variant="contained"
                    color="default" /*onClick={this.toggle}*/
                >
                    <DoubleArrow />
                </IconButton>
                <Dialog
                    keepMounted
                    open={this.state.modal}
                    toggle={this.toggle}
                    className={this.props.className}
                >
                    <DialogTitle toggle={this.toggle}>
                        <FormLabel component="title">Card Title:</FormLabel>
                        <TextField
                            name="title"
                            value={title}
                            onChange={this.handleInput.bind(this)}
                        />
                    </DialogTitle>
                    <DialogContent>
                        <FormGroup>
                            <FormLabel conponent="content">Card Details:</FormLabel>
                            <TextField
                                name="content"
                                value={content}
                                onChange={this.handleInput.bind(this)}
                            />
                        </FormGroup>
                        <FormLabel conponent="status">Status:</FormLabel>
                        <FormControl component="fieldset">
                            <FormLabel component="color">Card Color:</FormLabel>
                            <RadioGroup
                                value={status}
                                aria-label="status"
                                name="status"
                                id="status"
                                onChange={this.handleInput.bind(this)}
                            >
                                <FormControlLabel
                                    value="1"
                                    control={<StyledRadio />}
                                    label="Backlog"
                                />
                                <FormControlLabel
                                    value="2"
                                    control={<StyledRadio />}
                                    label="TODO"
                                />
                                <FormControlLabel
                                    value="3"
                                    control={<StyledRadio />}
                                    label="In Progress"
                                />
                                <FormControlLabel
                                    value="4"
                                    control={<StyledRadio />}
                                    label="Testing"
                                />
                                <FormControlLabel
                                    value="5"
                                    control={<StyledRadio />}
                                    label="Completed"
                                />
                            </RadioGroup>
                        </FormControl>
                        <hr />
                        {/*<IconButton size="small"><CalendarToday/></IconButton> Created Date: {moment(propContent.date).format("DD.MM.YYYY")}<br />
                        <IconButton size="small"><Schedule /></IconButton> Due Date: {moment(propContent.dueDate).format("DD.MM.YYYY")}<br /> */}
                        <IconButton size="small">
                            <AssignmentInd />
                        </IconButton>{" "}
                        Created by: {propContent.createdBy}
                    </DialogContent>
                    <DialogActions>
                        <img
                            height="35"
                            alt={
                                propContent.contributors[0].name +
                                " " +
                                propContent.contributors[0].lastName
                            }
                            title={
                                propContent.contributors[0].name +
                                " " +
                                propContent.contributors[0].lastName
                            }
                            src={
                                "../../public/assets/img" + propContent.contributors[0].profilePhoto
                            }
                        />
                        <Button
                            variant="contained"
                            color="default"
                            onClick={() => this.handleClick(propContent._id)}
                        >
                            <Update />
                            Update
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
export default ModalView;
