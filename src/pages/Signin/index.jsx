import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import background from "../../assets/img/notfound-bg.jpg";
import SnackbarPopup from '../../components/Snackbar/index';
import { formRules } from "../../constants/formRules";
import { signin } from '../../store/actions/user';
import "./styles.scss";

const SignIn = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { loading, error } = useSelector((state) => state.user);

    const onFinish = (values) => {
        const handleRedirect = () => history.push("/");
        dispatch(signin(values, handleRedirect));
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <div
            className="sign-in"
            style={{ backgroundImage: `url(${background})` }}
        >
            {!!error && (
                <SnackbarPopup error={error} />
            )}
            <div className="form__wrapper">
                <Form
                    className="sign-in__form"
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
                            className="sign-in__input"
                        />
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
                            className="sign-in__input"
                        />
                    </Form.Item>

                    <Button
                        type="primary"
                        className="sign-in__btn"
                        htmlType="submit"
                        loading={loading}
                    >
                        Sign In
                    </Button>

                    <div className="sign-in__link">
                        Don't have an account?
                        <Link to="/signup"> Sign up!</Link>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default SignIn;
