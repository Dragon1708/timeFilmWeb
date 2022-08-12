import express from 'express';
import mongoose from 'mongoose';
import multer from 'multer';

import {loginValidator, registerValidator, articleCreateValidator } from "./validation/validations.js";

import {checkAuth, handleValidErrors} from "./utils/index.js"

import {UserController, ArticleController} from "./controllers/index.js"

mongoose.connect(
    'mongodb+srv://Winso:123098456@cluster0.hkpingz.mongodb.net/Tblog?retryWrites=true&w=majority'
).then(()=>{ console.log("Mongo Okey")})

const app = express();

const storage=multer.diskStorage({
    destination:(_,__,cb)=>{
        cb(null, 'uploads')
    },
    filename:(_,file,cb)=>{
        cb(null, file.originalname)
    },
})

const upload=multer({storage})

app.use(express.json())
app.use('/uploads', express.static('uploads'))

app.get('/', (req, res) => {
    res.send("Ti daun") 
})


app.get('/auth/me',checkAuth, UserController.getMe)
app.post('/auth/register', registerValidator,handleValidErrors, UserController.register)
app.post('/auth/login', loginValidator,handleValidErrors, UserController.login)

app.post('/upload',checkAuth, upload.single('image'), (req, res) => {
    res.json({
        url: `/upload/${req.params.originalname}`
    })
})

 app.get('/article', ArticleController.getAll)
 app.get('/article/:id', ArticleController.getOne)
 app.post('/article',checkAuth, articleCreateValidator, ArticleController.create)
 app.delete('/article/:id',checkAuth, ArticleController.remove)
 app.patch('/article/:id',checkAuth, ArticleController.update)

app.listen(4444, (err) => {
if (err) {
    return console.error(err)
}
console.log("Vso Zaebis")
})