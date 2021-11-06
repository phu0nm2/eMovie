import { Spin } from "antd";
import React from "react";
import './style.scss';

const LoadingSpin = () => {
    return (
        <div className="loading__container">
            <Spin
                size="large"
                className="absolute top-0 left-0 w-full h-screen text-white z-500 loading--spin"
            />
        </div>
    );
};

export default LoadingSpin;
