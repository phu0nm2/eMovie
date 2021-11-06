import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import background from "../../assets/img/notfound-bg.jpg";
import SnackbarPopup from "../../components/Snackbar";
import { formRules } from "../../constants/formRules";
import { signup } from "../../store/actions/user";
import "./styles.scss";

const SignUp = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { loading, error } = useSelector((state) => state.user);

    const onFinish = (values) => {
        const handleRedirect = () => history.push("/signin");
        dispatch(signup(values, handleRedirect));
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <div
            className="sign-up"
            style={{ backgroundImage: `url(${background})` }}
        >
            {error && (
                <SnackbarPopup error={error} />
            )}
            <div className="form__wrapper">
                <Form
                    className="sign-up__form"
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <img
                        src="https://i.imgur.com/lC22izJ.png"
                        alt="logo"
                        className="m-auto mb-7"
                    />
                    <Form.Item
                        className="form-control"
                        label="Username"
                        name="taiKhoan"
                        rules={formRules.usernameRules}
                        wrapperCol={{ span: 24 }}
                    >
                        <Input
                            placeholder="Username"
                            className="sign-up__input"
                        />
                    </Form.Item>

                    <Form.Item
                        className="form-control"
                        label="Email"
                        name="email"
                        rules={formRules.emailRules}
                        wrapperCol={{ span: 24 }}
                    >
                        <Input placeholder="Email" className="sign-up__input" />
                    </Form.Item>

                    <Form.Item
                        className="form-control"
                        label="Full name"
                        name="hoTen"
                        rules={formRules.fullnameRules}
                        wrapperCol={{ span: 24 }}
                    >
                        <Input
                            placeholder="Full name"
                            className="sign-up__input"
                        />
                    </Form.Item>

                    <Form.Item
                        className="form-control"
                        label="Phone"
                        name="soDT"
                        rules={formRules.phoneRules}
                        wrapperCol={{ span: 24 }}
                    >
                        <Input placeholder="Phone" className="sign-up__input" />
                    </Form.Item>

                    <Form.Item
                        className="form-control"
                        label="Password"
                        name="matKhau"
                        rules={formRules.passwordRules}
                        wrapperCol={{ span: 24 }}
                    >
                        <Input.Password
                            placeholder="Password"
                            iconRender={(visible) =>
                                visible ? (
                                    <EyeTwoTone />
                                ) : (
                                    <EyeInvisibleOutlined />
                                )
                            }
                            className="sign-up__input"
                        />
                    </Form.Item>

                    <Button
                        type="primary"
                        className="sign-up__btn"
                        htmlType="submit"
                        loading={loading}
                    >
                        Sign Up
                    </Button>

                    <div className="sign-up__link">
                        Already have an account?
                        <Link to="/signin"> Sign in!</Link>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default SignUp;
