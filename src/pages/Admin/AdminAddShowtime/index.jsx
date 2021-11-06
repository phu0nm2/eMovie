import {
    Button,
    Col,
    DatePicker,
    Form,
    InputNumber,
    Row,
    Select,
    Typography,
    Cascader,
} from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import LoadingSpin from "../../../components/LoadingSpin";
import { showtimeRules } from "../../../constants/formRules";
import {
    getAdminMovieById,
    getAdminTheaterItemById,
    getAdminTheaterList,
    addAdminShowtime,
} from "../../../store/actions/Admin/movie";
import "./style.scss";

const AdminAddShowtime = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { loading, editingMovie, theaterList, selectedTheaterSystem } =
        useSelector((state) => state.adminMovie);

    React.useEffect(() => {
        dispatch(getAdminMovieById(id));
        dispatch(getAdminTheaterList());
    }, [dispatch, id]);

    const handleSelectTheaterSystem = (value) => {
        dispatch(getAdminTheaterItemById(value));
    };

    const customizedCascaderOptions = (selectedTheaterSystem) => {
        const res = selectedTheaterSystem?.map((item) => ({
            value: item.maCumRap,
            label: item.tenCumRap,
            children: item.danhSachRap.map((subItem) => ({
                value: subItem.maRap,
                label: subItem.tenRap,
            })),
        }));

        return res;
    };

    const onFinish = (values) => {
        const dataValues = {
            ngayChieuGioChieu: values["ngayChieuGioChieu"].format("DD/MM/YYYY HH:mm:ss"),
            maPhim: editingMovie?.maPhim,
            giaVe: values.giaVe,
            maRap: `${values.cumRap[0]}`,
        };
        console.log(values)
        dispatch(addAdminShowtime(dataValues));
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    if (loading) return <LoadingSpin />;

    return (
        <div className="add-showtime__container">
            <div className="add-showtime">
                <div className="add-showtime__title">
                    <h2>Add Showtime</h2>
                </div>

                <Form
                    className="add-showtime__form"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Row>
                        <Col span={24}>
                            <Row>
                                <Col span={24} md={10} className="image--cover">
                                    <Form.Item name="File" className="form-img">
                                        <img
                                            src={editingMovie?.hinhAnh}
                                            alt="movieImg"
                                            className="w-full h-auto"
                                        />
                                    </Form.Item>
                                </Col>

                                <Col
                                    span={24}
                                    md={14}
                                    className="content--cover"
                                >
                                    <Row>
                                        <Col span={24}>
                                            <Typography className="form-movieName">
                                                {editingMovie?.tenPhim}
                                            </Typography>
                                        </Col>
                                        <Col span={24}>
                                            <Form.Item
                                                className="form--group"
                                                name="heThongRap"
                                                label="Theater System"
                                                rules={showtimeRules.heThongRap}
                                            >
                                                <Select
                                                    placeholder="Theater System"
                                                    onSelect={
                                                        handleSelectTheaterSystem
                                                    }
                                                >
                                                    {theaterList?.map(
                                                        (theater) => (
                                                            <Select.Option
                                                                key={
                                                                    theater.maHeThongRap
                                                                }
                                                                value={
                                                                    theater.maHeThongRap
                                                                }
                                                            >
                                                                {
                                                                    theater.tenHeThongRap
                                                                }
                                                            </Select.Option>
                                                        )
                                                    )}
                                                </Select>
                                            </Form.Item>
                                        </Col>
                                        <Col span={24}>
                                            <Form.Item
                                                className="form--group"
                                                name="cumRap"
                                                label="Theater"
                                                rules={showtimeRules.cumRap}
                                            >
                                                <Cascader
                                                    allowClear={false}
                                                    placeholder="Theater"
                                                    options={customizedCascaderOptions(
                                                        selectedTheaterSystem
                                                    )}
                                                />
                                            </Form.Item>
                                        </Col>
                                        <Col
                                            span={24}
                                            lg={12}
                                            className="input--first"
                                        >
                                            <Form.Item
                                                className="form--group"
                                                name="ngayChieuGioChieu"
                                                label="DatePicker"
                                                rules={
                                                    showtimeRules.ngayChieuGioChieu
                                                }
                                            >
                                                <DatePicker
                                                    showTime
                                                    placeholder="Showtime"
                                                    className="w-full"
                                                />
                                            </Form.Item>
                                        </Col>
                                        <Col span={24} lg={12}>
                                            <Form.Item
                                                label="Gia Ve"
                                                name="giaVe"
                                                className="form--group"
                                                rules={showtimeRules.giaVe}
                                            >
                                                <InputNumber
                                                    min={50000}
                                                    max={200000}
                                                    placeholder="Price"
                                                    controls={false}
                                                    step={1000}
                                                    onStep={false}
                                                />
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>

                                <Col span={24} className="submit--cover">
                                    <Form.Item>
                                        <Button
                                            type="primary"
                                            htmlType="submit"
                                        >
                                            Add
                                        </Button>
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Form>
            </div>
        </div>
    );
};

export default AdminAddShowtime;
