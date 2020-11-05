const express = require("express");
const router = express.Router();



const {
  getOrderById,
  createOrder,
  deleteOrder,
  getAllOrders,
  getOrderStatus,
  updateStatus
} = require("../controllers/order");

//params


//Actual routes
//create
router.post(
  "/order/create",

  createOrder
);

// //delete route
router.delete(
    "/order/:orderId",
    deleteOrder
  );

module.exports = router;