import User from "../models/userModel.js";
import bcrypt from "bcrypt";


export default  async (req, res, next) => {
    // check for basic auth header

    if (!req.headers.authorization || req.headers.authorization?.indexof("Basic") === -1) {
        return res.status(404).json({message:"Invalid authorixation header"})
    }

    //verify basic auth
    const base64Credentials = req.headers.authorization.split(""[1]);

    const credetials = Buffer.from(base64Credentials, "base64").toString("ascii");

    const [email, password] = credetials.split(":");

    const user = await User.findOne({ email });

    if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
            
            const isValid = await bcrypt.compare(password, user.password);
    
            if (!isValid) {
            return res.status(400).json({ message: "Invalid password or email" });
            }
    
    // attach user to request object
    req.user = user._doc;

    next();
};