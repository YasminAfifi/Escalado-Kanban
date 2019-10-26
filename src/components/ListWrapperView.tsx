import React, { FC } from "react";
import { List } from "../types/List";
import ListView from "./ListView";

interface ListWrapperViewProps {
    lists: List[];
}

const ListWrapperView: FC<ListWrapperViewProps> = props => {
    return (
        <div>
            {props.lists.map(list => (
                <ListView key={list.id} list={list} />
            ))}
        </div>
    );
};
export default ListWrapperView;
