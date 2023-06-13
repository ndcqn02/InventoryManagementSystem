import pool from "../config/db";

let getAllPurchaseOrder = async (req, res) => {
  const [rows] = await pool.query(
    `SELECT pnh.*, ncc.hoVaTen as hoVaTenNCC, nv.hoVaTen as hoVaTenNV, nv.hinhAnh as hinhAnhNV
    FROM PhieuNhapHang pnh
    JOIN NhaCungCap ncc ON pnh.maNhaCungCap = ncc.maNhaCungCap
    JOIN NhanVien nv ON pnh.maNhanVien = nv.maNhanVien`
  );
  return res.status(200).json({
    message: "ok",
    data: rows,
  });
};

let getPurchaseOrderDetail = async (req, res) => {
  try {
    const maPhieuNhap = req.params.maPhieuNhap;
    let [purchaseOrder] = await pool.execute(
      `SELECT pnh.*, ncc.hoVaTen as hoVaTenNCC, nv.hoVaTen as hoVaTenNV
      FROM PhieuNhapHang pnh
      JOIN NhaCungCap ncc ON pnh.maNhaCungCap = ncc.maNhaCungCap
      JOIN NhanVien nv ON pnh.maNhanVien = nv.maNhanVien
      WHERE maPhieuNhap = ? `,
      [maPhieuNhap]
    );

    return res.status(200).json({
      message: "ok",
      data: purchaseOrder,
    });
  } catch (error) {
    console.error("Lỗi truy vấn cơ sở dữ liệu:", error);
    return res.status(500).json({
      message: "Đã xảy ra lỗi trong quá trình truy vấn cơ sở dữ liệu",
      error: error.message,
    });
  }
};

let getProductPurchaseOrderDetail = async (req, res) => {
  try {
    const maPhieuNhap = req.params.maPhieuNhap;

    let [productPurchaseOrderDetail] = await pool.execute(
      `SELECT chitietphieunhap.*, maDanhMuc, tenSanPham, moTa, hinhAnh
       FROM chitietphieunhap
       JOIN SanPham ON chitietphieunhap.maSanPham = SanPham.maSanPham
       where maPhieuNhap = ?`,
      [maPhieuNhap]
    );

    return res.status(200).json({
      message: "OK",
      data: productPurchaseOrderDetail,
    });
  } catch (error) {
    return res.status(200).json({
      message: "Error in process query",
      error: error,
    });
  }
};

let approveTheImportRequest = async (req, res) => {
  const { maPhieuNhap } = req.body;
  try {
    await pool.execute(
      "update PhieuNhapHang set TrangThai='Đã duyệt' where maPhieuNhap=?",
      [maPhieuNhap]
    );
    return res.status(200).json({
      message: "ok",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Err",
      error: error,
    });
  }
};

let rejectTheImportRequest = async (req, res) => {
  const { maPhieuNhap } = req.body;
  try {
    await pool.execute(
      "update PhieuNhapHang set TrangThai='Đã từ chối' where maPhieuNhap=?",
      [maPhieuNhap]
    );
    return res.status(200).json({
      message: "oke",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Lỗi trong quá trình truy vấn",
      error: error,
    });
  }
};

module.exports = {
  getAllPurchaseOrder,
  getPurchaseOrderDetail,
  getProductPurchaseOrderDetail,
  approveTheImportRequest,
  rejectTheImportRequest,
};
