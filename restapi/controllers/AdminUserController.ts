require("../db/db")

import path, { normalize } from 'path';
var dotenvPath = path.resolve('../.env');
require("dotenv").config({path: dotenvPath});

import { Console } from 'console';
import { Request, Response } from 'express';
import AdminUser from '../models/AdminUserSchema';

const pass_admin = process.env.PASSWORDADMIN;


export const findAdmin = async (req: Request, res: Response): Promise<Response> => {
	
    const admin = await AdminUser.findOne({	
		username: req.params.username
	});

    if (admin.password != pass_admin){
        return res.status(400).json({ msg: "Is not the user admin" });
    }
	
    return res.status(200).json({ admin });
};



