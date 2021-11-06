import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { logout } from "../../store/actions/user";
// import "./index.scss";
import "./style.scss";

const Header = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [searchOpen, setSearchOpen] = React.useState(false);
    const [navOpen, setNavOpen] = React.useState(false);
    const { currentUser, loading } = useSelector((state) => state.user);
    const { isAdmin } = useSelector((state) => state.admin);

    const handleSearchOpen = () => setSearchOpen(true);
    const handleSearchClose = () => setSearchOpen(false);

    const handleNavOpen = () => setNavOpen(!navOpen);

    const handleLogout = () => {
        const handleRedirect = () => history.push("/signin");
        dispatch(logout(handleRedirect));
    };

    return (
        <header className={navOpen && "header--menu"}>
            <div className="container">
                <div className="header-content">
                    <button
                        class={`header__menu ${
                            navOpen && "header__menu--active"
                        }`}
                        type="button"
                        onClick={handleNavOpen}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <NavLink
                        to="/"
                        aria-label="Back to homepage"
                        className="header__logo"
                    >
                        <img
                            className="w-10 h-auto"
                            src="https://i.imgur.com/lC22izJ.png"
                            alt="logo"
                        />
                    </NavLink>

                    {isAdmin && (
                        <ul
                            className={`header__nav ${
                                navOpen && "header__nav--active"
                            }`}
                        >
                            <li className="header__nav-item">
                                <NavLink
                                    to="/admin/films"
                                    className="header__nav-link"
                                >
                                    Admin Dashboard
                                </NavLink>
                            </li>
                        </ul>
                    )}

                    <div className="header__actions">
                        <form
                            action="#"
                            className={`header__form ${
                                searchOpen && "header__form--active"
                            }`}
                        >
                            <input
                                className="header__form-input"
                                type="text"
                                placeholder="I'm looking for..."
                            />
                            <button className="header__form-btn" type="button">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"></path>
                                </svg>
                            </button>
                            <button
                                type="button"
                                className="header__form-close"
                                onClick={handleSearchClose}
                            >
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M14.3345 0.000183105H5.66549C2.26791 0.000183105 0.000488281 2.43278 0.000488281 5.91618V14.0842C0.000488281 17.5709 2.26186 20.0002 5.66549 20.0002H14.3335C17.7381 20.0002 20.0005 17.5709 20.0005 14.0842V5.91618C20.0005 2.42969 17.7383 0.000183105 14.3345 0.000183105ZM5.66549 1.50018H14.3345C16.885 1.50018 18.5005 3.23515 18.5005 5.91618V14.0842C18.5005 16.7653 16.8849 18.5002 14.3335 18.5002H5.66549C3.11525 18.5002 1.50049 16.7655 1.50049 14.0842V5.91618C1.50049 3.23856 3.12083 1.50018 5.66549 1.50018ZM7.07071 7.0624C7.33701 6.79616 7.75367 6.772 8.04726 6.98988L8.13137 7.06251L9.99909 8.93062L11.8652 7.06455C12.1581 6.77166 12.6329 6.77166 12.9258 7.06455C13.1921 7.33082 13.2163 7.74748 12.9984 8.04109L12.9258 8.12521L11.0596 9.99139L12.9274 11.8595C13.2202 12.1524 13.2202 12.6273 12.9273 12.9202C12.661 13.1864 12.2443 13.2106 11.9507 12.9927L11.8666 12.9201L9.99898 11.052L8.13382 12.9172C7.84093 13.2101 7.36605 13.2101 7.07316 12.9172C6.80689 12.6509 6.78269 12.2343 7.00054 11.9407L7.07316 11.8566L8.93843 9.99128L7.0706 8.12306C6.77774 7.83013 6.77779 7.35526 7.07071 7.0624Z"
                                    ></path>
                                </svg>
                            </button>
                        </form>

                        <button
                            className="header__search"
                            type="button"
                            onClick={handleSearchOpen}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"></path>
                            </svg>
                        </button>

                        {!!currentUser ? (
                            <React.Fragment>
                                <NavLink
                                    to="/profile"
                                    type="button"
                                    className="header__user"
                                >
                                    {currentUser.taiKhoan}
                                </NavLink>
                                <button
                                    type="button"
                                    className="header__user--signout"
                                    onClick={handleLogout}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M20,12a1,1,0,0,0-1-1H11.41l2.3-2.29a1,1,0,1,0-1.42-1.42l-4,4a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l4,4a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L11.41,13H19A1,1,0,0,0,20,12ZM17,2H7A3,3,0,0,0,4,5V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V16a1,1,0,0,0-2,0v3a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1V8a1,1,0,0,0,2,0V5A3,3,0,0,0,17,2Z"></path>
                                    </svg>
                                </button>
                            </React.Fragment>
                        ) : loading ? (
                            <div className="header__user">
                                Username loading...
                            </div>
                        ) : (
                            <React.Fragment>
                                <NavLink
                                    to="/signup"
                                    type="button"
                                    className="header__user"
                                    disabled={loading}
                                >
                                    Sign Up
                                </NavLink>
                                <NavLink
                                    to="/signin"
                                    type="button"
                                    className="ml-3 header__user"
                                    disabled={loading}
                                >
                                    Sign In
                                </NavLink>
                            </React.Fragment>
                        )}
                    </div>
                </div>
            </div>
        </header>
        // <header className="fixed w-full p-4 z-100 bg-coolGray-100 text-coolGray-800 header-bg-color">
        //     <div className="container flex justify-between h-16 mx-auto">
        //         {/* Logo */}
        //         <NavLink
        //             to="/"
        //             aria-label="Back to homepage"
        //             className="flex items-center p-2"
        //         >
        //             <img
        //                 className="w-10"
        //                 src="https://i.imgur.com/lC22izJ.png"
        //                 alt="logo"
        //             />
        //         </NavLink>

        //         {/* menu header */}
        //         {/* <ul className="items-stretch hidden space-x-3 lg:flex">
        //             <li className="flex">
        //                 <NavLink
        //                     to="/"
        //                     className="flex items-center px-4 -mb-1 duration-500 border-b-2 border-transparent text-violet-600 border-violet-600 hover:text-blue-500"
        //                 >
        //                     Home
        //                 </NavLink>
        //             </li>
        //             <li className="flex">
        //                 <NavLink
        //                     to="/"
        //                     className="flex items-center px-4 -mb-1 duration-500 border-b-2 border-transparent hover:text-blue-500"
        //                 >
        //                     Catalog
        //                 </NavLink>
        //             </li>
        //             <li className="flex">
        //                 <NavLink
        //                     to="/"
        //                     className="flex items-center px-4 -mb-1 duration-500 border-b-2 border-transparent hover:text-blue-500"
        //                 >
        //                     Pricing plans
        //                 </NavLink>
        //             </li>
        //         </ul> */}

        //         {/* search, login */}
        //         {/* <div className="flex items-center md:space-x-4">
        //             <div className="relative">
        //                 <span className="absolute inset-y-0 right-0 flex items-center pl-2 ">
        //                     <button
        //                         type="submit"
        //                         title="Search"
        //                         className="p-1 text-blue-500 focus:outline-none focus:ring "
        //                     >
        //                         <svg
        //                             fill="currentColor"
        //                             viewBox="0 0 512 512"
        //                             className="w-4 h-4 text-coolGray-800"
        //                         >
        //                             <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z" />
        //                         </svg>
        //                     </button>
        //                 </span>

        //                 <input
        //                     type="search"
        //                     name="Search"
        //                     placeholder="Search..."
        //                     className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none bg-coolGray-100 text-coolGray-800 focus:bg-coolGray-50"
        //                 />
        //             </div>
        //
        //         <Input.Search
        //             placeholder="Search"
        //             onSearch={onSearch}
        //             enterButton
        //             className="header__search"
        //             suffix={
        //                 <SearchOutlined
        //                     style={{ color: "#fff", fontSize: 14 }}
        //                 />
        //             }
        //         />

        //         {!!currentUser ? (
        //             <React.Fragment>
        //                 {isAdmin && (
        //                     <NavLink
        //                         to="/admin/films"
        //                         type="button"
        //                         className="hidden px-6 py-2 font-semibold duration-500 rounded lg:block bg-violet-600 hover:text-blue-500 user__btn"
        //                     >
        //                         Admin Dashboard
        //                     </NavLink>
        //                 )}
        //                 <NavLink
        //                     to="/profile"
        //                     type="button"
        //                     className="hidden px-6 py-2 font-semibold duration-500 rounded lg:block bg-violet-600 hover:text-blue-500 user__btn"
        //                 >
        //                     {currentUser.taiKhoan}
        //                 </NavLink>
        //             </React.Fragment>
        //         ) : (
        //             <React.Fragment>
        //                 <NavLink
        //                     to="/signup"
        //                     type="button"
        //                     className="hidden px-6 py-2 font-semibold duration-500 rounded lg:block bg-violet-600 hover:text-blue-500 "
        //                 >
        //                     Sign Up
        //                 </NavLink>
        //                 <NavLink
        //                     to="/signin"
        //                     type="button"
        //                     className="hidden px-6 py-2 font-semibold duration-500 rounded lg:block bg-violet-600 hover:text-blue-500 "
        //                 >
        //                     Sign In
        //                 </NavLink>
        //             </React.Fragment>
        //         )}

        //         <button
        //             title="Open menu"
        //             type="button"
        //             className="p-4 lg:hidden"
        //         >
        //             <svg
        //                 xmlns="http://www.w3.org/2000/svg"
        //                 fill="none"
        //                 viewBox="0 0 24 24"
        //                 stroke="currentColor"
        //                 className="w-6 h-6 text-coolGray-800"
        //             >
        //                 <path
        //                     strokeLinecap="round"
        //                     strokeLinejoin="round"
        //                     strokeWidth={2}
        //                     d="M4 6h16M4 12h16M4 18h16"
        //                 />
        //             </svg>
        //         </button>
        //     </div>
        // </header>
    );
};

export default Header;
