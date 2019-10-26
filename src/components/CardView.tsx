import { Card as MuiCard, CardContent } from "@material-ui/core";
import React, { FC } from "react";
import { Card } from "../types/Card";
import { formatDisplayName } from "../utils/helper";

interface CardViewProps {
    card: Card;
}

const CardView: FC<CardViewProps> = ({ card }) => {
    return (
        <MuiCard>
            <CardContent className="process">
                <span className="card-name">
                    <span>{card.title}</span>
                </span>
                <span className="card-details">{card.description}</span>
                <div>
                    {/* <span className="card-due">{moment(card.dueDate).format("DD.MM.YYYY")}</span> */}
                    <span className="card-contributors">
                        <img
                            alt={formatDisplayName(card.assignee)}
                            title={formatDisplayName(card.assignee)}
                            src={card.assignee.profileImage}
                        />
                    </span>
                </div>
                <div className={card.color} />
                {/* <ModalProject propContent={i} classType="btnBoard" /> */}
            </CardContent>
        </MuiCard>
    );
};
export default CardView;
