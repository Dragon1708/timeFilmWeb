import {body} from 'express-validator';

export const loginValidator =[
    body('email').isEmail(),
    body('password', "Error: inValid Pass! Min lenght 8chars").isLength({min: 8}),
]

export const registerValidator =[
    body('email').isEmail(),
    body('password', "Error: inValid Pass! Min lenght 8chars").isLength({min: 8}),
    body('login').isLength({min: 3}),
    body('avatarUrl').optional().isURL(),
]

export const articleCreateValidator =[
    body('title', 'Set Title!').isLength({min: 3}).isString(),
    body('content', "add Text!").isLength({min: 10}).isString(),
    body('tags').optional().isString(),
    body('imageUrl', 'No found Url :((').optional().isURL(),
]