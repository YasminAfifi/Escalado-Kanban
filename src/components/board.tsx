import { IconButton } from "@material-ui/core";
import { ScatterPlot } from "@material-ui/icons";
import React, { Component } from "react";
import HeaderApp from "./common/header";
import AddList from "./forms/addList";
//import axios from 'axios'
// import { Link } from 'react-router'
import Loader from "./loader";
import List from "./list";

interface BoardState {
    open: boolean;
    show: boolean;
    cards: any[];
    lists: any[];
    err: string;
    err2: string;
    loading: boolean;
    loadingList: boolean;
}

class Board extends Component<{}, BoardState> {
    constructor(props, context) {
        super(props, context);
        this.state = {
            open: false,
            show: true,
            cards: [],
            lists: [],
            err: "",
            err2: "",
            loading: true,
            loadingList: true,
        };

        //this.getData = this.getData.bind(this)
    }
    // componentDidMount = () => {
    //     this.getListDetails();
    //     this.getData();
    //     setInterval(() => {
    //         this.getData();
    //     }, 2000);
    // }

    // getListDetails = () => {
    //     axios.get(`/list`)
    //         .then((r) => {
    //             this.setState({
    //                 list: r.data,
    //                 err2: ''
    //             })
    //         })
    //         .then(() => {
    //             this.setState({
    //                 loadingList: false
    //             })
    //         })
    //         .catch((e) => {
    //             this.setState({
    //                 loadingList: false,
    //                 err2: e
    //             })
    //         })

    // }
    // getData = () => {
    //     axios.get(`/cards/${this.props.params.id}`)
    //         .then((r) => {
    //             this.setState({
    //                 cards: r.data,
    //                 err: ''
    //             })
    //         })
    //         .then(() => {
    //             this.setState({
    //                 loading: false
    //             })
    //         })
    //         .catch((e) => {
    //             if (!e.response) {
    //                 this.setState({
    //                     loading: true,
    //                     err: e
    //                 })
    //             }
    //             else
    //                 this.setState({
    //                     loading: false,
    //                     err: e
    //                 })
    //         })

    // }
    render() {
        let { lists, loadingList } = this.state;
        let listTable;
        if (!loadingList)
            listTable = lists.map((list, index) => {
                return (
                    <li key={index}>
                        {/* <Link to={`/list/${list.listId}`} activeClassName="active"> */}
                        <i className="fas fa-list-alt"></i>
                        <span className="menu-text">{list.title}</span>
                        {/* </Link> */}
                    </li>
                );
            });
        else
            listTable = (
                <li>
                    <div className="loader">
                        <Loader />
                    </div>
                </li>
            );
        return (
            <div className="bgpic">
                <div className="side">
                    <span className="logo">
                        <IconButton size="small" color="default">
                            <ScatterPlot />
                        </IconButton>
                        Stories
                    </span>
                    <ul className="side-menu">{listTable}</ul>
                    <div className="otherMenu">
                        <AddList />
                    </div>
                </div>
                <div className="con">
                    <HeaderApp />

                    <List cards={[]} loading={this.state.loading} />
                    {/* <List listName={this.state.lists.filter(i=>i.listId===parseInt(this.props.router.params.id))} listType={this.props.params.id} lists={this.state.lists} loading={this.state.loading}/> */}
                </div>
            </div>
        );
    }
}
export default Board;
