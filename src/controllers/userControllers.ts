import { Request, Response } from "express";
import { searchUsersFieldServices, setUsersServices } from "../services/userServices";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export async function createUserController(req: Request, res: Response) {
    try {
        /**Encriptamos la contraseña */
        req.body.password = await bcrypt.hash(req.body.password, 10);

        /** Validamos si ya existe un usuario igual */
        const validUser = await searchUsersFieldServices({ username: req.body.username });
        if (validUser) {
            return res.status(400).json({
                status: 400,
                message: `A user with the name already exists ${req.body.username}`,
                data: req.body
            });
        }

        /** Creamos el nuevo usuario */
        const result = await setUsersServices(req.body);
        return res.status(200).json({ status: 200, message: "success", data: result });
    } catch (error: any) {
        return res.status(500).json({ status: 500, message: error.message });
    }
}

export async function loginController(req: Request, res: Response) {
    try {
        /** Validamos si el usario existe en la bd */
        const validUser = await searchUsersFieldServices({ username: req.body.username });

        if (!validUser) {
            return res.status(400).json({
                status: 400,
                message: `There is no user in the database`,
                data: req.body
            });
        }

        /** Validamos password */
        const validPassword = await searchUsersFieldServices({ username: req.body.username, password: req.body.password });

        if (!validPassword) {
            return res.status(400).json({
                status: 400,
                message: `Incorrect password`,
                data: req.body
            });
        }

        /** Generamos toke */
        const token = jwt.sign({
            username: req.body.username
        }, process.env.SECRET_KEY || 'Floppy123', { expiresIn: '3h'});

        return res.status(200).json({ status: 200, message: "success", data: { token } });
    } catch (error: any) {
        return res.status(500).json({ status: 500, message: error.message });
    }
}