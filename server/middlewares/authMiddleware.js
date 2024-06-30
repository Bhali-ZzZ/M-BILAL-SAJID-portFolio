import jwt from 'jsonwebtoken';

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ success: false, message: "Unauthorized user - token not provided" });
  }

  try {
    const jwtToken = token.replace("Bearer", "").trim();
    const decoded = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
    
    // Remove the password field from the decoded user information
    delete decoded.password;
    
    // Attach the decoded user information to the request object
    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({ success: false, message: "Unauthorized user - invalid token" });
  }
};

export default authMiddleware;
