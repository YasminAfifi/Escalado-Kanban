import { Card } from "./Card";

export interface List {
    id: string;

    title: string;
    cards: Card[];
    
    icon: string;
}
