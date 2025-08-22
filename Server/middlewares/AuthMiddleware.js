const password = process.env.PASSWORD;

function AuthMiddleware(req,res,next){
    const headers = req.headers;
    const token = headers.authorization;
    

    if(token === password){
        next();
    }else{
        res.status(403).json({message : 'please send authorization '});
    }
} 


module.exports = AuthMiddleware;