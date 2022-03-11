require("../db/db")

import { Request, Response } from 'express';
import Product from '../models/ProductSchema';

export const findAll = async (req: Request, res: Response): Promise<Response> => {
    const products = await Product.find({});

    return res.json(products);
};