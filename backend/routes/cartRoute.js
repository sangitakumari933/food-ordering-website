import express from "express";
import { addToCart, removeFromCart, getCart} from "../controllers/cartController.js";
import { isAunthenticated } from "../middleware/isAuthenticated.js";

const cartRouter = express.Router();

cartRouter.post("/add",isAunthenticated ,addToCart);
cartRouter.post("/remove",isAunthenticated ,removeFromCart);
cartRouter.post("/get",isAunthenticated , getCart);

export default cartRouter;