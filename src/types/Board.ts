import { List } from "./List";

export interface Board {
    id: string;

    title: string;
    lists: List[];
}
