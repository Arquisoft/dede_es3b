require("../db/db")
//Prueba
import { Request, Response } from 'express';
import OrderProduct from '../models/OrderProductSchema';
import Product from '../models/OrderProductSchema';

export const findAllOrderProducts = async (req: Request, res: Response): Promise<Response> => {
    const orderProducts = await OrderProduct.find({});

    return res.json(orderProducts);
};

export const addOrderProduct = async (req: Request, res: Response): Promise<Response> => {

	const orderProductReq = req.body
	
    if(!orderProductReq.quantity){
        return res.status(400).json({ msg: "required quantity is missing" });
	}
	if(!orderProductReq.id_product){
        return res.status(400).json({ msg: "required id_order is missing" });
	}
	if(!orderProductReq.id_order){
        return res.status(400).json({ msg: "required id_order is missing" });
	}
	
    const nOrderProduct =  new OrderProduct({
		quantity: orderProductReq.quantity,
		id_product: orderProductReq.id_product,
        id_order: orderProductReq.id_order
	})
	
	nOrderProduct.save()
	
    return res.status(200).json({ nOrderProduct });
};