import { Button, Form, Input, Select } from "antd";
import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { addAminUser } from "../../../../store/actions/Admin/user";
import "./index.scss";

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
    required: "${label} is required!",
    types: {
        email: "${label} is not a valid email!",
    },
    number: {
        range: "${label} must be between ${min} and ${max}",
    },
};
/* eslint-enable no-template-curly-in-string */
const { Option } = Select;

const AddUser = (props) => {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            taiKhoan: "",
            matKhau: "",
            email: "",
            soDt: "",
            maNhom: "GP07",
            maLoaiNguoiDung: "",
            hoTen: "",
        },
        onSubmit: (values) => {
            console.log("values", values);
            dispatch(addAminUser(values));
        },
    });

    return (
        <div className="container user_groups">
            <h1 className="user_groups-title">ADD</h1>
            <Form
                onSubmitCapture={formik.handleSubmit}
                {...layout}
                validateMessages={validateMessages}
            >
                <Form.Item
                    className="user_groups-fie"
                    onChange={formik.handleChange}
                    name="taiKhoan"
                    label="Tài khoản"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    className="user_groups-fie"
                    onChange={formik.handleChange}
                    name="matKhau"
                    label="Mật khẩu"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    className="user_groups-fie"
                    onChange={formik.handleChange}
                    name="hoTen"
                    label="Họ tên"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    className="user_groups-fie"
                    onChange={formik.handleChange}
                    name="email"
                    label="Email"
                    rules={[
                        {
                            type: "email",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    className="user_groups-fie"
                    onChange={formik.handleChange}
                    name="soDt"
                    label="Số điện thoại"
                    rules={[
                        {
                            type: "string",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item label="Loại người dùng">
                    <Input.Group compact>
                        <Form.Item
                            noStyle
                            rules={[
                                {
                                    required: true,
                                    message: "Province is required",
                                },
                            ]}
                        >
                            <Select
                                name="maLoaiNguoiDung"
                                onChange={(selectedOption) => {
                                    formik.setFieldValue(
                                        "maLoaiNguoiDung",
                                        selectedOption
                                    );

                                    console.log(selectedOption);
                                }}
                                placeholder="Chọn loại người dùng"
                            >
                                <Option value="QuanTri">Quản Trị</Option>
                                <Option value="KhachHang">Khách Hàng</Option>
                            </Select>
                        </Form.Item>
                    </Input.Group>
                </Form.Item>

                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button type="primary" htmlType="submit">
                        ADD
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};
export default AddUser;
