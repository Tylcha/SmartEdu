import User from "../models/User.js";

const authMiddleware = async (req, res, next) =>{
    if (!req.session.userID) {
        return res.redirect('/login');
      }
  
     
      const user = await User.findById(req.session.userID);
  
      
      if (!user) {
        return res.redirect('/login');
      }
  
      
      next();
}

export default authMiddleware;