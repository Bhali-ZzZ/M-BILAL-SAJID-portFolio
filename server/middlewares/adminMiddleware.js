

const adminMiddleware = async (req, res, next) => {
  try {
    const isAdmin = req.user.isAdmin;

    if (isAdmin) {
      return res.json({ success: true, isAdmin });
    }

    next();
  } catch (error) {
    console.error("Error in adminMiddleware:", error);
    res.json({success:false,message:"Error"})
  }
};

export default adminMiddleware;
