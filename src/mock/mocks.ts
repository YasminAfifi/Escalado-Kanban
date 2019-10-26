import { Card } from "../types/Card";
import { List } from "../types/List";
import { Board } from "../types/Board";

export const card1: Card = {
    id: "1",
    title: "Sleep well",
    description: "You need to sleep well",
    color: "red",
    createdAt: "2019-10-26T10:10:10.000Z",
    dueDate: "2019-10-27T10:10:10.000Z",
    assignee: {
        firstName: "Bichoy",
        lastName: "Messiha",
    },
};

export const card2: Card = {
    id: "2",
    title: "Sleep well",
    description: "You need to sleep well",
    color: "green",
    createdAt: "2019-10-26T10:10:10.000Z",
    dueDate: "2019-10-27T10:10:10.000Z",
    assignee: {
        firstName: "Yasmin",
        lastName: "Afifi",
    },
};

export const list1: List = {
    id: "list1",
    title: "TODO",
    icon: "todo",
    cards: [card1, card2],
};

export const list2: List = {
    id: "list2",
    title: "Done",
    icon: "done",
    cards: [],
};

export const board1: Board = {
    id: "board1",
    title: "My board",
    lists: [list1, list2],
};
