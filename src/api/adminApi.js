import axiosClient from ".";

const token = localStorage.getItem("token");

const movieDashboardApi = {
  getMovies: ({ tenPhim, soTrang }) => {
    const url = "/QuanLyPhim/LayDanhSachPhimPhanTrang";
    return axiosClient.get(url, {
      params: { tenPhim, soTrang },
    });
  },

  getMovieById: (movieId) => {
    const url = "/QuanLyPhim/LayThongTinPhim";
    return axiosClient.get(url, {
      params: {
        maPhim: movieId,
      },
    });
  },

  addMovie: (formData) => {
    const url = "/QuanLyPhim/ThemPhimUploadHinh";
    return axiosClient.post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },

  editMovie: (formData) => {
    const url = "/QuanLyPhim/CapNhatPhimUpload";
    return axiosClient.post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer " + token,
      },
    });
  },

  deleteMovie: (movieId) => {
    const url = "/QuanLyPhim/XoaPhim";
    return axiosClient.delete(url, {
      params: {
        maPhim: movieId,
      },
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  },
};

const userDashboardApi = {
  getUser: ({ tuKhoa }) => {
    const url = "/QuanLyNguoiDung/LayDanhSachNguoiDung";
    return axiosClient.get(url, {
      params: {
        tuKhoa
      },
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  },

  getUserById: (taiKhoan) => {
    const url = `/QuanLyNguoiDung/LayThongTinNguoiDung?taiKhoan=${taiKhoan}`;
    // const url = "/QuanLyNguoiDung/ThongTinTaiKhoan";
    return axiosClient.post(url, {}, {
      headers: {
        Authorization: 'Bearer ' + token,
        "Content-Type": "application/json"
      }
    })
  },

  addUser: (taiKhoan) => {
    const url = "/QuanLyNguoiDung/ThemNguoiDung";
    return axiosClient.post(url, taiKhoan, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer " + token,
      },
    });
  },

  editUser: (taiKhoan) => {
    const url = "/QuanLyNguoiDung/CapNhatThongTinNguoiDung";
    return axiosClient.put(url, {nd: taiKhoan} , {
      headers: {
        "Content-Type": "application/json-patch+json",
        Authorization: "Bearer " + token,
      },
    });
  },

  deleteUser: ({ taiKhoan }) => {
    console.log(taiKhoan)
    const url = "/QuanLyNguoiDung/XoaNguoiDung";
    return axiosClient.delete(url, {
      params: {
        TaiKhoan: taiKhoan,
      },
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  },
};

export { movieDashboardApi, userDashboardApi };
