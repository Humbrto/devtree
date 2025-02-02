import { Request, Response } from "express";
import { validationResult } from "express-validator";
import slug from 'slug'
import User from "../models/Users";
import { checkPassword, hashPassword } from "../utils/auth";

export const createAccount = async(req : Request, res : Response) => {

    const {email, password} = req.body
    const userExists = await User.findOne({email})
    
    if (userExists) {
        const error = new Error ('El correo ya se encuentra registrado!')
        //return res .status(409).json({error : error.message})
        res.status(409).json({error : error.message})
        return
    } 
    
    const handle = slug(req.body.handle, '')
    console.log(`Slug handle creado : ${handle}`)
    const handleExists = await User.findOne({handle})
    
    if (handleExists) {
        const error = new Error ('El usuario ya se encuentra registrado!')
        res.status(409).json({error : error.message})
        return
    } 

    //await User.create(req.body)
    const user = new User(req.body)

    const hash = await hashPassword(password)
    console.log(`Hash creado exitosamente: ${hash}`)
    user.password = hash
    user.handle = handle

    await user.save()

    console.log('Datos enviados desde el cliente');
    console.log(req.body);

    res.status(201).send('Registro creado correctamente')
}

export const login = async (req : Request, res : Response) => {
    
    // Manejar errores
    let errors = validationResult(req)
    console.log(errors)
    if (!errors.isEmpty()) {
        res.status(400).json({errors: errors.array()})
        return
    }

    const {email, password} = req.body

    // Revisar si el usuario esta registrado
    const user = await User.findOne({email})
    
    if (!user) {
        const error = new Error ('El usuario no existe.')
        res.status(404).json({error : error.message})
        return
    }

    // Comprobar el password
    const isPasswordCorrect = await checkPassword(password, user.password)
    if (!isPasswordCorrect) {
        const error = new Error ('Password incorrecto.')
        res.status(401).json({error : error.message})
        return
    }
    res.send('Autenticado correctamente.')
}