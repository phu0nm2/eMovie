import { Table } from "antd";
import moment from "moment";
import React from "react";
import "./style.scss";

const columns = [
    {
        title: "Movie Image",
        dataIndex: "hinhAnh",
        key: "hinhAnh",
        render: (img) => (
            <img src={img} alt="movie-img" className="w-full h-full max-w-xs max-h-56" />
        ),
        responsive: ["md"],
    },
    {
        title: "Ticket ID",
        dataIndex: "maVe",
        key: "maVe",
        responsive: ["md"],
    },
    {
        title: "Movie Name",
        dataIndex: "tenPhim",
        key: "tenPhim",
    },
    {
        title: "Date Time",
        dataIndex: "ngayDat",
        key: "ngayDat",
        render: (date) => <span>{moment(date).format("llll")}</span>,
        responsive: ["sm"],
    },
    {
        title: "Price",
        dataIndex: "giaVe",
        key: "giaVe",
    },
    {
        title: "Duration",
        dataIndex: "thoiLuongPhim",
        key: "thoiLuongPhim",
    },
];

const paginationConfig = {
    pageSize: 2,
    className: "history--orders__pagination",
    showQuickJumper: false,
    showSizeChanger: false,
};

const HistoryOrders = ({ data }) => {
    return (
        <Table
            className="history--orders"
            bordered
            columns={columns}
            dataSource={data}
            pagination={paginationConfig}
        />
    );
};

export default HistoryOrders;
