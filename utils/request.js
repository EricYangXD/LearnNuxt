/*
 * @Author: Eric YangXinde
 * @Date: 2020-10-12 16:53:23
 * @LastModifiedBy: Eric YangXinde
 * @LastEditTime: 2020-10-12 16:54:42
 * @Description:
 */
import axios from "axios";

const request = axios.create({
	baseURL: "https://conduit.productionready.io",
});

export default request;
