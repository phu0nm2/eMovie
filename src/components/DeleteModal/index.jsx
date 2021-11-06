import { Modal, Button } from "antd";
import React from "react";
import "./style.scss";

const DeleteModal = ({ isModalVisible, handleOk, handleCancel }) => {
    const CustomizedFooterModal = () => (
        <React.Fragment>
            <Button
                key="submit"
                onClick={handleOk}
                className="modal-btn modal-btn__delete"
            >
                Delete
            </Button>
            <Button
                key="back"
                onClick={handleCancel}
                className="modal-btn modal-btn__cancel"
            >
                Cancel
            </Button>
        </React.Fragment>
    );

    return (
        <Modal
            className="modal-delete"
            title="Delete Item"
            visible={isModalVisible}
            centered
            closable={false}
            footer={<CustomizedFooterModal />}
        >
            <p className="text-gray-100">
                Are you sure to permanently delete this item?
            </p>
        </Modal>
    );
};

export default DeleteModal;
