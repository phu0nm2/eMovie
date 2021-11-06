import { Col, Row } from "antd";
import { useForm } from "antd/lib/form/Form";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import avatar from "../../assets/img/avatar.svg";
import Layout from "../../HOCs/Layout";
import { editUserInfo, refreshToken } from "../../store/actions/user";
import HistoryOrders from "./HistoryOrders";
import "./style.scss";
import UserInfo from "./UserInfo/UserInfo";

const UserProfile = () => {
  const dispatch = useDispatch();
  const { currentUser, loading } = useSelector((state) => state.user);
  const [form] = useForm();

  React.useEffect(() => {
    if (!currentUser) {
      const token = localStorage.getItem("token");
      if (!!token) dispatch(refreshToken(token));
    }
  }, [dispatch, currentUser]);

  React.useEffect(() => {
    if (currentUser) {
      form.setFieldsValue({
        taiKhoan: currentUser?.taiKhoan,
        email: currentUser?.email,
        hoTen: currentUser?.hoTen,
        soDT: currentUser?.soDT,
        matKhau: currentUser?.matKhau,
        maLoaiNguoiDung:
          currentUser?.maLoaiNguoiDung === "KhachHang" ? "Guest" : "Admin",
      });
    }
  }, [currentUser, form]);

  const onFinish = (values) => {
    dispatch(editUserInfo(values));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Layout loading={loading}>
      <div className="profile">
        <h2 className="profile__header">Profile</h2>

        <Row className="mb-8 profile__container">
          <Col span={24}>
            <div className="profile__container--user">
              <div className="profile__avatar">
                <img src={avatar} alt="avatar" />
              </div>
              <div className="profile__meta">
                <h3>{currentUser?.hoTen}</h3>
                <span>{currentUser?.taiKhoan}</span>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="profile__container">
          <Col span={24} xl={6}>
            <h2 className="px-2 text-xl text-white">User Profile</h2>
            <UserInfo
              form={form}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            />
          </Col>
          <Col span={24} xl={18}>
            <h2 className="px-2 text-xl text-white">History Orders</h2>
            <HistoryOrders data={currentUser?.thongTinDatVe} />
          </Col>
        </Row>
      </div>
    </Layout>
  );
};

export default UserProfile;
