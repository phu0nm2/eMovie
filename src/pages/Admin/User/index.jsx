import React, { Fragment, useEffect, useState } from "react";
import { Table, Input, Form, Button } from "antd";
import "./styles.scss";
import {
    deleteUserItem,
    getAdminUserList,
} from "../../../store/actions/Admin/user";
import { useDispatch, useSelector } from "react-redux";
import { EditOutlined, SearchOutlined } from "@mui/icons-material";
import { DeleteOutlined } from "@material-ui/icons";
import { Link, NavLink } from "react-router-dom";

const AdminUser = () => {
    const [form] = Form.useForm();
    const dispatch = useDispatch();

    const { userList } = useSelector((state) => state.adminUser);
    const [userSearch, setUserSearch] = useState(null);
    // const { id } = useParams();

    const onSearch = (value) => {
        setUserSearch(!!value ? value : null);
        // console.log(value);
    };

    useEffect(() => {
        dispatch(getAdminUserList({ tuKhoa: userSearch }));
    }, [dispatch, userSearch]);

    const columns = [
        {
            title: "Tài Khoản",
            dataIndex: "taiKhoan",
            width: "15%",
            editable: true,
        },
        {
            title: "Mật khẩu",
            dataIndex: "matKhau",
            width: "10%",
            editable: true,
        },
        {
            title: "Họ Tên",
            dataIndex: "hoTen",
            width: "25%",
            editable: true,
        },
        {
            title: "Email",
            dataIndex: "email",
            width: "15%",
            editable: true,
        },
        {
            title: "Số điện thoại",
            dataIndex: "soDt",
            width: "10%",
            editable: true,
        },
        {
            title: "Thao tác",
            dataIndex: "thaoTac",

            render: (_, userList, taiKhoan) => {
                return (
                    <Fragment>
                        <div className="admin-user-gr">
                            <Link
                                to={`/admin/users/edit/${userList.taiKhoan}`}
                                className="admin-user-btn admin-user-btn-edit"
                                type="button"
                            >
                                <EditOutlined />
                            </Link>

                            <Button
                                onClick={() => {
                                    window.confirm("Are you sure delete this?");
                                    dispatch(
                                      deleteUserItem({ taiKhoan: userList.taiKhoan })
                                    );
                                    // dispatch(getAdminUserList({ tukhoa: id }));
                                }}
                                className="admin-user-btn admin-user-btn-delete"
                                type="button"
                            >
                                <DeleteOutlined />
                            </Button>
                        </div>
                    </Fragment>
                );
            },
        },
    ];

    const mergedColumns = columns.map((col) => {
        if (!col.editable) {
            return col;
        }

        return {
            ...col,
            onCell: (record) => ({
                record,
                // inputType: col.dataIndex === "age" ? "number" : "text",
                // dataIndex: col.dataIndex,
                title: col.title,
            }),
        };
    });

    return (
        <div className="admin-users ">
            <NavLink to={`/admin/users/addnew`} className="admin-users-add">
                <Button type="primary" shape="round">
                    ADD NEW
                </Button>
            </NavLink>

            <div className="admin-user">
                <Input.Search
                    placeholder="Find user..."
                    onSearch={onSearch}
                    enterButton
                    className="admin--user__search"
                    suffix={
                        <SearchOutlined
                            style={{ color: "#2f80ed", fontSize: 18 }}
                        />
                    }
                />
            </div>

            <Form form={form} component={false}>
                <Table
                    className="admin_users"
                    bordered
                    value={userSearch}
                    dataSource={userList}
                    columns={mergedColumns}
                />
            </Form>
        </div>
    );
};

export default AdminUser;
