require("../db/db")

import { Request, Response } from 'express';
import Order from '../models/OrderSchema';

export const addOrder = async (req: Request, res: Response): Promise<Response> => {
	const orderReq = req.body
	
    if(!orderReq.dni){
        return res.status(400).json({ msg: "required dni is missing" });
	}
	if(!orderReq.email){
        return res.status(400).json({ msg: "required email is missing" });
	}
    if(!orderReq.creditcard_number){
        return res.status(400).json({ msg: "required creditCard number is missing" });
	}
    if(!orderReq.expiration_date){
        return res.status(400).json({ msg: "required creditCard expiration date is missing" });
	}
    if(!orderReq.price){
        return res.status(400).json({ msg: "required price is missing" });
	}
    if(!orderReq.pod_direction){
        return res.status(400).json({ msg: "required POD direction is missing" });
	}
	
    const nOrder =  new Order({
		dni: orderReq.dni,
		name: orderReq.name,
		surname: orderReq.surname,
		email: orderReq.email,
        creditcard_number: orderReq.creditcard_number,
        expiration_date: orderReq.expiration_date,
        price: orderReq.price,
        pod_direction: orderReq.pod_direction
	})
	nOrder.save()
	
    return res.status(200).json({ nOrder });
};

export const findAllOrders = async (req: Request, res: Response): Promise<Response> => {
    const orders = await Order.find({});

    return res.json(orders);
};