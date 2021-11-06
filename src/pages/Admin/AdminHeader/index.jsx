import React from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";
import { useDispatch } from "react-redux";
import { createAction } from '../../../store/actions';
import { adminTypes } from '../../../store/actions/type';

const AdminHeader = () => {
    const dispatch = useDispatch();
    const [openSidebar, setOpenSidebar] = React.useState(false);

    const handleOpenSidebar = () => {
        setOpenSidebar(!openSidebar);
        dispatch(createAction(adminTypes.IS_OPEN_SIDEBAR));
    };

    return (
        <div className="admin--header">
            <div className="admin--header__content">
                <NavLink
                    to="/"
                    aria-label="Back to homepage"
                    className="admin--header__logo"
                >
                    <img
                        className="w-10"
                        src="https://i.imgur.com/lC22izJ.png"
                        alt="logo"
                    />
                </NavLink>

                <button
                    className={`admin--header__btn ${
                        openSidebar && "admin--header__btn--active"
                    }`}
                    onClick={handleOpenSidebar}
                    type="button"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>
    );
};

export default AdminHeader;
