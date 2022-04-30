require("../db/db")
//Prueba
import { Request, Response } from 'express';
import Product from '../models/ProductSchema';

export const findAllProducts = async (req: Request, res: Response): Promise<Response> => {
    const products = await Product.find({});
   // res.setHeader('Content-Type','application/json')
    res.status(200);
    return res.json(products);
};


export const addProduct = async (req: Request, res: Response): Promise<Response> => {
    const p = req.body

    if (!p.description) {
        return res.status(400).json({ msg: "required description is missing" });
    }
    if (!p.name) {
        return res.status(400).json({ msg: "required name is missing" });
    }
    if (!p.price) {
        return res.status(400).json({ msg: "required price is missing" });
    }
    if (!p.category) {
        return res.status(400).json({ msg: "required category is missing" });
    }



    const nProduct = new Product({
        id: p.id,
        description: p.description,
        name: p.name,
        price: p.price,
        category: p.category
    })
    nProduct.id = nProduct._id;


    nProduct.save();

    return res.status(200).json({ nProduct });
};

export const findByCategory = async (req: Request, res: Response): Promise<Response> => {
    const p = await Product.find({

        category: req.params.category

    });

    if (p.length == 0) {
        return res.status(400).json({ msg: "Products not found, you may introduce any valid category" });
	}
    return res.status(200).json(p);
};