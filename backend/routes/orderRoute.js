import express from "express"
import { isAunthenticated } from "../middleware/isAuthenticated.js";
import { placeOrder, userOrders, verifyOrder, listOrders, updateStatus } from "../controllers/orderController.js";

const orderRouter = express.Router();

orderRouter.post("/place", isAunthenticated, placeOrder);
orderRouter.post("/verify", verifyOrder);
orderRouter.post("/userorders", isAunthenticated, userOrders);
orderRouter.get("/list", listOrders);
orderRouter.post("/status", updateStatus);
export default orderRouter;
