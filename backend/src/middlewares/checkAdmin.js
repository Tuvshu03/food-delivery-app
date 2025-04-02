import jwt from "jsonwebtoken";

export const checkAdminUsers = (req, res, next) => {
  const { role } = req.headers;
  if (role!=="ADMIN")
    return res.status(401).json({ message: "You can't access" });

  try {
    const user = jwt.verify(token, "uneheer nuuts");
    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Only Admin users can access" });
  }
};
