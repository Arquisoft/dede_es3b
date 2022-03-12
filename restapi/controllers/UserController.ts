require("../db/db")

import { Request, Response } from 'express';
import User from '../models/UserSchema';

export const findAllUsers = async (req: Request, res: Response): Promise<Response> => {
    const users = await User.find({});

    return res.json(users);
};

export const findByDni = async (req: Request, res: Response): Promise<Response> => {
	
	//const userReq = req.body
	
    /*if(!req.params.dni){
        return res.status(400).json({ msg: "Please, you may introduce any valid DNI" });
	}*/
    const user = await User.find({
		
		dni: req.params.dni 
		
	});
	
    if(user.length==0){
        return res.status(400).json({ msg: "User not found, you may introduce any valid DNI" });
	}
    return res.status(200).json({ user });
};

export const addUser = async (req: Request, res: Response): Promise<Response> => {
	
    console.log("POST");
    console.log(req.body);

	const userReq = req.body
	
    if(!userReq.dni){
        return res.status(400).json({ msg: "required dni is missing" });
	}
    let userExist = await User.findOne({ dni: userReq.dni });
    if (userExist){
        return res.status(400).json({ msg: "The user already exist" });
    }
	if(!userReq.name){
        return res.status(400).json({ msg: "required name is missing" });
	}
	if(!userReq.surname){
        return res.status(400).json({ msg: "required surname is missing" });
	}
	if(!userReq.email){
        return res.status(400).json({ msg: "required email is missing" });
	}
	
    const nUser =  new User({
		dni: userReq.dni,
		name: userReq.name,
		surname: userReq.surname,
		email: userReq.email
	})
	
	nUser.save()
	
    return res.status(200).json({ nUser });
};



