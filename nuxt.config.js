/*
 * @Author: Eric YangXinde
 * @Date: 2020-10-12 14:11:14
 * @LastModifiedBy: Eric YangXinde
 * @LastEditTime: 2020-10-12 16:44:30
 * @Description:
 */
module.exports = {
	router: {
		linkActiveClass: "active",
		extendRoutes(routes, resolve) {
			// 清空默认生成的基于pages目录的路由表
			routes.splice(0);
			routes.push(
				...[
					{
						name: "layout",
						path: "/", // 整体输出页面
						component: resolve(__dirname, "./pages/layout/"),
						children: [
							{
								name: "home",
								path: "", // 默认子路由
								component: resolve(__dirname, "./pages/home/"),
							},
							{
								name: "login",
								path: "/login",
								component: resolve(__dirname, "./pages/login/"),
							},
							{
								name: "register",
								path: "/register",
								component: resolve(__dirname, "./pages/login/"),
							},
							{
								name: "article",
								path: "/article/:slug",
								component: resolve(
									__dirname,
									"./pages/article/"
								),
							},
							{
								name: "settings",
								path: "/settings",
								component: resolve(
									__dirname,
									"./pages/settings/"
								),
							},
							{
								name: "profile",
								path: "/profile/:username",
								component: resolve(
									__dirname,
									"./pages/profile/"
								),
							},
							{
								name: "editor",
								path: "/editor",
								component: resolve(
									__dirname,
									"./pages/editor/"
								),
							},
						],
					},
				]
			);
		},
	},
};
