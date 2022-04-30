require("../db/db")
//Prueba
import { Request, Response } from 'express';
import User from '../models/UserSchema';

const crypto = require("crypto");

export const findAllUsers = async (req: Request, res: Response): Promise<Response> => {
    const users = await User.find({});

    return res.json(users);
};

export const findByEmail = async (req: Request, res: Response): Promise<Response> => {

    //const userReq = req.body

    /*if(!req.params.dni){
        return res.status(400).json({ msg: "Please, you may introduce any valid DNI" });
    }*/
    const user = await User.find({

        email: req.params.email

    });

    if (user.length == 0) {
        return res.status(400).json({ msg: "User not found, you may introduce any valid email" });
	}
    return res.status(200).json(user);
};

export const addUser = async (req: Request, res: Response): Promise<Response> => {


    const userReq = req.body

    if (!userReq.email) {
        return res.status(400).json({ msg: "required email is missing" });
    }
    let userExist = await User.findOne({ email: userReq.email.toString() });
    if (userExist) {
        return res.status(400).json({ msg: "The user already exist" });
    }
    if (!userReq.password) {
        return res.status(400).json({ msg: "required password is missing" });
    }

    const pass = crypto.createHmac('sha256', userReq.password).digest('hex');
    const nUser = new User({
        email: userReq.email,
        password: pass
    })

    nUser.save()

    return res.status(200).json({ nUser });
};



