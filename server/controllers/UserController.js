import jwb from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import {validationResult} from 'express-validator';

import UserModel from "../models/User.js";

export const register=async (req, res) => {
    try {
     
       const salt=await bcrypt.genSalt(10)
       const passwordHash=await bcrypt.hash(req.body.password,salt )
     
     const doc=new UserModel({
         login: req.body.login,
         email: req.body.email,
         passwordHash,
         avatarUrl: req.body.avatarUrl,
     })
     
     const user= await doc.save()
     
   const token = jwb.sign({
       _id: user._id,
   }, 'SecretUser')
   
       res.json({...user._doc,
           token
       })
    } catch (error) {
       console.error( error)
       res.status(500).json({
           message: "Register Error :((",
          
       }) 
    }
   }

   export const login=async (req, res) => {
    try {
        const user = await UserModel.findOne({email: req.body.email})
    
        if (!user) {
    return res.status(404).json({
        message: "User not Found X)"
    })
    }
    
    const isValidPassword = await bcrypt.compare(req.body.password, user._doc.passwordHash)
       if (!isValidPassword) {
        return res.status(404).json({
            message: "Password NoValid 0_0" //Zamenit vezde na "Nevernii login or Parol"
        })
       }
    
       const token = jwb.sign({
        _id: user._id,
    }, 'SecretUser')
    
    const {passwordHash, ...userData}=user._doc // delete password hash
    
    res.json({...userData,
        token
    })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            message: "Ne udalos Login ^(("
        })   
    }
    }

export const getMe=async (req, res) => {
        try {
            const user=await UserModel.findById(req.userID)
            if (!user) {

                return res.status(404).json({
                    message: "User not found"
                })
            }
    
     const {passwordHash, ...userData}=user._doc // delete password hash
    return res.json(userData)
    
        } catch (error) {
            console.error( "Bleat!", error)
            res.status(500).json({
                message: "Not Access:((",
               
            })
        }
    }
   