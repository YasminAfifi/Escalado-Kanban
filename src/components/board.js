import React, { Component } from 'react'
//import axios from 'axios'
// import { Link } from 'react-router'
import List from './list';
import AddList from './forms/addList';
import ProjLoader from './loader';
import HeaderApp from './common/header';



class Board extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            open: false,
            show: true,
            cards: [],
            lists: [],
            err: '',
            err2: '',
            loading: true,
            loadingList: true
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
                )
            })
        else
            listTable = <li>
                <div className="loader">
                    <ProjLoader />
                </div>
            </li>
        return (
            <div className="bgpic" >
                <div className="side">
                    <span className="logo">Stories</span>
                    <ul className="side-menu">
                        {listTable}
                    </ul>
                    <div className="otherMenu">
                        <AddList />
                    </div>
                </div>
                <div className="con" >
                    <HeaderApp />

                    <List loading={this.state.loading} />
                    {/* <List listName={this.state.lists.filter(i=>i.listId===parseInt(this.props.router.params.id))} listType={this.props.params.id} lists={this.state.lists} loading={this.state.loading}/> */}
                </div>
            </div>
        )
    }


}
export default Board;