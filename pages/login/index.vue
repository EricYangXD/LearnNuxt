<!--
 * @Author: Eric YangXinde
 * @Date: 2020-10-12 14:37:18
 * @LastModifiedBy: Eric YangXinde
 * @LastEditTime: 2020-10-12 14:55:26
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
						<li>That email is already taken</li>
					</ul>

					<form>
						<fieldset v-if="!isLogin" class="form-group">
							<input
								class="form-control form-control-lg"
								type="text"
								placeholder="Your Name"
							/>
						</fieldset>
						<fieldset class="form-group">
							<input
								class="form-control form-control-lg"
								type="text"
								placeholder="Email"
							/>
						</fieldset>
						<fieldset class="form-group">
							<input
								class="form-control form-control-lg"
								type="password"
								placeholder="Password"
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
export default {
	name: "LoginIndex",
	data() {
		return {};
	},
	methods: {},
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
