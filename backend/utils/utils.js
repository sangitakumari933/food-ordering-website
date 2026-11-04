import jwt from "jsonwebtoken"

//function to generate a token for a user 
export const generateToken =  (userId)=>{
  console.log(process.env.JWT_SECRET)
  const token = jwt.sign({userId}, process.env.JWT_SECRET, { expiresIn: "7d" });
  return token;
}
