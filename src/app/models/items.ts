import { User } from "./users";

export class Item{
    id: number = 0;
    title: string = '';
    author: string = '';
    year: number = 0;
    image: string = '';
    users: User = new User();
}