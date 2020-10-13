/*
 * @Author: Eric YangXinde
 * @Date: 2020-10-13 17:25:51
 * @LastModifiedBy: Eric YangXinde
 * @LastEditTime: 2020-10-13 18:08:12
 * @Description:
 */
const cookieParser = process.server ? require("cookieparser") : undefined;

export const state = () => {
	return {
		auth: null,
		user: null,
	};
};

export const mutations = {
	setUser(state, data) {
		state.user = data;
	},
	setAuth(state, data) {
		state.auth = data;
	},
};

export const actions = {
	// 仅仅会在服务端渲染的时候自动调用:初始化容器数据，传递数据给客户端
	nuxtServerInit({ commit }, { req }) {
		let user = null;
		if (req.headers.cookie) {
			const parsed = cookieParser.parse(req.headers.cookie);
			try {
				user = JSON.parse(parsed.user);
			} catch (e) {}
		}
		commit("setUser", user);
	},
};
