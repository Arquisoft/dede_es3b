require("../db/db")
const { ObjectId } = require("mongodb");
//Prueba
import { Request, Response } from 'express';
import OrderProduct from '../models/OrderProductSchema';
import Product from '../models/ProductSchema';
import Order from '../models/OrderSchema';

export const findAllOrderProducts = async (req: Request, res: Response): Promise<Response> => {
    const orderProducts = await OrderProduct.find({});

    return res.json(orderProducts);
};

export const addOrderProduct = async (req: Request, res: Response): Promise<Response> => {

	const orderProductReq = req.body
	
    
	let productExist = await Product.findOne({ id:  orderProductReq.id_product.toString()});
    if (!productExist){
        return res.status(400).json({ msg: "The product not exist" });
    }

    if(!orderProductReq.quantity){
        return res.status(400).json({ msg: "required quantity is missing" });
	}
	if(!orderProductReq.id_product){
        return res.status(400).json({ msg: "required id_product is missing" });
	}
	if(!orderProductReq.id_order){
        return res.status(400).json({ msg: "required id_order is missing" });
	}
    if(!orderProductReq.pod_name){
        return res.status(400).json({ msg: "required pod_name is missing" });
	}
	
    const nOrderProduct =  new OrderProduct({
		quantity: orderProductReq.quantity,
		id_product: orderProductReq.id_product,
        id_order: orderProductReq.id_order,
        pod_name:orderProductReq.pod_name
	})
	
	nOrderProduct.save()
	
    return res.status(200).json({ nOrderProduct });
};

export const findByOrderProductId = async (req: Request, res: Response): Promise<Response> => {

    const order = await OrderProduct.find({

        id_order: req.params.id

    });

    if (order.length == 0) {
        return res.status(400).json({ msg: "Order product not found" });
    }
    return res.status(200).json(order);
};