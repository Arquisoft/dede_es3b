require("../db/db")

import { Request, Response } from 'express';
import AdminUser from '../models/AdminUserSchema';


export const findAdmin = async (req: Request, res: Response): Promise<Response> => {
	
    const admin = await AdminUser.find({
		
		username: req.params.username
		
	});
	
    return res.status(200).json({ admin });
};

