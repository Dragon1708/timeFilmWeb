import jwb from 'jsonwebtoken';

export default (req, res, next) =>{
const token = (req.headers.authorization || '').replace(/Bearer\s?/,'')

if (token) {
    try {
        const decoded=jwb.verify(token, 'SecretUser')
        req.userID=decoded._id
        console.log(req.userID);
        next()
    } catch (error) {
        return res.status(403).json({
            message: 'Net Dostupa'
        })
    }
} else {
   return res.status(403).json({
        message: 'Net Dostupa'
    })
}
}