import express from "express";
import apiCustomerController from "../controllers/apiCustomerController";
import apiManagerController from "../controllers/apiManagerController";

let router = express.Router();

const initAPIRoute = (app) => {
  router.get("/test", apiCustomerController.testHehe);
  
  //dat hang
  router.get("/all-product", apiCustomerController.getAllProduct);
  router.get("/product-detail/:maSanPham", apiCustomerController.getProductDetail);
  router.post("/create-order", apiCustomerController.createOrder);
  
  
  //duyet yeu cau nhap hang
  router.get("/all-import-order", apiManagerController.getAllPurchaseOrder);
  router.get("/import-order-detail/:maPhieuNhap", apiManagerController.getPurchaseOrderDetail);
  router.get("/product-io-detail/:maPhieuNhap", apiManagerController.getProductPurchaseOrderDetail);
  
  router.put("/approve-the-import-request", apiManagerController.approveTheImportRequest);
  router.put("/reject-the-import-request", apiManagerController.rejectTheImportRequest);
  
  return app.use("/api/v1/", router);
};

export default initAPIRoute;
