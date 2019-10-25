import React, { Component } from 'react'
//import moment from 'moment'
//import axios from 'axios'
//import ModalProject from './modal';
import ProjLoader from './loader';
import { Card, CardContent } from '@material-ui/core';

//  jQuery
class TaskCard extends Component {
    //create a componentWillReceiveProps() method for drag and drop
    // api = id => {
    //     axios.delete('/Cards/delete/' + id)
    //         .then(function (response) {
    //             if (response.status === "1")
    //                 alert("ok")
    //             console.log(response);
    //         })
    //         .then(() => {

    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });

    // }
    render() {
        const { cards, loading, filter } = this.props;
        let content;
        if (loading) {
            content = <div className="content_loader">
                <ProjLoader />
            </div>;
        }
        // else {
        //     content =
        //         cards.filter(i => i.status === Number(filter))
        //             .map((i, index) => {
        //                 return (
        //                     <li id={i._id} className="mcell-card" key={index}>
        //                         <span className="card-name">
        //                             <span>{i.title}</span>
        //                             <i id="delete" className="fas fa-times" onClick={() => this.api(i._id)}></i>
        //                         </span>
        //                         <span className="card-details">{i.content}</span>
        //                         <div>
        //                             {/* <span className="card-due">{moment(i.dueDate).format("DD.MM.YYYY")}</span> */}
        //                             <span className="card-contributors">
        //                                 <img alt={i.contributors[0].name + ' ' + i.contributors[0].lastName} title={i.contributors[0].name + ' ' + i.contributors[0].lastName} src={'../../public/assets/img' + i.contributors[0].profilePhoto} />
        //                             </span>
        //                         </div>
        //                         <div className={i.color} />
        // <ModalProject propContent={i} classType="btnBoard" />
        //                     </li>
        //                 )
        //             })
        // }
        return (
            // <div className="process">{content}</div>
            <Card>
                <CardContent className="process">
                    {content}
                </CardContent>
            </Card>
        )
    }

}
export default TaskCard;