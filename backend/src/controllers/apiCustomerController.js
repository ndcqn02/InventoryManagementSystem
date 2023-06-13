import pool from "../config/db";
import { v4 as uuidv4 } from "uuid";

let getAllProduct = async (req, res) => {
  const [rows] = await pool.execute("select * from SanPham");
  return res.status(200).json({
    message: "ok",
    data: rows,
  });
};

let getProductDetail = async (req, res) => {
  try {
    const maSanPham = req.params.maSanPham;
    const [rows] = await pool.query(
      `SELECT SanPham.*, tenDanhMuc
      FROM sanPham
      INNER JOIN DanhMucSanPham ON sanPham.maDanhMuc = DanhMucSanPham.maDanhMuc
      WHERE maSanPham = ?`,
      [maSanPham]
    );

    const product = rows[0];

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    return res.status(200).json({
      message: "ok",
      data: product,
    });
  } catch (error) {
    return res.status(500).json({
      message: "An error occurred while querying the database",
      error: error.message,
    });
  }
};

let createOrder = async (req, res) => {
  const { maKhachHang, ngayTaoDonHang, diaChiGiaoHang, trangThaiDonHang } =
    req.body;
  const itemsCart = req.body.itemsCart;
  console.log('backend items cart', itemsCart)

  const maDonDatHang = "DH" + uuidv4().substring(0, 18);
  const maChiTietDonHang = () => {
    return "CTDH" + uuidv4().substring(0, 16);
  };

  console.log("maDonDatHang: " + maDonDatHang);

  const query = `insert into DonDatHang (maDonDatHang, maKhachHang, ngayTaoDonHang, diaChiGiaoHang, trangThaiDonHang) values (?, ?, ?, ?, ?)`;
  let values = [
    maDonDatHang,
    maKhachHang,
    ngayTaoDonHang,
    diaChiGiaoHang,
    trangThaiDonHang,
  ];

  let queryItems = `INSERT INTO ChiTietDonHang (maChiTietDonHang, maDonDatHang, maSanPham, soLuong, donGia) VALUES ?`;
  const itemCartValues = await itemsCart.map((item) => [
    maChiTietDonHang(),
    maDonDatHang,
    item.maSanPham,
    item.soLuongDat,
    item.giaBan,
  ]);

  console.log("itemCartValues");
  console.log(itemCartValues); // vi random nên chỉ xem id cua maDonDatHang

  try {
    //DonDatHang
    await pool.query(query, values);
    try {
      //ChiTietDonHang
      await pool.query(queryItems, [itemCartValues]);
    } catch (error) {
      return res.status(500).json({
        message: "fail insert details",
        error: error,
      });
    }

    return res
      .status(200)
      .json({ message: "oke", data: { maDonDatHang: maDonDatHang } });

  } catch (error) {
    return res.status(500).json({
      message: "fail",
      error: error,
    });
  }
};

let testHehe = (req, res) => {
  return res.status(200).json({
    message: "hehe cuong ne",
  });
};

module.exports = {
  getAllProduct,
  getProductDetail,
  createOrder,
  testHehe,
};
