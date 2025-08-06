export function authMiddleware(req,res,next){
    const token=219;
    if(token==2129){
        next(); 
    }else{
        res.status(401).json({message:"Unauthorized access"});
    }
}