import MovieCreationOutlinedIcon from "@mui/icons-material/MovieCreationOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import { Menu } from "antd";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import avatar from "../../../assets/img/avatar.svg";
import { logout } from '../../../store/actions/user';
import "./style.scss";

const AdminSidebar = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { isOpenSidebar } = useSelector((state) => state.admin);
    const { loading, currentUser } = useSelector((state) => state.user);

    const handleMenuChange = e => history.push(`/admin/${e.key}`)

    const handleLogout = () => {
        const handleRedirect = () => history.push('/signin');
        dispatch(logout(handleRedirect));
    }
    
    return (
        <div
            className={`admin--sidebar ${
                isOpenSidebar && "admin--sidebar__active"
            }`}
        >
            <NavLink
                to="/"
                aria-label="Back to homepage"
                className="admin--sidebar__logo"
            >
                <img
                    className="w-10"
                    src="https://i.imgur.com/lC22izJ.png"
                    alt="logo"
                />
            </NavLink>

            <div className="admin--sidebar__user">
                <div className="admin--sidebar__user--img">
                    <img src={avatar} alt="avatar" />
                </div>

                <div className="admin--sidebar__user--title">
                    <span>Admin</span>
                    <p>{loading ? 'Loading...' : currentUser?.taiKhoan}</p>
                </div>

                <button className="admin--sidebar__user--btn" type="button" onClick={handleLogout}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M4,12a1,1,0,0,0,1,1h7.59l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4a1,1,0,0,0,.21-.33,1,1,0,0,0,0-.76,1,1,0,0,0-.21-.33l-4-4a1,1,0,1,0-1.42,1.42L12.59,11H5A1,1,0,0,0,4,12ZM17,2H7A3,3,0,0,0,4,5V8A1,1,0,0,0,6,8V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1V19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V16a1,1,0,0,0-2,0v3a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V5A3,3,0,0,0,17,2Z"></path>
                    </svg>
                </button>
            </div>

            <Menu
                theme="light"
                mode="inline"
                className="admin--sidebar__nav"
                defaultSelectedKeys={["films"]}
                defaultOpenKeys={["films"]}
                onSelect={handleMenuChange}
            >
                <Menu.Item
                    key="films"
                    icon={<MovieCreationOutlinedIcon />}
                >
                    Movie Dashboard
                </Menu.Item>
                <Menu.Item
                    key="users"
                    icon={<PeopleOutlineOutlinedIcon />}
                >
                    Users Dashboard
                </Menu.Item>
            </Menu>
        </div>
    );
};

export default AdminSidebar;
