import {Document} from 'mongoose';

export interface InterfaceProduct extends Document {
    _id:string;
    description: string;
    name: string;
    price: number;
    category: string;
}
