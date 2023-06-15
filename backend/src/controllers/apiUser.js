import pool from "../config/db";
import bcrypt from "bcrypt";

const findUserQuery = (email) =>
  `SELECT * FROM TaiKhoan WHERE email = '${email}'`;



const login = async (req, res) => {
  const { email, matKhau } = req.body;

  try {
    const [data] = await pool.query(findUserQuery(email));
    console.log("backend login data: ", data);

    if (data.length == 0) {
      return res.status(200).json({
        message: "Tài khoản không tồn tại!",
      });
    } else {
      const isPasswordCorrect = bcrypt.compare(matKhau, data[0].matKhau);
      if (!isPasswordCorrect) {
        return res.status(200).json({ message: "Mật khẩu không chính xác" });
      } else {
        
        if (data[0].maLoaiTaiKhoan === "KH") {
          const queryGetCustomer = `SELECT KhachHang.*
                                    FROM TaiKhoan
                                    JOIN KhachHang ON TaiKhoan.maTaiKhoan = KhachHang.maTaiKhoan
                                    where TaiKhoan.maTaiKhoan = '${data[0].maTaiKhoan}'`;
          const [customer] = await pool.query(queryGetCustomer)
          console.log('BE customer ',customer)

          return res.status(200).json({
            message: "Đăng nhập thành công",
            maLoaiTaiKhoan: data[0].maLoaiTaiKhoan,
            user: customer[0]
          })
        }
        return res.status(200).json({
          message: "Đăng nhập thành công",
          maLoaiTaiKhoan: data[0].maLoaiTaiKhoan,
          user: {}
        });
      }
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  login,
};
