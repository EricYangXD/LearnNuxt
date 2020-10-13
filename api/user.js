/*
 * @Author: Eric YangXinde
 * @Date: 2020-10-13 11:53:55
 * @LastModifiedBy: Eric YangXinde
 * @LastEditTime: 2020-10-13 16:43:01
 * @Description:
 */
import request from "@/utils/request";

export const login = (data) => {
	return request({
		method: "POST",
		url: "/api/users/login",
		data,
	});
};
export const register = (data) => {
	return request({
		method: "POST",
		url: "/api/users",
		data,
	});
};
export const getCurrentUser = (data) => {
	return request({
		method: "GET",
		url: "/api/user",
	});
};
export const updateUser = (data) => {
	return request({
		method: "PUT",
		url: "/api/user",
		data,
	});
};
