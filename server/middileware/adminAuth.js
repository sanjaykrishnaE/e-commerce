const jwt = require("jsonwebtoken");

const adminAuth = async (req,res,next) => {
    try {

        const { token } = req.headers;
        if (!token) {
            return res.json({success:false, message:"Not authorized signin again"});
        }
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
        if (tokenDecode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            return res.json({success:false, message:"Not authorized signin again"});
        }
        next();
        
    } catch (error) {
        console.log(error);
        res.json({success: false, message:error.message});
    }

}

module.exports = adminAuth;