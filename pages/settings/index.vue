<!--
 * @Author: Eric YangXinde
 * @Date: 2020-10-12 14:58:11
 * @LastModifiedBy: Eric YangXinde
 * @LastEditTime: 2020-10-13 18:28:55
 * @Description: 
-->
<template>
	<div class="settings-page">
		<div class="container page">
			<div class="row">
				<div class="col-md-6 offset-md-3 col-xs-12">
					<h1 class="text-xs-center">Your Settings</h1>

					<form>
						<fieldset>
							<fieldset class="form-group">
								<input
									class="form-control"
									type="text"
									placeholder="URL of profile picture"
								/>
							</fieldset>
							<fieldset class="form-group">
								<input
									class="form-control form-control-lg"
									type="text"
									placeholder="Your Name"
								/>
							</fieldset>
							<fieldset class="form-group">
								<textarea
									class="form-control form-control-lg"
									rows="8"
									placeholder="Short bio about you"
								></textarea>
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
							<button
								class="btn btn-lg btn-primary pull-xs-right"
							>
								Update Settings
							</button>
						</fieldset>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	// 在路由匹配组件渲染之前会先执行中间件处理逻辑
	middleware: "auth",
	name: "SettingIndex",
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
	computed: {},
};
</script>

<style lang="less" scoped></style>
