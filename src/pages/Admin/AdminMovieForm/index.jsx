import { PlusOutlined } from "@ant-design/icons";
import {
    Button,
    Col,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Row,
    Switch,
    Upload,
} from "antd";
import { useForm } from "antd/lib/form/Form";
import moment from "moment";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { addNewRules } from "../../../constants/formRules";
import { getBase64 } from "../../../helpers";
import {
    addNewMovie,
    editMovie,
    getAdminMovieById,
} from "../../../store/actions/Admin/movie";
import "./style.scss";

const AdminMovieForm = () => {
    const history = useHistory();
    const [form] = useForm();
    const { id } = useParams();
    const dispatch = useDispatch();
    const imageRef = React.useRef(null);
    const { editingMovie, loading } = useSelector((state) => state.adminMovie);
    const [previewImage, setPreviewImage] = React.useState("");
    const [fileList, setFileList] = React.useState([]);
    const [isHot, setIsHot] = React.useState(true);
    const [isComing, setIsComing] = React.useState(true);
    const [isShowing, setIsShowing] = React.useState(true);

    React.useEffect(() => {
        if (id) dispatch(getAdminMovieById(id));
    }, [id, dispatch]);

    React.useEffect(() => {
        if (!!editingMovie) {
            form.setFieldsValue({
                tenPhim: editingMovie?.tenPhim,
                moTa: editingMovie?.moTa,
                trailer: editingMovie?.trailer,
                hinhAnh: editingMovie?.hinhAnh,
                hot: editingMovie?.hot,
                dangChieu: editingMovie?.dangChieu,
                sapChieu: editingMovie?.sapChieu,
                danhGia: editingMovie?.danhGia,
                ngayKhoiChieu: moment(editingMovie?.ngayKhoiChieu),
            });
        }
    }, [form, editingMovie]);

    const handleHotSwitch = (value) => setIsHot(value);
    const handleComingSwitch = (value) => setIsComing(value);
    const handleShowingSwitch = (value) => setIsShowing(value);

    const normFile = (e) => {
        console.log("Upload event:", e);

        if (Array.isArray(e)) {
            return e;
        }

        return e && e.fileList;
    };

    const onFinish = (values) => {
        const dataValues = {
            ...values,
            ngayKhoiChieu: values["ngayKhoiChieu"].format("DD/MM/YYYY"),
            hot: isHot,
            File: fileList[0],
            sapChieu: isComing,
            dangChieu: isShowing,
        };

        const blob = new Blob([previewImage], { type: values.File[0].type });
        console.log(blob);
        const formData = new FormData();
        formData.append("maPhim", dataValues["maPhim"]);
        formData.append("tenPhim", dataValues["tenPhim"]);
        formData.append("moTa", dataValues["moTa"]);
        formData.append("ngayKhoiChieu", dataValues["ngayKhoiChieu"]);
        formData.append("sapChieu", dataValues["sapChieu"]);
        formData.append("dangChieu", dataValues["dangChieu"]);
        formData.append("hot", dataValues["hot"]);
        formData.append("danhGia", dataValues["danhGia"]);
        formData.append("trailer", dataValues["trailer"]);
        formData.append("File", blob, values.File[0].name);
        
        const handleRedirectAfterSuccess = () => history.push("/admin/films");

        if (editingMovie) {
            console.log(dataValues)
            dispatch(editMovie(formData, handleRedirectAfterSuccess));
        }
        else dispatch(addNewMovie(formData, handleRedirectAfterSuccess));
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    const handleChange = async ({ file }) => {
        if (!file.type.match(/\/(jpeg|png|jpg|JPEG|PNG|JPG)$/)) {
            console.log("Incorrect file type. Please upload jpeg, png or jpg.");
        }

        imageRef.current = URL.createObjectURL(file);
        const fileUpload = await getBase64(file);
        setPreviewImage(fileUpload);
    };

    const uploadProps = {
        onRemove: (file) => {
            const index = fileList.indexOf(file);
            const newFileList = fileList.slice();
            setFileList(newFileList.splice(index, 1));
        },
        beforeUpload: (file) => {
            setFileList([...fileList, file]);
            return false;
        },
        fileList,
    };

    const uploadButton = (
        <div>
            <PlusOutlined />
            <div className="mt-2 text-gray-100">Upload</div>
        </div>
    );

    if (loading) return <div className="text-white">Loading</div>;

    return (
        <div className="add--movie__container">
            <div className="add--movie">
                <div className="add--movie__title">
                    <h2>{id ? "Edit" : "Add New"}</h2>
                </div>

                <Form
                    form={form}
                    className="add--movie__form"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Row>
                        <Col span={24}>
                            <Row>
                                <Col
                                    span={24}
                                    md={10}
                                    className="dragger--cover"
                                >
                                    <Form.Item
                                        name="File"
                                        valuePropName="fileList"
                                        getValueFromEvent={normFile}
                                        className="form--dragger"
                                    >
                                        <Upload.Dragger
                                            {...uploadProps}
                                            onChange={handleChange}
                                            name="File"
                                        >
                                            {previewImage ? (
                                                <img
                                                    src={previewImage}
                                                    alt="avatar"
                                                    style={{ width: "100%" }}
                                                />
                                            ) : editingMovie ? (
                                                <img
                                                    src={editingMovie?.hinhAnh}
                                                    alt="avatar"
                                                    style={{ width: "100%" }}
                                                />
                                            ) : (
                                                uploadButton
                                            )}
                                        </Upload.Dragger>
                                    </Form.Item>
                                </Col>

                                <Col
                                    span={24}
                                    md={14}
                                    className="content--cover"
                                >
                                    <Row>
                                        <Col span={24}>
                                            <Form.Item
                                                className="form--group"
                                                name="tenPhim"
                                                label="Title"
                                                rules={addNewRules.tenPhim}
                                            >
                                                <Input placeholder="Title" />
                                            </Form.Item>
                                        </Col>
                                        <Col span={24}>
                                            <Form.Item
                                                className="form--group"
                                                name="moTa"
                                                label="Description"
                                                rules={addNewRules.moTa}
                                            >
                                                <Input.TextArea placeholder="Description" />
                                            </Form.Item>
                                        </Col>
                                        <Col
                                            span={24}
                                            lg={12}
                                            className="input--first"
                                        >
                                            <Form.Item
                                                className="form--group"
                                                name="ngayKhoiChieu"
                                                label="DatePicker"
                                                rules={
                                                    addNewRules.ngayKhoiChieu
                                                }
                                            >
                                                <DatePicker
                                                    allowClear={false}
                                                    placeholder="Release Date"
                                                    className="w-full"
                                                />
                                            </Form.Item>
                                        </Col>
                                        <Col
                                            span={24}
                                            lg={12}
                                            className="input--second"
                                        >
                                            <Form.Item
                                                className="form--group"
                                                name="danhGia"
                                                label="Rating"
                                            >
                                                <InputNumber
                                                    min={0}
                                                    max={10}
                                                    placeholder="Rating"
                                                    controls={false}
                                                    step={0.1}
                                                    onStep={false}
                                                />
                                            </Form.Item>
                                        </Col>
                                        <Col span={24} lg={8}>
                                            <Form.Item
                                                label="SapChieu"
                                                valuePropName="sapChieu"
                                                className="form--group"
                                            >
                                                <span className="mr-4 text-white">
                                                    Coming Soon
                                                </span>
                                                <Switch
                                                    defaultChecked
                                                    onChange={
                                                        handleComingSwitch
                                                    }
                                                />
                                            </Form.Item>
                                        </Col>
                                        <Col span={24} lg={8}>
                                            <Form.Item
                                                label="dangChieu"
                                                valuePropName="dangChieu"
                                                className="form--group"
                                            >
                                                <span className="mr-4 text-white">
                                                    Showing Now
                                                </span>
                                                <Switch
                                                    defaultChecked
                                                    onChange={
                                                        handleShowingSwitch
                                                    }
                                                />
                                            </Form.Item>
                                        </Col>
                                        <Col span={24} lg={8}>
                                            <Form.Item
                                                label="Hot"
                                                valuePropName="Hot"
                                                className="form--group"
                                            >
                                                <span className="mr-4 text-white">
                                                    Hot
                                                </span>
                                                <Switch
                                                    defaultChecked
                                                    onChange={handleHotSwitch}
                                                />
                                            </Form.Item>
                                        </Col>
                                        <Col span={24}>
                                            <Form.Item
                                                className="form--group"
                                                name="trailer"
                                                label="Trailer"
                                                rules={addNewRules.trailer}
                                            >
                                                <Input placeholder="Trailer" />
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
                                            {editingMovie ? "Update" : "Add"}
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

export default AdminMovieForm;
