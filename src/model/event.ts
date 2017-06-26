import { Place } from './place';

export class Event {
    id: number;
    name: string;
    description: string;
    image: string;
    images?: string[];
    link: string;
    startDate: Date;
    endDate: Date;
    place: Place;
}