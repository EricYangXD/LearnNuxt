/*
 * @Author: Eric YangXinde
 * @Date: 2020-10-13 18:21:44
 * @LastModifiedBy: Eric YangXinde
 * @LastEditTime: 2020-10-13 18:30:34
 * @Description: 验证是否登录的中间件
 */
export default function({ store, redirect }) {
	if (store.state.user) {
		return redirect("/");
	}
}
