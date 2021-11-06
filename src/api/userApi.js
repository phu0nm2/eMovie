import axiosClient from ".";

export const userApi = {
  signup: ({ taiKhoan, matKhau, email, soDT, hoTen }) => {
    const url = "/QuanLyNguoiDung/DangKy";
    return axiosClient.post(url, {
      taiKhoan,
      matKhau,
      email,
      soDT,
      maNhom: "GP07",
      hoTen,
    });
  },

  signin: ({ taiKhoan, matKhau }) => {
    const url = "/QuanLyNguoiDung/DangNhap";
    return axiosClient.post(url, {
      taiKhoan,
      matKhau,
      maNhom: "GP07",
    });
  },

  refreshToken: (token) => {
    const url = "/QuanLyNguoiDung/ThongTinTaiKhoan";
    return axiosClient.post(
      url,
      {},
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
  },

  editUser: ({ taiKhoan, matKhau, email, soDT, hoTen, token }) => {
    const url = "/QuanLyNguoiDung/CapNhatThongTinNguoiDung";
    return axiosClient.put(
      url,
      {
        nd: {
          taiKhoan,
          matKhau,
          email,
          soDT,
          hoTen,
          maNhom: "GP07",
          maLoaiNguoiDung: "KhachHang",
        },
      },
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
  },
};
