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

export const card3: Card = {
    id: "3",
    title: "Hook Functions",
    description: "Study the Hook Functions in React",
    color: "green",
    createdAt: "2019-10-31T10:10:10.000Z",
    dueDate: "2019-11-01T10:10:10.000Z",
    assignee: {
        firstName: "Yasmin",
        lastName: "Afifi",
    },
};

export const card4: Card = {
    id: "4",
    title: "Update the UI",
    description: "Updating the source code",
    color: "green",
    createdAt: "2019-10-31T10:10:10.000Z",
    dueDate: "2019-11-01T10:10:10.000Z",
    assignee: {
        firstName: "Yasmin",
        lastName: "Afifi",
    },
};

export const list1: List = {
    id: "list1",
    title: "Backlog",
    icon: "emoji",
    cards: [card1, card2],
};

export const list2: List = {
    id: "list2",
    title: "TODO",
    icon: "viewList",
    cards: [card1, card2],
};

export const list3: List = {
    id: "list3",
    title: "In Progress",
    icon: "loop",
    cards: [card3],
};
export const list4: List = {
    id: "list4",
    title: "Testing",
    icon: "bug",
    cards: [card4],
};

export const list5: List = {
    id: "list5",
    title: "Done",
    icon: "done",
    cards: [],
};

export const board1: Board = {
    id: "board1",
    title: "My board",
    lists: [list1, list2, list3, list4, list5],
};
