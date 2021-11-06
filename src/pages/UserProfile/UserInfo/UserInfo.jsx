import { Form, Input } from "antd";
import React from "react";
import { formRules } from "../../../constants/formRules";
import './style.scss'

const UserInfo = ({ form, onFinish, onFinishFailed }) => {
    return (
        <div className="flex items-center pb-4 profile__container--info rounded-2xl">
            <Form
                form={form}
                className="edit--user__form"
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                layout="vertical"
            >
                <Form.Item
                    className="form-control"
                    label="Username"
                    name="taiKhoan"
                    rules={formRules.usernameRules}
                    wrapperCol={{ span: 24 }}
                >
                    <Input
                        disabled
                        placeholder="Username"
                        className="edit--user__input"
                    />
                </Form.Item>

                <Form.Item
                    className="form-control"
                    label="Email"
                    name="email"
                    rules={formRules.emailRules}
                    wrapperCol={{ span: 24 }}
                >
                    <Input
                        disabled
                        placeholder="Email"
                        className="edit--user__input"
                    />
                </Form.Item>

                <Form.Item
                    className="form-control"
                    label="Full name"
                    name="hoTen"
                    rules={formRules.fullnameRules}
                    wrapperCol={{ span: 24 }}
                >
                    <Input
                        disabled
                        placeholder="Full name"
                        className="edit--user__input"
                    />
                </Form.Item>

                <Form.Item
                    className="form-control"
                    label="Phone"
                    name="soDT"
                    rules={formRules.phoneRules}
                    wrapperCol={{ span: 24 }}
                >
                    <Input
                        disabled
                        placeholder="Phone"
                        className="edit--user__input"
                    />
                </Form.Item>

                <Form.Item
                    className="form-control"
                    label="Type"
                    name="maLoaiNguoiDung"
                    rules={[
                        {
                            required: true,
                            message: "This field is required!",
                        },
                    ]}
                    wrapperCol={{ span: 24 }}
                >
                    <Input
                        disabled
                        placeholder="Type"
                        className="edit--user__input"
                    />
                </Form.Item>

                {/* <Form.Item
                    className="form-control"
                    label="Password"
                    name="matKhau"
                    rules={formRules.passwordRules}
                >
                    <Input.Password
                        disabled
                        placeholder="Password"
                        iconRender={(visible) =>
                            visible ? (
                                <EyeTwoTone />
                            ) : (
                                <EyeInvisibleOutlined />
                            )
                        }
                        className="edit--user__input"
                    />
                </Form.Item> */}

                {/* <Button
                    type="primary"
                    className="edit--user__btn"
                    htmlType="submit"
                    loading={loading}
                >
                    Save
                </Button> */}
            </Form>
        </div>
    );
};

export default UserInfo;
