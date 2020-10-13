<!--
 * @Author: Eric YangXinde
 * @Date: 2020-10-12 14:37:18
 * @LastModifiedBy: Eric YangXinde
 * @LastEditTime: 2020-10-13 18:31:06
 * @Description: 
-->
<template>
	<div class="auth-page">
		<div class="container page">
			<div class="row">
				<div class="col-md-6 offset-md-3 col-xs-12">
					<h1 class="text-xs-center">
						{{ isLogin ? "Sign in" : "Sign up" }}
					</h1>
					<p class="text-xs-center">
						<nuxt-link v-if="!isLogin" to="/login">
							Have an account?
						</nuxt-link>
						<nuxt-link v-else to="/register">
							Need an account?
						</nuxt-link>
					</p>
					<ul class="error-messages">
						<template v-for="(messages, field) in errors">
							<li v-for="(msg, index) in messages" :key="index">
								{{ field }} {{ msg }}
							</li>
						</template>
					</ul>

					<form @submit.prevent="onSubmit()">
						<fieldset v-if="!isLogin" class="form-group">
							<input
								class="form-control form-control-lg"
								type="text"
								placeholder="Your Name"
								v-model="user.username"
								required
							/>
						</fieldset>
						<fieldset class="form-group">
							<input
								class="form-control form-control-lg"
								type="email"
								placeholder="Email"
								v-model="user.email"
								required
							/>
						</fieldset>
						<fieldset class="form-group">
							<input
								class="form-control form-control-lg"
								type="password"
								placeholder="Password"
								v-model="user.password"
								required
								minlength="8"
							/>
						</fieldset>
						<button class="btn btn-lg btn-primary pull-xs-right">
							{{ isLogin ? "Sign in" : "Sign up" }}
						</button>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { login, register } from "@/api/user.js";
// 仅在客户端加载
const Cookie = process.client ? require("js-cookie") : undefined;

export default {
	// 在路由匹配组件渲染之前会先执行中间件处理逻辑
	middleware: "notAuthed",
	name: "LoginIndex",
	data() {
		return {
			user: {
				username: "",
				email: "",
				password: "",
			},
			errors: {},
		};
	},
	methods: {
		async onSubmit() {
			try {
				// 注册或登录成功之后会返回当前用户数据
				const { data } = this.isLogin
					? await login({
							user: this.user,
					  })
					: await register({
							user: this.user,
					  });
				// 同步数据状态
				this.$store.commit("setUser", data.user);
				// 数据持久化:之所以不用localstorage是因为需要能服务端渲染
				Cookie.set("user", data.user);
				this.$router.push("/");
			} catch (error) {
				// console.dir(error);
				this.errors = error.response.data.errors;
			}
		},
	},
	components: {},
	//created: {

	//},
	mounted() {},
	beforeDestroy() {},
	watch: {},
	computed: {
		isLogin() {
			return this.$route.name === "login";
		},
	},
};
</script>

<style lang="less" scoped></style>
