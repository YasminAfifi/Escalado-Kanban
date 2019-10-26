import { User } from "./User";
import { ISODate } from "./ISODate";

export interface Card {
    id: string;

    title: string;
    description: string;
    
    createdAt: ISODate;
    dueDate: ISODate; 

    color: string;

    assignee: User;
}
