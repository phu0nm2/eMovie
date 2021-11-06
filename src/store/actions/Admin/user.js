import { createAction } from "..";
import { AdminUserTypes } from "../type";
import { userDashboardApi } from "../../../api/adminApi";

export const getAdminUserList = (taiKhoan) => async (dispatch) => {
  try {
    dispatch(createAction(AdminUserTypes.ADMIN_GET_USER_REQUEST, {}));
    const { data } = await userDashboardApi.getUser(taiKhoan);
    dispatch(createAction(AdminUserTypes.ADMIN_GET_USER_SUCCESS, data.content));
  } catch (err) {
    dispatch(createAction(AdminUserTypes.ADMIN_GET_USER_FAILURE, err.response));
  }
};

export const getAdminUserById = taiKhoan => async dispatch => {
  try {
    dispatch(createAction(AdminUserTypes.ADMIN_GET_USER_BY_ID_REQUEST));
    const { data } = await userDashboardApi.getUserById(taiKhoan);
    dispatch(createAction(AdminUserTypes.ADMIN_GET_USER_BY_ID_SUCCESS, data.content));
  } catch (err) {
    dispatch(createAction(AdminUserTypes.ADMIN_GET_USER_BY_ID_FAILURE, err?.response?.data?.content));
  }
}

export const addAminUser = (taiKhoan) => async (dispatch) => {
  try {
    dispatch(createAction(AdminUserTypes.ADMIN_ADD_USER_BY_ID_REQUEST, {}));
    const { data } = await userDashboardApi.addUser(taiKhoan);
    dispatch(
      createAction(AdminUserTypes.ADMIN_ADD_USER_BY_ID_SUCCESS, data.content)
    );
    alert("Thêm người dùng thành công!");
  } catch (err) {
    // alert(err?.response);
    dispatch(
      createAction(AdminUserTypes.ADMIN_ADD_USER_BY_ID_FAILURE, err.response)
    );
  }
};

export const editAdminUser = (taiKhoan) => async (dispatch) => {
  try {
    dispatch(createAction(AdminUserTypes.ADMIN_EDIT_USER_BY_ID_REQUEST, {}));
    const { data } = await userDashboardApi.editUser(taiKhoan);
    alert("Sửa người dùng thành công!");
    dispatch(
      createAction(AdminUserTypes.ADMIN_EDIT_USER_BY_ID_SUCCESS, data.content)
    );
  } catch (err) {
    console.log(err?.response);
    dispatch(
      createAction(AdminUserTypes.ADMIN_EDIT_USER_BY_ID_FAILURE, err?.response)
    );
  }
};

export const deleteUserItem = (taiKhoan) => async (dispatch) => {
  try {
    const { data } = await userDashboardApi.deleteUser(taiKhoan);
    // console.log("data", data.content);
    alert(data.content);
    dispatch(getAdminUserList(taiKhoan));
  } catch (err) {
    console.log("Error", err.response);
  }
};
