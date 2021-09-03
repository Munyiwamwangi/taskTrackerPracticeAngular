import { Time } from "@angular/common";

export interface Task{
    id?: number;
    text: string;
    day: string;
    reminder: boolean;
}