import React from 'react';
import Button from '@material-ui/core/Button';
import { Add, Close } from '@material-ui/icons';
import { Dialog, DialogActions, DialogContent, DialogTitle, Slide, FormLabel, TextField, FormGroup } from '@material-ui/core';
//import axios from 'axios'

class AddList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            title: '',
            createdBy: '',
            count: 2
        };

        //this.toggle = this.toggle.bind(this);
    }

    handleChange = event => {
        this.setState({ name: event.target.value });
    }
    handleInput(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state.dueDate)
    }

    // getListCount = () => {
    //     axios.get(`/list/count`)
    //         .then((r) => {
    //             this.setState({
    //                 count: r.data.count,
    //                 err: ''
    //             })
    //         })
    //         .catch((e) => {
    //             this.setState({
    //                 err: e
    //             })
    //         })
    // }
    // handleClick = event => {
    //     this.getListCount()
    //     axios.post('/list', {
    //         title: this.state.title,
    //         createdBy: this.state.createdBy,
    //         listId: this.state.count
    //     })
    //         .then((response) => {
    //             if (response.data.error)
    //                 alert(response.data.error)
    //             else {
    //                 this.toggle();
    //                 this.setState({
    //                     title: null,
    //                     createdBy: null,
    //                     listId: null,
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

    render() {
        return (
            <div>
                <Button variant="contained" color="default" onClick={this.toggle}><Add />New Project</Button>
                <Dialog keepMounted open={this.state.open} className={this.props.className} >
                    <DialogTitle>
                        Add List
                    </DialogTitle>
                    <DialogContent>

                        <FormGroup>
                            <FormLabel component="title">List Title(*):</FormLabel>
                            <TextField type="text" name="title" onChange={this.handleInput.bind(this)} />
                        </FormGroup>
                        <FormGroup>
                            <FormLabel component="createdBy">Created by(*):</FormLabel>
                            <TextField type="text" name="createdBy" onChange={this.handleInput.bind(this)} />
                        </FormGroup>


                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" color="default" /*onClick={this.handleClick.bind(this)}*/><Add />Add</Button>
                        <Button variant="contained" color="default" onClick={this.toggle}><Close />Close</Button>
                    </DialogActions>

                </Dialog>
            </div>
        );
    }



}
export default AddList;